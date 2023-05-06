import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import { Container } from "@mui/material";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

const SectionContenedor = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  marging: 0;
  width: 100vw;
`;

const Layout = ({ children }) => {
  const direccion = useLocation();
  return (
    <>
      <Header />
      <SectionContenedor>{children}</SectionContenedor>
      {direccion.pathname === "/" || <Footer />}
    </>
  );
};

export default Layout;
