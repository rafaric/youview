import React, { useContext, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import Campo from "../../../components/Campo/Campo";
import { Container, FormGroup } from "@mui/material";
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

  const { categorias } = useContext(VideoContext);

  const [nuevaCategoria, setNuevaCategoria] = useState({
    nombre: "",
    color: "#000",
    descripcion: "",
    usuario: "",
  });

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

  function handleSubmit(e) {
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

    fetch("http://localhost:5000/categorias", {
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
    });
  }

  const actualizarCategoria = (valor, id) => {
    setNuevaCategoria({ ...nuevaCategoria, [id]: valor });
  };
  return (
    <Layout>
      {modal && (
        <Modaldiv>
          Video cargado <button onClick={() => setModal(false)}>Cerrar</button>
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
            value={nuevaCategoria[dato.id]}
            actualizavalor={actualizarCategoria}
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
    </Layout>
  );
};

export default Categorias;
