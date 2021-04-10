import MyNav from './nav';
import { Container } from 'react-bootstrap';

export default function Layout({ preview, children }) {
    return (
        <>
            <MyNav />
            <Container>
                <main className="mt-2">{children}</main>
            </Container>
        </>
    )
}