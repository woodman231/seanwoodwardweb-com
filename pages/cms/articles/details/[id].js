import Layout from "../../../../components/layout";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Editor } from "@tinymce/tinymce-react";

export default function ArticleDetails() {
  const [articleState, setArticleState] = useState({});
  const [categoriesList, setCategoriesList] = useState([]);

  const router = useRouter();
  const articleId = router.query["id"];

  useEffect(async () => {
    var categoriesResponse = await fetch("/api/categories?returnType=array");
    var downloadedCategories = await categoriesResponse.json();

    setCategoriesList(downloadedCategories);

    var articleResponse = await fetch(`/api/posts/${articleId}`);
    var downloadedArticle = await articleResponse.json();

    setArticleState(downloadedArticle);
  }, []);

  const updateArticleCategory = (e) => {
    var newCategory = e.target.value;
    setArticleState({
      ...articleState,
      category: newCategory,
    });
  };

  const updateArticleTitle = (e) => {
    var newTitle = e.target.value;
    var newSlug = slugifyString(newTitle);

    setArticleState({
      ...articleState,
      title: newTitle,
      slug: newSlug,
    });
  };

  const updateArticleSlug = (e) => {
    var newSlug = e.target.value;
    setArticleState({
      ...articleState,
      slug: newSlug,
    });
  };

  const updateDescription = (e) => {
    var newDescription = e.target.value;
    setArticleState({
      ...articleState,
      description: newDescription,
    });
  };  

  const updateArticleContent = (newContent, editor) => {
    setArticleState({
      ...articleState,
      content: newContent,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var resp = await fetch(`/api/posts/${articleId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articleState),
    });

    var data = await resp.json();
    router.back();
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    var sure = window.confirm(
      "Are you sure that you want to delete this Article?"
    );
    if (sure) {
      await fetch(`/api/posts/${articleId}`, {
        method: "DELETE",
      });

      router.back();
    }
  };

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
            <Form.Control
              as="select"
              value={articleState.category}
              onChange={(e) => updateArticleCategory(e)}
            >
              <option value="">Please Select</option>
              {categoriesList.map((category, categoryIndex) => {
                return (
                  <option key={categoryIndex} value={category["uuid"]}>
                    {category["title"]}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={articleState.title}
              onChange={(e) => updateArticleTitle(e)}
              type="text"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Slug</Form.Label>
            <Form.Control
              value={articleState.slug}
              onChange={(e) => updateArticleSlug(e)}
              type="text"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <div className="form-control" readonly>
              {new Date(articleState.date).toLocaleString()}
            </div>
            <Form.Text>The date will be updated after saving</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={articleState.description}
              onChange={(e) => updateDescription(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Content</Form.Label>
            <Editor
              value={articleState.content}
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount codesample",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic underline | backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | link image codesample | code",
              }}
              onEditorChange={updateArticleContent}
            />
          </Form.Group>
          <Button type="submit">Update</Button>
          <Button
            variant="danger"
            className="float-right"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Form>
      </Layout>
    </>
  );
}
