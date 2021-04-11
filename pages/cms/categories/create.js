import Layout from "../../../components/layout";
import Head from 'next/head';
import Link from 'next/link'
import {Form, Button} from 'react-bootstrap';
import { useState } from "react";
import slugifyString from '../../../util/slugifyString';
import { useRouter } from 'next/router';

export default function CreateCategoryPage() {
    const [categoryState, setCategoryState] = useState({
        title: "",
        slug: "",        
        description: ""
    });

    const router = useRouter();

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
        var resp = await fetch('/api/categories/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(categoryState)
        });
        
        var data = await resp.json();
        router.back();
    }

    return (
        <>
            <Layout>
                <Head>
                    <title>Sean Woodward | Blog - CMS - Create Category</title>
                </Head>
                <Link href="/cms/categories/">
                    <a className="btn btn-link">Back To Categories List</a>
                </Link>
                <h5 className="text-success">Create New Category</h5>
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
                    <Button type="submit">Create</Button>
                </Form>
            </Layout>
        </>
    )
}