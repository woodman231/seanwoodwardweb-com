import Layout from "../../../components/layout";
import Head from 'next/head';
import Link from 'next/link';
import CategoriesRepository from '../../../repositories/categoriesRepository';
import ArticlesRepository from '../../../repositories/articlesRepository';
import { Breadcrumb } from "react-bootstrap";

export default function CategoryIndex({ articleData }) {

    const categoryLink = function (category) {
        return `/blog/${category['slug']}`;
    }

    return (
        <>
            <Layout>
                <Head>
                    <title>Sean Woodward | Blog | {articleData['category']['title']} | {articleData['title']}</title>
                </Head>
                <Breadcrumb>
                    <Link href="/blog" passHref>
                        <Breadcrumb.Item>Blog</Breadcrumb.Item>
                    </Link>
                    <Link href={categoryLink(articleData['category'])} passHref>
                        <Breadcrumb.Item>{articleData['category']['title']}</Breadcrumb.Item>
                    </Link>
                    <Breadcrumb.Item active>{articleData['title']}</Breadcrumb.Item>
                </Breadcrumb>                
                <h4>{articleData['title']}</h4>
<pre>
{articleData['content']}
</pre>
            </Layout>
        </>
    )
}

export async function getStaticPaths() {    
    var categoriesAsObjects = await CategoriesRepository.getAllObjectOfObjects();
    
    var articlesArray = await ArticlesRepository.getAllArrayOfObjects();

    var mergedArticleData = articlesArray.map((article) => {
        return (
            {
                ...article,
                'category': categoriesAsObjects[article['category']]
            }
        )
    });

    var allRoutes = mergedArticleData.map((articleData) => {
        return (
            {
                params: {
                    'category': articleData['category']['slug'],
                    'article': articleData['slug']
                }
            }
        )
    });

    return { paths: allRoutes, fallback: false }
}

export async function getStaticProps({ params }) {    
    var categoryObject = await CategoriesRepository.getOneBySlug(params['category']);
    
    var articleObject = await ArticlesRepository.getOneBySlug(params['article']);

    var articleData = {
        ...articleObject,
        'category': categoryObject
    }

    return { props: { articleData } }
}
