import { Card, Container, CardDeck, Button } from "react-bootstrap";
import React, { Component } from "react";

import CarouselBox from "../Components/CarouselBox";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our Team</h2>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={b1} />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, excepturi?
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={b2} />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, excepturi?
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={b3} />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, excepturi?
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
}
