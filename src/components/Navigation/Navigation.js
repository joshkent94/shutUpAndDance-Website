import logo from '../../assets/inverted-logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';

export default function Navigation() {
    window.onscroll = function () {
        const nav = document.getElementById('nav');
        const headingHeight = document.getElementById("greeting").offsetHeight - document.getElementById("nav").offsetHeight;
        if (document.body.scrollTop >= headingHeight || document.documentElement.scrollTop >= headingHeight) {
            nav.classList.add("nav-colored");
            nav.classList.remove("nav-transparent");
        }
        else {
            nav.classList.add("nav-transparent");
            nav.classList.remove("nav-colored");
        }
    };

    return (
        <Navbar collapseOnSelect expand="lg" className="fixed-top nav-transparent" id="nav">
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