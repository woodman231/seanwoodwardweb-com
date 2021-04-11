import Layout from "../../../components/layout";
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CategoriesIndex() {
    const [categoriesList, setCategoriesList] = useState([]);
    useEffect(async () => {
        var res = await fetch(`/api/categories/?returnType=array`);
        var downloadedCategories = await res.json();        
        setCategoriesList(downloadedCategories);
    }, []);

    const categoryDetailsLink = function(category) {
        return `/cms/categories/details/${category['uuid']}`;
    }

    return (
        <>
            <Layout>
                <Head>
                    <title>Sean Woodward | Blog - CMS - Categories</title>
                </Head>
                <Link href="/cms/">
                    <a className="btn btn-link d-block">Return to CMS Home</a>
                </Link>
                <Link href="/cms/categories/create">
                    <a className="btn btn-primary d-block">Create New Category</a>
                </Link>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Title</th>
                            <th>Slug</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categoriesList.map((category, categoryIndex) => {
                                return (
                                    <tr key={categoryIndex}>
                                        <td>
                                            <Link href={categoryDetailsLink(category)}>
                                                <a>(view)</a>
                                            </Link>
                                        </td>
                                        <td>{category['title']}</td>
                                        <td>{category['slug']}</td>
                                        <td>{category['description']}</td>
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