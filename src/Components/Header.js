import React, { Component } from "react";
import {
  FormControl,
  Nav,
  Navbar,
  Container,
  Button,
  Form,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./logo192.png";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          // fixed="top"
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Seach"
                  classname="mr-sm-2"
                />
                <Button variant="outline-info">Seach</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/blog" component={Blog} />
          </Switch>
        </Router>
      </>
    );
  }
}
