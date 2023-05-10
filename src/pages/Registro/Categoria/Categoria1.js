import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import Campo from "../../../components/Campo/Campo";
import "./Categoria.css";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import { VideoContext } from "../../../Contexts/VideoContexts";

const Formulario = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 1rem;
  gap: 2rem;
`;
const Encabezado = styled(TableHead)`
  background-color: #888;
  font-size: 1.3rem;
  text-align: center;
  text-transform: uppercase;
`;
const Celda = styled(TableCell)`
  padding: 0.5rem;
  border: 0.5px solid #008;
`;
const CeldaH = styled(Celda)`
  text-transform: uppercase;
  color: #fff;
  text-align: center;
`;

const Modaldiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 5rem;
  z-index: 100;
  font-size: 3rem;
  color: white;
  justify-content: center;
  align-items: center;
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
  const [errores, setErrores] = useState({
    nombre: {
      error: false,
      mensaje: "",
    },
    descripcion: {
      error: false,
      mensaje: "",
    },
    usuario: {
      error: false,
      mensaje: "",
    },
  });
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState({});
  const { categorias } = useContext(VideoContext);

  const [nuevaCategoria, setNuevaCategoria] = useState({
    nombre: "",
    color: "#000",
    descripcion: "",
    usuario: "",
  });
  useEffect(() => {
    if (categoriaSeleccionada) {
      setNuevaCategoria(categoriaSeleccionada);
    } else {
      setNuevaCategoria({
        nombre: "",
        descripcion: "",
        color: "",
        usuario: "",
      });
    }
  }, [categoriaSeleccionada]);

  const [modal, setModal] = useState(false);

  function handleError(evento) {
    const campo = evento.target.id;
    switch (campo) {
      case "nombre":
        if (evento.target.value.length < 3) {
          setErrores({
            ...errores,
            nombre: {
              error: true,
              mensaje: "El nombre debe tener al menos 3 caracteres",
            },
          });
        } else {
          setErrores({
            ...errores,
            nombre: {
              error: false,
              mensaje: "",
            },
          });
        }
        break;
      case "descripcion":
        if (evento.target.value.length < 3) {
          setErrores({
            ...errores,
            descripcion: {
              error: true,
              mensaje: "La descripcion debe tener al menos 3 caracteres",
            },
          });
        } else {
          setErrores({
            ...errores,
            descripcion: {
              error: false,
              mensaje: "",
            },
          });
        }
        break;
      case "usuario":
        if (evento.target.value.length < 3) {
          setErrores({
            ...errores,
            usuario: {
              error: true,
              mensaje: "El usuario debe tener al menos 3 caracteres",
            },
          });
        } else {
          setErrores({
            ...errores,
            usuario: false,
            mensaje: "",
          });
        }
        break;
      default:
    }
  }

  const datosCampos = [
    {
      id: "nombre",
      error: errores.nombre.error,
      helpertext: errores.nombre.mensaje,
      label: "nombre",
      placeholder: "nombre",
      type: "text",
    },
    {
      id: "color",
      label: "Color",
      placeholder: "Color",
      type: "color",
    },
    {
      id: "descripcion",
      error: errores.descripcion.error,
      helpertext: errores.descripcion.mensaje,
      label: "Descripcion",
      placeholder: "Descripcion",
      type: "text-area",
    },
    {
      id: "usuario",
      error: errores.usuario.error,
      helpertext: errores.usuario.mensaje,
      label: "Usuario",
      placeholder: "Usuario",
      type: "text",
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("enviando");
    for (let error in errores) {
      if (errores[error].error) {
        alert("Verifique los campos");
        return;
      }
    }
    console.log(nuevaCategoria);
    for (let item in nuevaCategoria) {
      if (nuevaCategoria[item] === "") {
        alert("Verifique los campos");
        return;
      }
    }
    const endPoint = categoriaSeleccionada
      ? `categorias/${categoriaSeleccionada.id}`
      : "categorias";
    const method = categoriaSeleccionada ? "PUT" : "POST";

    try {
      const response = await fetch(`http://localhost:5000/${endPoint}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaCategoria),
      });

      if (response.ok) {
        const data = await response.json();
        setNuevaCategoria(data);
        setCategoriaSeleccionada(null);
        setModal(true);
      }
    } catch (error) {
      console.log(error);
    }

    /* await fetch("http://localhost:5000/categorias", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevaCategoria),
    }).then((response) => {
      console.log(response);
      setModal(true);
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
      Array.from(document.querySelectorAll("textarea")).forEach(
        (input) => (input.value = "")
      );
    }); */
  }
  const handleEdit = (categoria) => {
    setCategoriaSeleccionada(categoria);
    console.log(categoria);

    document.querySelector("#nombre").value = categoria.nombre;
    document.getElementById("color").value = categoria.color;
    document.querySelector("#descripcion").value = categoria.descripcion;
    document.querySelector("#usuario").value = categoria.usuario;
  };

  const actualizarCategoria = (valor, id) => {
    setNuevaCategoria({ ...nuevaCategoria, [id]: valor });
  };
  return (
    <Layout>
      {modal && (
        <Modaldiv>
          categoria cargada
          <button onClick={() => setModal(false)}>Cerrar</button>
        </Modaldiv>
      )}
      <H3>Nueva Categoría</H3>
      <Formulario onSubmit={handleSubmit}>
        {datosCampos.map((dato, index) => (
          <Campo
            id={dato.id}
            key={index}
            label={dato.label}
            placeholder={dato.placeholder}
            type={dato.type}
            error={dato.error ? true : false}
            onchange={handleError}
            helpertext={dato.helpertext}
            value={
              categoriaSeleccionada
                ? categoriaSeleccionada[dato.id]
                : nuevaCategoria[dato.id]
            }
            actualizavalor={actualizarCategoria}
            defaulty={dato.value}
          />
        ))}
        <Contenedor>
          <Button
            onsubmit={handleSubmit}
            type="submit"
            texto="Guardar"
            estilo="blue-short"
          />
          <Button
            texto="Limpiar"
            estilo="blue-short"
            color="gray"
            onclick={() =>
              setNuevaCategoria({
                nombre: "",
                color: "#000",
                descripcion: "",
                usuario: "",
              })
            }
          />
        </Contenedor>
      </Formulario>
      <TableContainer component={Paper} sx={{ marginTop: "2rem" }}>
        <Table>
          <Encabezado>
            <TableRow sx={{ color: "#fff", textAlign: "center" }}>
              <CeldaH width="15%">Nombre</CeldaH>
              <CeldaH>Descripción</CeldaH>
              <CeldaH width="10%">Editar</CeldaH>
              <CeldaH width="10%">Eliminar</CeldaH>
            </TableRow>
          </Encabezado>
          <TableBody>
            {categorias.map((categoria) => (
              <TableRow key={categoria.id}>
                <Celda>{categoria.nombre}</Celda>
                <Celda>{categoria.descripcion}</Celda>
                <Celda
                  sx={{ cursor: "pointer", textAlign: "center" }}
                  onClick={(e) => handleEdit(categoria)}
                  className="editar"
                >
                  Editar
                </Celda>
                <Celda
                  sx={{ cursor: "pointer", textAlign: "center" }}
                  onClick={(e) =>
                    fetch(`http://localhost:5000/categorias/${categoria.id}`, {
                      method: "DELETE",
                      headers: { "Content-Type": "application/json" },
                    }).then((response) => console.log(response))
                  }
                  className="eliminar"
                >
                  Eliminar
                </Celda>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default Categorias;
