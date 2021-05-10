import React, { Component } from "react";
import Projet from "./Projet/Projet";
import Biographie from "./Biographie/Biographie";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Route404 from "./Route404/Route404";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

class Site extends Component {
  render() {
    return (
      <>
        <div className="site">
          <Header />
          <Navbar />
          <Container fluid>
            <Switch>
              <Route path="/" exact render={() => <Projet />} />
              <Route path="/biographie" render={() => <Biographie />} />
              <Route path="/contact" render={() => <Contact />} />
              <Route render={() => <Route404 />} />
            </Switch>
          </Container>
          <div className="divSite"></div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Site;
