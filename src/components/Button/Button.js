import styled from "styled-components";
import "./Button.css";
import React from "react";
import { Link } from "react-router-dom";

const Boton = styled.button`
  background-color: ${(props) => props.color};
  color: white;
  border-radius: 10px;
  width: ${(props) => (props.size === "long" ? "100%" : "50%")};

  a {
    text-decoration: none;
    color: white;
  }
`;
const Botongray = styled(Boton)`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  background-color: gray;
  color: black;
  :hover {
    background-color: #555;
  }
`;

const Button = ({
  texto,
  estilo,
  onclick,
  color = "blue",
  type = "",
  onsubmit,
}) => {
  switch (estilo) {
    case "gray":
      return (
        <Botongray type={type} color={color}>
          {onclick !== "" ? (
            <a href={onclick} target="__blank">
              {texto}
            </a>
          ) : (
            texto
          )}
        </Botongray>
      );
    case "blue-short":
      return (
        <Boton color={color} size="short" type={type} onSubmit={onsubmit}>
          {onclick ? <Link to={onclick}>{texto}</Link> : texto}
        </Boton>
      );
    case "blue-long":
      return (
        <Boton color="blue" size="long" type={type} onSubmit={onsubmit}>
          {onclick !== "" ? <Link to={onclick}>{texto}</Link> : texto}
        </Boton>
      );
    default:
      <Boton>{texto}</Boton>;
  }
};

export default Button;
