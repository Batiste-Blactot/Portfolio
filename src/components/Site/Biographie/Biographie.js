import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import photoProfil from "./images/photoProfil.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class Biographie extends Component {
  render() {
    return (
      <Container>
        <Row className="my-5 text-center">
          <Col xs={12} className="mb-3" sm={6}>
            <Image
              src={photoProfil}
              fluid
              style={{ width: "348px", height: "auto" }}
            />
          </Col>
          <Col xs={12} sm={6}>
            <h2 className="titleBio">
              Je suis un Développeur Web Junior basé sur Rouen
            </h2>
            <p className="paragraphBio">
              Je m'appelle Batiste, j'ai 23 ans et je vis à Rouen depuis
              quelques années.
              <br />
              J'adore créer et programmer. Je crois d'ailleurs que nous sommes
              tous nés pour créer d'une manière ou d'une autre.
              <br />
              Ce qui m'a attiré dans la programmation c'est la création de site
              web et d'application web.
              <br />
              J'adore le hasard et mettre un crayon à papier sur une feuille et
              voir ce qui en ressort, on ne sait jamais à quoi s'attendre et
              c'est ça qui est excitant.
              <br />
              J'espère continuer à grandir et à apprendre davantage sur ce
              magnifique métier qu'est Développeur Web.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Biographie;
