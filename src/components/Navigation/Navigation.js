import logo from '../../assets/inverted-logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';

export default function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" className="fixed-top">
            <Container>
                <Navbar.Brand href="/">
                    <img id="logo" src={logo} alt="Shut Up And Dance" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="https://app.shutupanddance.io/login" title="Log In">Log In</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="https://app.shutupanddance.io/signup" title="Sign Up">Sign Up</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};