import React from "react";
import { Wrapper } from "./styled";
import Logo from "../assets/tesseract-white-logo.png";

const Header = () => {
  return (
    <header>
      <Wrapper>
        <img src={Logo} alt="Tesseract Logo" />
      </Wrapper>
    </header>
  );
};

export default Header;
