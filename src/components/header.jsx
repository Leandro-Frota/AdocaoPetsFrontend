
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from '../assets/logo.jpeg'; 

function Header() {
    return (
        <Navbar bg="white" expand="lg" className="px-4 border-bottom">
            <Navbar.Brand href="" className="d-flex align-items-center">
                <img
                    src={logo}
                    alt="Logo"
                    width="80"
                    className="mr-2"
                />
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

                <Button variant="outline-primary">Logout</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header
