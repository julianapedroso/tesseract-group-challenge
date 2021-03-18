import styled from "styled-components";

export const Wrapper = styled.header`
  background: #000;
  height: 40vh;
  display: flex;
  align-items: center;

  img {
    margin: 0 auto;
    width: 20%;

    @media (min-width: 500px) and (max-width: 800px) {
      width: 40%;
    }
    @media (max-width: 499px) {
      width: 60%;
    }
  }
`;

export const MediaLink = styled.a`
  text-decoration: none;
  color: #000;
`;

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
