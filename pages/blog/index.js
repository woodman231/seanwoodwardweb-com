import Layout from "../../components/layout";
import Head from 'next/head';
import FolderRepository from '../../util/folderRepository';
import { Breadcrumb } from "react-bootstrap";
import path from 'path';
import Link from 'next/link';

function BlogHomePage({ allCategories }) {
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
                <ul>
                    {
                        allCategories.map((category, categoryIndex) => {
                            return (
                                <li key={categoryIndex}>
                                    <Link href={categoryLink(category)}>
                                        <a>{category['title']}</a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    var categoriesRepository = new FolderRepository(path.join(process.cwd(), 'content', 'categories'));
    var allCategories = await categoriesRepository.getAllArrayOfObjects();

    return { props: { allCategories } }
}

export default BlogHomePage