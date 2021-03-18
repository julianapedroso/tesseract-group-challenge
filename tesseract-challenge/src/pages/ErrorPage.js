import React from "react";
import GIF from "../assets/error-page.gif";
import { ErrorGIF } from "./styles";

const ErrorPage = () => {
  return (
    <ErrorGIF>
      <img src={GIF} />
    </ErrorGIF>
  );
};

export default ErrorPage;
