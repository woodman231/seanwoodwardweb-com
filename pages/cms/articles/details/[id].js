import Layout from "../../../../components/layout";
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function ArticleDetails() {
    const [articleState, setArticleState] = useState({});
    const [categoriesList, setCategoriesList] = useState([]);

    const router = useRouter();
    const articleId = router.query['id'];

    useEffect(async () => {
        var categoriesResponse = await fetch('/api/categories?returnType=array')
        var downloadedCategories = await categoriesResponse.json();

        setCategoriesList(downloadedCategories);

        var articleResponse = await fetch(`/api/posts/${articleId}`);
        var downloadedArticle = await articleResponse.json();

        setArticleState(downloadedArticle);
    }, []);

    const updateArticleCategory = (e) => {
        var newCategory = e.target.value;
        setArticleState(
            {
                ...articleState,
                category: newCategory
            }
        )
    }

    const updateArticleTitle = (e) => {
        var newTitle = e.target.value;
        var newSlug = slugifyString(newTitle);

        setArticleState(
            {
                ...articleState,
                title: newTitle,
                slug: newSlug
            }
        );
    }

    const updateArticleSlug = (e) => {
        var newSlug = e.target.value;
        setArticleState({
            ...articleState,
            slug: newSlug
        });
    }

    const updateArticleDate = (e) => {
        var newDate = e.target.value;
        setArticleState({
            ...articleState,
            created: newDate
        });
    }

    const updateArticleContent = (e) => {
        var newContent = e.target.value;
        setArticleState({
            ...articleState,
            content: newContent
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        var resp = await fetch(`/api/posts/${articleId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(articleState)
        });

        var data = await resp.json();
        router.back();
    }

    const handleDelete = async (e) => {
        e.preventDefault();

        var sure = window.confirm("Are you sure that you want to delete this Article?");
        if (sure) {
            await fetch(`/api/posts/${articleId}`, {
                method: 'DELETE'
            });

            router.back();
        }
    }

    return (
        <>
            <Layout>
                <Head>
                    <title>Sean Woodward | Blog - CMS - Update Article</title>
                </Head>
                <Link href="/cms/articles/">
                    <a className="btn btn-link">Back To Articles List</a>
                </Link>
                <h5 className="text-success">Create New Article</h5>
                <Form className="border border-light p-2" onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" value={articleState.category} onChange={e => updateArticleCategory(e)}>
                            <option value="">Please Select</option>
                            {
                                categoriesList.map((category, categoryIndex) => {
                                    return (
                                        <option key={categoryIndex} value={category['uuid']}>{category['title']}</option>
                                    )
                                })
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={articleState.title} onChange={e => updateArticleTitle(e)} type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Slug</Form.Label>
                        <Form.Control value={articleState.slug} onChange={e => updateArticleSlug(e)} type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Created</Form.Label>
                        <Form.Control value={articleState.created} onChange={e => updateArticleDate(e)} type="date" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows={3} value={articleState.content} onChange={e => updateArticleContent(e)} />
                    </Form.Group>
                    <Button type="submit">Update</Button>
                    <Button variant="danger" className="float-right" onClick={handleDelete}>Delete</Button>
                </Form>
            </Layout>
        </>
    )

}