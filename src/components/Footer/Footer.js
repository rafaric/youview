import React from "react";
import Logotipo from "../Logotipo/Logotipo";
import styled from "styled-components";

const Pie = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #000099;
  margin-top: 2rem;
  text-align: center;
  padding: 1rem 1rem;
  @media (min-width: 768px) {
    width: 95%;
  }
`;
const Footer = () => {
  return (
    <Pie>
      <Logotipo place="footer" />
      <p>
        Creado por{" "}
        <a href="https://raelstrongoliportfolio.netlify.app">
          Rafael Ricardo Strongoli
        </a>{" "}
        para AluraLatam-Oracle
      </p>
    </Pie>
  );
};

export default Footer;
