
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from '../assets/logo.jpeg'; 
import { Link } from "react-router-dom";
import LogoutButton from "./logout.jsx";

function Header() {
    return (
        <Navbar bg="white" expand="lg" className="px-4 border-bottom">
            <Navbar.Brand href="" className="d-flex align-items-center">
                <Link to='/main'><img
                    src={logo}
                    alt="Logo"
                    width="80"
                    className="mr-2"
                /></Link>
                <span className="font-weight-bold" style={{ fontSize: '24px', color: '#6c757d' }}>
                    Link Adoção
                </span>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                
                <Nav className="mr-auto">
                    
                </Nav>

                <Form className="d-flex w-50">
                    <FormControl
                        type="search"
                        placeholder="Buscar"
                        className="mr-2"
                    />
                    <Button variant="outline-success">Buscar</Button>
                </Form>

                {/* <Link to='/'><div className="btn btn-primary outline-primary">Logout</div></Link> */}
                <LogoutButton />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header
