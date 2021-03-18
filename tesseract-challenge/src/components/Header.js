import React from "react";
import { Wrapper } from "./styles";
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
