import React from "react";
import Layout from "../../../components/Layout/Layout";
import Campo from "../../../components/Campo/Campo";
import { Container, FormGroup } from "@mui/material";
import styled from "styled-components";
import Button from "../../../components/Button/Button";

const Formulario = styled(FormGroup)`
  width: 100%;
  margin-top: 1rem;
  gap: 2rem;
`;

const H3 = styled.h3`
  text-align: center;
  font-size: 2rem;
  margin: 3rem 0;
`;
const Contenedor = styled(Container)`
  display: flex;

  gap: 2rem;
`;

const Categorias = () => {
  const datosCampos = [
    {
      placeholder: "Titulo",
      type: "text",
    },
    {
      placeholder: "Color",
      type: "color",
    },
    {
      placeholder: "Descripcion",
      type: "text-area",
    },
    {
      placeholder: "Usuario",
      type: "text",
    },
  ];

  return (
    <Layout>
      <H3>Nueva Categoría</H3>
      <Formulario>
        {datosCampos.map((dato, index) => (
          <Container key={index}>
            <Campo dato={dato} />
          </Container>
        ))}
        <Contenedor>
          <Button texto="Guardar" estilo="blue-short" />
          <Button texto="Limpiar" estilo="blue-short" color="grey" />
        </Contenedor>
      </Formulario>
    </Layout>
  );
};

export default Categorias;
