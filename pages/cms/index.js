import Layout from "../../components/layout";
import Head from 'next/head';
import Link from 'next/link'

export default function CmsHome() {
    return(
        <>
            <Layout>
                <Head>
                    <title>Sean Woodward | Blog - CMS</title>
                </Head>
                <Link href="/cms/categories/">
                    <a className="btn btn-link d-block">Manage Categories</a>
                </Link>
                <Link href="/cms/articles/">
                    <a className="btn btn-link d-block">Manage Articles</a>
                </Link>
            </Layout>
        </>
    )
}