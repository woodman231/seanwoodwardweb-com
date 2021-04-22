import {Nav, Navbar} from 'react-bootstrap';
import Link from 'next/link'

export default function MyNav({ preview, children }) {
    return(
        <Navbar variant="dark" bg="primary" expand="lg">
            <Link href="/" passHref>
                <Navbar.Brand>Sean Woodward</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link href="/blog" passHref>
                        <Nav.Link>Blog</Nav.Link>
                    </Link>
                    <Link href="/blog/projects" passHref>
                        <Nav.Link>Projects</Nav.Link>
                    </Link>
                    <Link href="/blog/achievements-awards" passHref>
                        <Nav.Link>Achievements / Awards</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}