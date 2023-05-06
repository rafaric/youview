import React from "react";
import Button from "../Button/Button";
import Logotipo from "../Logotipo/Logotipo";
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";

const Head = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #000088;

  @media (min-width: 1024px) {
    justify-content: ${(props) =>
      props.loc.pathname === "/" && "space-between"};
    height: 100px;
    gap: 180px;
  }
`;

const Header = ({ children }) => {
  const matches = useMediaQuery("(min-width:1024px)");
  const direccion = useLocation();
  return (
    <Head loc={direccion}>
      <Logotipo />
      {direccion.pathname === "/" && matches && (
        <Button texto={"Nuevo Video"} estilo="blue-short" onclick="/newvideo" />
      )}
    </Head>
  );
};

export default Header;
