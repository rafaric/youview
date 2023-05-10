import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { styled } from "styled-components";

const Encabezado = styled(TableHead)`
  background-color: #888;
  font-size: 1.3rem;
  text-align: center;
  text-transform: uppercase;
`;

const CategoriaTable = ({ categorias, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper} sx={{ my: 5 }}>
      <Table sx={{ minWidth: 650 }} aria-label="Categorías">
        <Encabezado>
          <TableRow sx={{ color: "#fff", textAlign: "center" }}>
            <TableCell
              width="15%"
              sx={{
                textTransform: "uppercase",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Nombre
            </TableCell>
            <TableCell
              sx={{
                textTransform: "uppercase",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Descripción
            </TableCell>
            <TableCell
              sx={{
                textTransform: "uppercase",
                color: "#fff",
                textAlign: "center",
              }}
              width="10%"
            >
              Editar
            </TableCell>
            <TableCell
              sx={{
                textTransform: "uppercase",
                color: "#fff",
                textAlign: "center",
              }}
              width="10%"
            >
              Eliminar
            </TableCell>
          </TableRow>
        </Encabezado>
        <TableBody>
          {categorias.map((categoria) => (
            <TableRow key={categoria.id}>
              <TableCell sx={{ borderRight: "1px solid #ccc" }}>
                {categoria.nombre}
              </TableCell>
              <TableCell sx={{ borderRight: "1px solid #ccc" }}>
                {categoria.descripcion}
              </TableCell>
              <TableCell
                sx={{ textAlign: "center", borderRight: "1px solid #ccc" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "blue",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                  onClick={() => onEdit(categoria)}
                >
                  Editar
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => onDelete(categoria.id)}
                >
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CategoriaTable;
