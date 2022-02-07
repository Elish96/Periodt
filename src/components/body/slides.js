import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel} from 'react-bootstrap';
import './slides.css';
import Cup1 from '../assets/cup1.jpeg'
import Cup2 from '../assets/cup2.jpg';
import Cup3 from '../assets/cup3.jpg';
import Cup4 from '../assets/cup4.jpeg';

let Slides = ()=>{
    return (
        <Carousel id="cauro">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-90"
      src={Cup1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-90"
      src={Cup2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Cup3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Cup4}
      alt="Forth slide"
    />
    <Carousel.Caption>
      <h3>Forth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default Slides;