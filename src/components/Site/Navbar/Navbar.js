import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

class navBar extends Component {
  render() {
    return (
      <>
        <Navbar className="bgLightBrown" variant="light" expand="lg">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <LinkContainer exact to="/">
                <Nav.Link className="px-5" href="/">
                  Projet
                </Nav.Link>
              </LinkContainer>
              <LinkContainer exact to="/biographie">
                <Nav.Link className="px-5" href="/biographie">
                  Biographie
                </Nav.Link>
              </LinkContainer>
              <LinkContainer exact to="/contact">
                <Nav.Link className="px-5" href="/contact">
                  Contact
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
export default navBar;
