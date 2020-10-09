import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav }  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from "../assets/pp.jpg";
import { Container, Row, Col } from 'react-grid-system';

class Main extends Component {
  
  render() {
    return (
    <Container fluid style={{margin: 0, padding: 0}}>
      <Row>
        <Col>
          <Navbar expand="lg" style={{backgroundColor: '#fff'}}>
            <Navbar.Brand href="#home">
            <img src={Logo} alt="Lab. de Análise e Processamento Analítico de Dados" height={100}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              <Nav.Link href="/" style={{color: 'black'}}>Inicio</Nav.Link>
              <Nav.Link href="/map" style={{color: 'black'}}>Mapa</Nav.Link>
              <Nav.Link href="/quemsomos" style={{color: 'black'}}>Quem somos?</Nav.Link>
               <Nav.Link href = "/help" style={{color: 'black'}}>Ajuda</Nav.Link>
              </Nav>
             
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col>
          {this.props.children}
        </Col>
      </Row>
      </Container>
    );
  }
}

export default withRouter(Main);
