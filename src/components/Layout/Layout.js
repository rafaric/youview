import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";

const Contenedor = styled.section``;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Contenedor>{children}</Contenedor>
    </>
  );
};

export default Layout;
