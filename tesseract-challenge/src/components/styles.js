import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const Wrapper = styled.header`
  background: #000;
  height: 40vh;
  display: flex;
  align-items: center;

  img {
    margin: 0 auto;
    width: 20%;
  }
`;

export const Search = styled(TextField)`
  width: 25vw;
`;

export const MediaLink = styled.a`
  text-decoration: none;
  color: inherit;
`

export const ContainerFooter = styled.footer`
  background: #3c3d3c;
  position: absolute;
  width: 100%;
  height: 30vh;
  margin-top: 2rem;

  p {
    color: #fff;
    text-align: center;
  }
`;