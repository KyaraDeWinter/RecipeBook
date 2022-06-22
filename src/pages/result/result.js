import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../components/card/card';
import Footer from '../../components/footer/footer'

function Result() {
  return (
    <>
        <Container>
            <Row>
                <Col><Card /></Col>
                <Col><Card /></Col>
                <Col><Card /></Col>
            </Row>
            <Row>
                <Col><Card /></Col>
                <Col><Card /></Col>
                <Col><Card /></Col>
            </Row>
        </Container> 
        <Footer />
    </>
  );
}

export default Result;