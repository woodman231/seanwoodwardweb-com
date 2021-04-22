import Layout from "../../../../components/layout";
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import {Form, Button} from 'react-bootstrap';
import slugifyString from '../../../../util/slugifyString';

export default function CategoryDetails() {
    const [categoryState, setCategoryState] = useState({});
    const [articlesInCategoryData, setArticlesInCategoryData] = useState([]);

    const router = useRouter();
    const categoryId = router.query['id'];

    useEffect(async () => {        
        var res = await fetch(`/api/categories/${categoryId}`);
        var downloadedCategoryDetails = await res.json();
        setCategoryState(downloadedCategoryDetails);
    }, []);

    const updateTitle = (e) => {
        var newTitle = e.target.value;
        var newSlug = slugifyString(newTitle);

        setCategoryState(
            {
                ...categoryState,
                title: newTitle,
                slug: newSlug
            }
        );
    }

    const updateSlug = (e) => {
        var newSlug = e.target.value;
        setCategoryState(
            {
                ...categoryState,
                slug: newSlug
            }
        );
    }

    const updateDescription = (e) => {
        var newDescription = e.target.value;
        setCategoryState(
            {
                ...categoryState,
                description: newDescription
            }
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        var resp = await fetch(`/api/categories/${categoryId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(categoryState)
        });
        
        var data = await resp.json();
        router.back();
    }

    const handleDelete = async (e) => {
        e.preventDefault();

        var sure = window.confirm("Are you sure that you want to delete this category?");
        if(sure) {
            await fetch(`/api/categories/${categoryId}`, {
                method: 'DELETE'                
            });

            router.back();
        }  
    }

    return (
        <Layout>
            <Head>
                <title>Sean Woodward | Blog - CMS - Category Details</title>
            </Head>
            <Link href="/cms/categories/">
                <a className="btn btn-link">Back To Categories List</a>
            </Link>
            <h5 className="text-success">Category Details</h5>
            <Form className="border border-light p-2" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control value={categoryState.title} onChange={e => updateTitle(e)} type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Slug</Form.Label>
                    <Form.Control value={categoryState.slug} onChange={e => updateSlug(e)} type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} value={categoryState.description} onChange={e => updateDescription(e)} />
                </Form.Group>
                <Button type="submit">Update</Button>
                <Button variant="danger" className="float-right" onClick={handleDelete}>Delete</Button>
            </Form>
        </Layout>
    )
}