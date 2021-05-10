import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Contact extends Component {
  render() {
    return (
      <>
        <div className="contactComponent">
          <Button variant="secondary" className="buttonMail">
            <a className="myMail" href="mailto:batiste.blactot1@gmail.com">
              Me contacter sur batiste.blactot1@mail.com
            </a>
          </Button>{" "}
        </div>
      </>
    );
  }
}

export default Contact;
