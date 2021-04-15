import Layout from "../../../components/layout";
import Head from 'next/head';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import sortDescendingByDate from '../../../util/sortDescendingByDate';

function BlogCmsArticlesHomePage() {
    const [articlesList, setArticlesList] = useState([]);

    useEffect(async () => {
        var categoriesRes = await fetch(`/api/categories?returnType=object`);
        var downloadedCategories = await categoriesRes.json();        

        var articlesRes = await fetch(`/api/posts/`);
        var downloadedArticles = await articlesRes.json();
        downloadedArticles.sort(sortDescendingByDate);
        var newArticlesState = downloadedArticles.map((downloadedArticle) => {
            return {
                uuid: downloadedArticle['uuid'],
                category: downloadedCategories[downloadedArticle['category']],
                title: downloadedArticle['title'],
                slug: downloadedArticle['slug'],
                date: downloadedArticle['date'],
                content: downloadedArticle['content']
            }
        });

        setArticlesList(newArticlesState);

    }, []);

    const articleDetailsLink = function(article) {
        return `/cms/articles/details/${article['uuid']}`;
    }

    return (
        <>
            <Layout>
                <Head>
                    <title>Sean Woodward | Blog - CMS - Article</title>
                </Head>
                <Link href="/cms/">
                    <a className="btn btn-link d-block">Return to CMS Home</a>
                </Link>
                <Link href="/cms/articles/create">
                    <a className="btn btn-primary d-block">Create New Article</a>
                </Link>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Slug</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            articlesList.map((article, articleIndex) => {
                                return (
                                    <tr key={articleIndex}>
                                        <td>
                                            <Link href={articleDetailsLink(article)}>
                                                <a>(view)</a>
                                            </Link>
                                        </td>
                                        <td>{new Date(article['date']).toLocaleString()}</td>
                                        <td>{article['title']}</td>
                                        <td>{article['slug']}</td>
                                        <td>{article['category']['title']}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </Layout>
        </>
    )
}

export default BlogCmsArticlesHomePage