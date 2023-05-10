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
  width: 85vw;
  margin-top: 2rem;
  padding: 1rem 1rem;
`;
const Card = styled.div`
  padding-top: 2rem;
`;

const Carrusel = ({ datos, categorias }) => {
  console.log(categorias);
  return (
    <Conteiner>
      {categorias.map((categoria) => (
        <Card key={categoria.id}>
          <Titulo color={categoria.color}>{categoria.nombre}</Titulo>
          <h3>{categoria.descripcion}</h3>
          <Swiper datos={datos} categoria={categoria.nombre} />
        </Card>
      ))}
    </Conteiner>
  );
};

export default Carrusel;
