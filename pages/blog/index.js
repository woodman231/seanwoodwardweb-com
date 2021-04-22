import Layout from "../../components/layout";
import Head from 'next/head';
import { Breadcrumb, Row, Col, Media, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Link from 'next/link';
import sortAscendingByTitle from '../../util/sortAscendingByTitle'
import sortDescendingByDate from '../../util/sortDescendingByDate'

import ArticlesListComponent from '../../components/articlesListComponent';

import CategoriesRepository from '../../repositories/categoriesRepository';
import ArticlesRepository from '../../repositories/articlesRepository';



function BlogHomePage({ allArticles, allCategories }) {
    

    const categoryLink = function (category) {
        return `/blog/${category['slug']}`;
    }

    return (
        <>
            <Layout>
                <Head>
                    <title>Sean Woodward | Blog</title>
                </Head>
                <Breadcrumb>
                    <Link href="/blog" passHref>
                        <Breadcrumb.Item>Blog</Breadcrumb.Item>
                    </Link>
                </Breadcrumb>
                <h1 className="display-4">Blog</h1>
                <Row>
                    <Col sm={12} md={6}>
                        <ArticlesListComponent allArticles={allArticles} />
                    </Col>
                    <Col sm={12} md={6}>
                        <Card border="secondary">
                            <Card.Header>Categories</Card.Header>
                            <ListGroup>
                                {
                                    allCategories.map((category, categoryIndex) => {
                                        return (
                                            <Link key={categoryIndex} href={categoryLink(category)} passHref>
                                                <ListGroupItem as="a" className="list-group-item-action">
                                                    <h5>{category['title']}</h5>
                                                </ListGroupItem>
                                            </Link>                                            
                                        )
                                    })
                                }
                            </ListGroup>
                        </Card>                        
                    </Col>
                </Row>                
                
            </Layout>
        </>
    )
}

export async function getStaticProps() {    
    var allArticles = await ArticlesRepository.getAllArrayOfObjects();
    var allCategories = await CategoriesRepository.getAllArrayOfObjects();
    var allCategoriesAsObject = await CategoriesRepository.getAllObjectOfObjects();

    allArticles.sort(sortDescendingByDate);

    allArticles = allArticles.map((article) => {
        return(
            {
                ...article,
                'category': allCategoriesAsObject[article['category']]
            }
        )
    });

    allCategories.sort(sortAscendingByTitle);

    return { props: { allArticles, allCategories } }
}

export default BlogHomePage