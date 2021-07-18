import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";
import lion from "../assets/lion.jpg";
import komp from "../assets/komp.jpg";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Desing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Library</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img src={lion} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis veritatis molestias, quis saepe vero nulla
                    necessitatibus aspernatur dolorem ut, optio ea quas quae,
                    cumque sit recusandae consequuntur soluta corporis animi.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src={komp} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis veritatis molestias, quis saepe vero nulla
                    necessitatibus aspernatur dolorem ut, optio ea quas quae,
                    cumque sit recusandae consequuntur soluta corporis animi.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src={lion} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis veritatis molestias, quis saepe vero nulla
                    necessitatibus aspernatur dolorem ut, optio ea quas quae,
                    cumque sit recusandae consequuntur soluta corporis animi.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src={lion} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis veritatis molestias, quis saepe vero nulla
                    necessitatibus aspernatur dolorem ut, optio ea quas quae,
                    cumque sit recusandae consequuntur soluta corporis animi.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src={lion} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis veritatis molestias, quis saepe vero nulla
                    necessitatibus aspernatur dolorem ut, optio ea quas quae,
                    cumque sit recusandae consequuntur soluta corporis animi.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
