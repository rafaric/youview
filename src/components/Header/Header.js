import React from "react";
import Button from "../Button/Button";
import Logotipo from "../Logotipo/Logotipo";

const Header = ({ children }) => {
  return (
    <header>
      <Logotipo />
      {children}
      <Button texto="Nuevo video" />
    </header>
  );
};

export default Header;
