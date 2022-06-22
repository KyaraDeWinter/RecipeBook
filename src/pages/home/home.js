import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from '../../components/carousel/carousel';
import Card from '../../components/card/card';
import Footer from '../../components/footer/footer'

function Home() {
  return (
    <>
        <Carousel />
        <Container>
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

export default Home;