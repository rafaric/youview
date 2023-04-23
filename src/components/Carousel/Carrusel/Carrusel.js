import React from "react";
import Slid from "../Slider/Slider";
import styled from "styled-components";

const Contenedor = styled.div`
  box-sizing: border-box;
  heigth: 400px;
  padding: 4rem 1rem;
`;

const Titulo = styled.h2`
  margin: 2rem 0 1rem 0;
  display: inline-block;
  width: fit-content;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  background-color: ${(props) => props.color};
  color: white;
`;

const Carrusel = ({ datos, categorias }) => {
  return (
    <Contenedor>
      <>
        {categorias.map((categoria) => (
          <>
            <Titulo color={categoria.color}>{categoria.nombre}</Titulo>
            <h3>Formación Front End de Alura</h3>
            <Slid datos={datos} categoria={categoria.nombre} />
          </>
        ))}
      </>
    </Contenedor>
  );
};

export default Carrusel;
