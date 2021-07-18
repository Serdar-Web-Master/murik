import React, { Component } from "react";
import { CarouselItem } from "react-bootstrap";

import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img12 from "../assets/12.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img12} alt="img1" />
          <Carousel.Caption>
            <h3>Perwoe img</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio, architecto!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="img1" />
          <Carousel.Caption>
            <h3>Perwoe img</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio, architecto!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="img1" />
          <Carousel.Caption>
            <h3>Tret"e img</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio, architecto!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
