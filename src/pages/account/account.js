import React from "react";
import Container from 'react-bootstrap/Container';
import Accountdetail from '../../components/accountdetail/accountdetail';
import Footer from '../../components/footer/footer'

function Account() {
  return (
    <>
        <Container>
            <Accountdetail />
        </Container> 
        <Footer />
    </>
  );
}

export default Account;