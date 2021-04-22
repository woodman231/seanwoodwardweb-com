import {  
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Link from "next/link";

export default function articlesListComponent({ allArticles }) {
  const articleLink = function (article) {
    return `/blog/${article["category"]["slug"]}/${article["slug"]}`;
  };

  return (
    <Card border="secondary" className="mb-2">
      <Card.Header>Articles</Card.Header>
      <ListGroup>
        {allArticles && allArticles.map((article, articleIndex) => {
          return (
            <Link key={articleIndex} href={articleLink(article)} passHref>
              <ListGroupItem
                as="a"
                className="list-group-item-action flex-column align-item-start"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{article["title"]}</h5>
                  <small>
                    {new Date(article["date"]).toLocaleDateString()}
                  </small>
                </div>
                <p>{article["description"]}</p>
                <small>In Category: {article["category"]["title"]}</small>
              </ListGroupItem>
            </Link>
          );
        })}
      </ListGroup>
    </Card>
  );
}
