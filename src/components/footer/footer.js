import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css'

function Footer() {
  return (
    <div className='footerTotal'>
      <Row>
        <Col>
            <h5>Contact</h5>
            <hr></hr>
            <p>Email: reciphree@info.com</p>
            <p>Tel: +31 612345678</p>
        </Col>
        <Col>
            <h5>Social Media</h5>
            <hr></hr>
            <p>Instagram</p>
            <p>Facebook</p>
        </Col>
        <Col>
            <h5>FAQ</h5>
            <hr></hr>
            <p>Frequently Asked Questions</p>
            <p>Ask us Anything</p>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;