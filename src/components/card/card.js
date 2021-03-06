import Card from 'react-bootstrap/Card';
import './card.css';

function Cards() {
  return (
    <Card className='cardTotal'>
      <Card.Img variant="top" src="images/photo03.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;