import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import myLogo from "./images/monLogo.png";

class Header extends Component {
  render() {
    return (
      <>
        <header className="bgLightBrown textColorBrown text-center p-0">
          <Image src={myLogo} fluid style={{ width: "75px", height: "auto" }} />
        </header>
      </>
    );
  }
}
export default Header;
