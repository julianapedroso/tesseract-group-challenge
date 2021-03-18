import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const Title = styled.h1`
  font-size: 1.3rem;
  text-align: center;
  margin-top: 2rem;
`;

export const Search = styled(TextField)`
  width: 25vw;

  @media (min-width: 500px) and (max-width: 800px) {
    width: 40%;
  }
  @media (max-width: 499px) {
    width: 70%;
  }
`;

export const ErrorGIF = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 500px) and (max-width: 800px) {
    img {
      width: 150%;
    }
  }
  @media (max-width: 499px) {
    img {
      width: 100%;
    }
  }
`;
