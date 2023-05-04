import React from "react";
import styled from "styled-components";

const Imagen = styled.img`
  width: ${(props) => (props.tam === "footer" ? "50%" : "60%")};
  @media (min-width: 768px) {
    height: 100px;
  }
  :hover {
    filter: brightness(0.8);
  }
`;
const Logotipo = ({ place }) => {
  return (
    <Imagen
      tam={place}
      src="/logo2.png"
      alt="logo"
      onClick={() => (window.location.pathname = "/")}
    />
  );
};

export default Logotipo;
