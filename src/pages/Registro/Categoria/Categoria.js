import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CategoriaForm from "../../../components/CategoriaForm/CategoriaForm";
import CategoriaTable from "../../../components/CategoriaTable/CategoriaTable";
import { Paper, TableContainer } from "@mui/material";
import Layout from "../../../components/Layout/Layout";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const H3 = styled.h3`
  text-align: center;
  font-size: 2rem;
  margin: 3rem 0;
`;

const Categoria = () => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const fetchCategorias = async () => {
    const response = await fetch("http://localhost:5000/categorias");
    const data = await response.json();
    setCategorias(data);
  };

  const addCategoria = async (categoria) => {
    const response = await fetch("http://localhost:5000/categorias", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoria),
    });
    await response.json();
    await fetchCategorias();
  };

  const updateCategoria = async (categoria) => {
    console.log(categoria);
    const response = await fetch(
      `http://localhost:5000/categorias/${categoria.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoria),
      }
    );
    await response.json();
    await fetchCategorias();
  };

  const deleteCategoria = async (id) => {
    const response = await fetch(`http://localhost:5000/categorias/${id}`, {
      method: "DELETE",
    });
    await response.json();
    await fetchCategorias();
  };

  useEffect(() => {
    fetchCategorias();
  }, []);

  return (
    <Layout>
      <H3>Nueva Categoría</H3>
      <FormContainer>
        <CategoriaForm
          onSubmit={categoriaSeleccionada ? updateCategoria : addCategoria}
          categoriaSeleccionada={categoriaSeleccionada}
          setCategoriaSeleccionada={setCategoriaSeleccionada}
        />
      </FormContainer>
      <TableContainer component={Paper}>
        <CategoriaTable
          categorias={categorias}
          onEdit={setCategoriaSeleccionada}
          onDelete={deleteCategoria}
        />
      </TableContainer>
    </Layout>
  );
};

export default Categoria;
