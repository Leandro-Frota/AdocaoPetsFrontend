
import { Container, Row, Col, Nav } from "react-bootstrap";

function Footer() {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <Container>
                <Row>
                    
                    <Col md={4}>
                        <h5 className="font-weight-bold">Link Adoção</h5>
                        <p>Conectando você aos melhores amigos peludos! Encontre um novo lar para o seu pet ou adote com amor.</p>
                    </Col>

                    
                    <Col md={4}>
                        <h5 className="font-weight-bold">Sobre o projeto</h5>
                        <p>O Link Adoção é uma plataforma dedicada a facilitar a adoção de animais. Nossa missão é criar um ambiente seguro e acessível para a adoção de pets e promover a conscientização sobre a importância da adoção responsável.</p>
                    </Col>

                    
                    <Col md={4}>
                        <h5 className="font-weight-bold">Siga-nos</h5>
                        <Nav>
                            <Nav.Link href="#" target="_blank" className="text-light">Facebook</Nav.Link>
                            <Nav.Link href="#" target="_blank" className="text-light">Instagram</Nav.Link>
                            <Nav.Link href="#" target="_blank" className="text-light">X</Nav.Link>
                        </Nav>
                    </Col>
                </Row>

                
                <Row className="text-center mt-4">
                    <Col>
                        <p>&copy; Desenvolvido por equipe LinkAdoção | Bootcamp Avanti - 2024</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer
