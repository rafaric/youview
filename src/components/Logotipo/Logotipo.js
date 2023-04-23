import React from "react";
import styled from "styled-components";

const Imagen = styled.img`
  width: 60%;
`;
const Logotipo = () => {
  return <Imagen src="/logo.png" alt="logo" />;
};

export default Logotipo;
