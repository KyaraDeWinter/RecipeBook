import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import './carousel.css'

function CarouselSlide() {
  return (
    <>
    <Carousel className='carouselTotal'>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src="images/photo01.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/photo02.jpeg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default CarouselSlide;