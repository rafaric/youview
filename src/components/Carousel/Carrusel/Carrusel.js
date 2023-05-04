import React from "react";
import styled from "styled-components";
import { Swiper } from "../Slider/Swiper";

const Titulo = styled.h2`
  margin: 2rem 0 1rem 0;
  display: inline-block;
  width: fit-content;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  background-color: ${(props) => props.color};
  color: white;
`;
const Conteiner = styled.div`
  width: 70vw;
  padding: 1rem 1rem;
`;

const Carrusel = ({ datos, categorias }) => {
  console.log(datos);
  return (
    <Conteiner>
      {categorias.map((categoria, i) => (
        <div key={i}>
          <Titulo color={categoria.color}>{categoria.nombre}</Titulo>
          <h3>{`Formación ${categoria.nombre} de Alura`}</h3>
          <Swiper datos={datos} categoria={categoria.nombre} />
        </div>
      ))}
    </Conteiner>
  );
};

export default Carrusel;
