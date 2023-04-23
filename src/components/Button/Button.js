import styled from "styled-components";
import "./Button.css";
import React from "react";

const BotonBlue = styled.button`
  width: 100%;
`;
const BotonGray = styled.button`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ccc;
  color: black;
  border-radius: 10px;
`;

const Button = ({ texto, estilo, onClick }) => {
  if (estilo === "gray") {
    return <BotonGray>{texto}</BotonGray>;
  } else {
    return <BotonBlue onClick={onClick}>{texto}</BotonBlue>;
  }
};

export default Button;
