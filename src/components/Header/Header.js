import React from "react";
import Button from "../Button/Button";
import Logotipo from "../Logotipo/Logotipo";
import styled from "styled-components";

const Head = styled.header`
  width: 100vw;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = ({ children }) => {
  return (
    <Head>
      <Logotipo />
    </Head>
  );
};

export default Header;
