
import { Container, Row, Col } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';


import pet1 from '../assets/pet1.jpg';
import pet2 from '../assets/pet2.jpg';

const Home = () => {
  return (
    <Container fluid className=" h-full mt-2">
      
      <Row className="text-center mb-4">
        <Col>
          <h1>Bem-vindo ao Link Adoção!</h1>
          <p>Encontre seu novo amigo peludo e mude a vida dele para sempre.</p>
        </Col>  
        
      </Row>
      <Row className="text-center mb-4">
        <Col>
          <Link to="/main" className="btn btn-success btn-lg">
            Entrar
          </Link>
        </Col>
      </Row>

      
      <Row className="text-center">
        
        <Col md={6} className="mb-4">
          <img
            src={pet1}
            alt="Adote um Pet"
            className="img-fluid rounded" 
            style={{ maxHeight: '300px', objectFit: 'cover' }} 
          />
          <h3 className="mt-3">Adote um Pet</h3>
          <p>Dar um lar para um pet é um gesto de amor e responsabilidade. Encontre seu novo amigo!</p>
        </Col>

        
        <Col md={6} className="mb-4">
          <img
            src={pet2}
            alt="Adoção Responsável"
            className="img-fluid rounded" 
            style={{ maxHeight: '300px', objectFit: 'cover' }} 
          />
          <h3 className="mt-3">Adoção Responsável</h3>
          <p>Adotar é um compromisso que traz alegria, mas também exige cuidados e dedicação.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home
