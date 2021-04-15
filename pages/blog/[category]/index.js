import Layout from "../../../components/layout";
import Head from 'next/head';
import Link from 'next/link';
import CategoriesRepository from '../../../repositories/categoriesRepository';
import ArticlesRepository from '../../../repositories/articlesRepository';
import { Breadcrumb } from "react-bootstrap";
import sortDescendingByDate from '../../../util/sortDescendingByDate';

import ArticlesListComponent from '../../../components/articlesListComponent';

export default function CategoryIndex({ categoryDetails }) {    

    return (
        <Layout>
            <Head>
                <title>Sean Woodward | Blog | {categoryDetails['title']}</title>
            </Head>
            <Breadcrumb>
                <Link href="/blog" passHref>
                    <Breadcrumb.Item>Blog</Breadcrumb.Item>
                </Link>
                <Breadcrumb.Item active>{categoryDetails['title']}</Breadcrumb.Item>
            </Breadcrumb>
            <h4>{categoryDetails['title']}</h4>
            <p>{categoryDetails['description']}</p>
            <ArticlesListComponent allArticles={categoryDetails['articlesInCategory']} />
        </Layout>
    )

}

export async function getStaticPaths() {    
    var allCategories = await CategoriesRepository.getAllArrayOfObjects();
    var allRoutes = allCategories.map((category) => {
        return (
            {
                params: {
                    'category': category['slug']
                }
            }
        )
    });

    return { paths: allRoutes, fallback: false }
}

export async function getStaticProps({ params }) {    
    var categoryDetails = await CategoriesRepository.getOneBySlug(params['category']);
    
    var allArticles = await ArticlesRepository.getAllArrayOfObjects();
    var articlesInCategory = [];
    articlesInCategory = allArticles.map((articleDetails) => {
        if (articleDetails['category'] === categoryDetails['uuid']) {
            return {
                ...articleDetails,
                category: JSON.parse(JSON.stringify(categoryDetails))
            }
        }
    });

    if (articlesInCategory[0] !== undefined) {
        articlesInCategory.sort(sortDescendingByDate);        

        categoryDetails['articlesInCategory'] = articlesInCategory;
    }

    return { props: { categoryDetails } }
}