import Layout from "../../../components/layout";
import Head from 'next/head';
import Link from 'next/link';
import FolderRepository from '../../../util/folderRepository';
import path from 'path';
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
    var categoriesRepository = new FolderRepository(path.join(process.cwd(), 'content', 'categories'));
    var categoriesAsObjects = await categoriesRepository.getAllObjectOfObjects();

    var articlesRepository = new FolderRepository(path.join(process.cwd(), 'content', 'posts'));
    var articlesArray = await articlesRepository.getAllArrayOfObjects();

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
    var categoriesRepository = new FolderRepository(path.join(process.cwd(), 'content', 'categories'));
    var categoryObject = await categoriesRepository.getOneBySlug(params['category']);

    var articlesRepository = new FolderRepository(path.join(process.cwd(), 'content', 'posts'));
    var articleObject = await articlesRepository.getOneBySlug(params['article']);

    var articleData = {
        ...articleObject,
        'category': categoryObject
    }

    return { props: { articleData } }
}
