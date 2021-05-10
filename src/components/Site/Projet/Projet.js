import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import tesla from "./images/tesla.png";
import tinder from "./images/tinder.png";
import portfolio from "./images/portfolio.png";
import immobilier from "./images/immobilier.png";
import terreDeGeek from "./images/terreDeGeek.png";
import projetEnCours from "./images/projetEnCours.png";
class Projet extends Component {
  render() {
    return (
      <>
        <div className="projet text-center ">
          {/* Mon premier Projet */}
          <div className="projets ">
            <a href="https://batisteblactot20031998.github.io/Portfolio/projects/tesla_project.html">
              <div className="picture">
                <Image
                  src={tesla}
                  style={{ width: "400px", height: "250px" }}
                />
              </div>
            </a>{" "}
            <h3 className="description-project">Projet Tesla</h3>
            <p className="description-project">09 / 05 / 21</p>
          </div>

          {/* Mon deuxième Projet */}
          <div className="projets">
            <a href="https://batisteblactot20031998.github.io/Portfolio/projects/tinder_projet.html">
              <div className="picture">
                <Image
                  src={tinder}
                  style={{ width: "400px", height: "250px" }}
                />
              </div>
            </a>{" "}
            <h3 className="description-project">Projet Tinder</h3>
            <p className="description-project">09 / 05 / 21</p>
          </div>
          {/* Mon troisième Projet */}
          <div className="projets">
            <a href="https://batisteblactot20031998.github.io/Portfolio/">
              <div className="picture">
                <Image
                  src={portfolio}
                  style={{ width: "400px", height: "250px" }}
                />
              </div>
            </a>{" "}
            <h3 className="description-project">Projet Portfolio personnel</h3>
            <p className="description-project">09 / 05 / 21</p>
          </div>
          {/* Mon quatrième Projet */}
          <div className="projets">
            <a href="https://charlene76140.github.io/norImmo/">
              <div className="picture">
                <Image
                  src={immobilier}
                  style={{ width: "400px", height: "250px" }}
                />
              </div>
            </a>{" "}
            <h3 className="description-project">Projet Nor Immo</h3>
            <p className="description-project">09 / 05 / 21</p>
          </div>
          {/* Mon cinquième Projet */}
          <div className="projets">
            <a href="https://batisteblactot20031998.github.io/TerreDeGeek_bis/">
              <div className="picture">
                <Image
                  src={terreDeGeek}
                  style={{ width: "400px", height: "250px" }}
                />
              </div>
            </a>{" "}
            <h3 className="description-project">Projet Terre de Geek</h3>
            <p className="description-project">09 / 05 / 21</p>
          </div>
          {/* Mon sixième Projet */}
          <div className="projets">
            <a href="#">
              <div className="picture">
                <Image
                  src={projetEnCours}
                  style={{ width: "400px", height: "250px" }}
                />
              </div>
            </a>{" "}
            <h3 className="description-project">Projet Tesla</h3>
            <p className="description-project">A suivre ^^</p>
          </div>
        </div>
      </>
    );
  }
}

export default Projet;
