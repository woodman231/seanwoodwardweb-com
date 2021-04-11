import Layout from "../../../components/layout";
import Head from 'next/head';
import Link from 'next/link';
import FolderRepository from '../../../util/folderRepository';
import path from 'path';
import { Breadcrumb } from "react-bootstrap";

export default function CategoryIndex({ categoryDetails }) {

    const articleLink = function (categoryDetails, articleDetails) {
        return `/blog/${categoryDetails['slug']}/${articleDetails['slug']}`;
    }

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
            <h5>Articles in Category "{categoryDetails['title']}"</h5>
            <ul>
                {
                    categoryDetails.articlesInCategory && categoryDetails.articlesInCategory.map((articleInCategory, articleInCategoryIndex) => {
                        if (articleInCategory['slug']) {
                            return (
                                <li key={articleInCategoryIndex}>
                                    <Link href={articleLink(categoryDetails, articleInCategory)}>
                                        <a>{articleInCategory['title']}</a>
                                    </Link>
                                </li>

                            )
                        }
                    })
                }
            </ul>
        </Layout>
    )

}

export async function getStaticPaths() {
    var categoriesRepository = new FolderRepository(path.join(process.cwd(), 'content', 'categories'));
    var allCategories = await categoriesRepository.getAllArrayOfObjects();
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
    var categoriesRepository = new FolderRepository(path.join(process.cwd(), 'content', 'categories'));
    var categoryDetails = await categoriesRepository.getOneBySlug(params['category']);

    var articlesRepository = new FolderRepository(path.join(process.cwd(), 'content', 'posts'));
    var allArticles = await articlesRepository.getAllArrayOfObjects();
    var articlesInCategory = [];
    articlesInCategory = allArticles.map((articleDetails) => {
        if (articleDetails['category'] === categoryDetails['uuid']) {
            return articleDetails
        }
    });

    if (articlesInCategory[0] !== undefined) {
        categoryDetails['articlesInCategory'] = articlesInCategory;
    }

    return { props: { categoryDetails } }
}