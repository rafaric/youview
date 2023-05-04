import React, { useState } from "react";
import Campo from "../../../components/Campo/Campo";
import Layout from "../../../components/Layout/Layout";
import { FormGroup, Stack } from "@mui/material";
import Button from "../../../components/Button/Button";
import "./video.css";
import styled from "styled-components";
import { useContext } from "react";
import { VideoContext } from "../../../Contexts/VideoContexts";

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
const Video = () => {
  const [errores, setErrores] = useState({
    titulo: {
      error: false,
      mensaje: "",
    },
    limagen: {
      error: false,
      mensaje: "",
    },
    lvideo: {
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

  const [nuevoVideo, setNuevoVideo] = useState({
    titulo: "",
    limagen: "",
    lvideo: "",
    descripcion: "",
    categoria: "",
    usuario: "",
  });
  const [modal, setModal] = useState(false);

  function handleError(evento) {
    const campo = evento.target.id;
    switch (campo) {
      case "titulo":
        if (evento.target.value.length < 3) {
          setErrores({
            ...errores,
            titulo: {
              error: true,
              mensaje: "El titulo debe tener al menos 3 caracteres",
            },
          });
        } else {
          setErrores({
            ...errores,
            titulo: {
              error: false,
              mensaje: "",
            },
          });
        }
        break;
      case "lvideo":
        if (!evento.target.value.startsWith("http")) {
          setErrores({
            ...errores,
            lvideo: {
              error: true,
              mensaje: "Ingrese un link válido",
            },
          });
        } else {
          setErrores({
            ...errores,
            lvideo: {
              error: false,
              mensaje: "",
            },
          });
        }
        break;
      case "limagen":
        if (!evento.target.value.startsWith("http")) {
          setErrores({
            ...errores,
            limagen: {
              error: true,
              mensaje: "Ingrese un link válido",
            },
          });
        } else {
          setErrores({
            ...errores,
            limagen: {
              error: false,
              mensaje: "",
            },
          });
        }
        const query = new URLSearchParams(new URL(evento.target.value).search);
        const videoId = query.get("v");
        actualizarvideo(
          "https://img.youtube.com/vi/" + videoId + "/hqdefault.jpg",
          evento.target.id
        );
        break;
      case "descripcion":
        if (evento.target.value.length < 15) {
          setErrores({
            ...errores,
            descripcion: {
              error: true,
              mensaje: "La descripcion debe tener al menos 15 caracteres",
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
            usuario: {
              error: false,
              mensaje: "",
            },
          });
        }
        break;
      default:
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("enviando");
    for (let error in errores) {
      if (errores[error].error) {
        alert("Verifique los campos");
        return;
      }
    }
    console.log(nuevoVideo);
    for (let item in nuevoVideo) {
      if (nuevoVideo[item] === "") {
        alert("Verifique los campos");
        return;
      }
    }

    fetch("http://localhost:5000/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoVideo),
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

  const campos = [
    {
      id: "titulo",
      error: errores.titulo.error,
      label: "Titulo",
      placeholder: "Titulo",
      helperText: errores.titulo.mensaje,
    },
    {
      id: "lvideo",
      error: errores.lvideo.error,
      label: "Link del Video",
      placeholder: "Link del Video",
      helperText: errores.lvideo.mensaje,
    },

    {
      id: "limagen",
      error: errores.limagen.error,
      label: "Link de la imagen",
      placeholder: "Link de la imagen",
      helperText: errores.limagen.mensaje,
    },
    {
      id: "categoria",
      label: "Categoria",
      placeholder: "Categoria",
    },
    {
      id: "descripcion",
      error: errores.descripcion.error,
      label: "Descripcion",
      placeholder: "Descripcion",
      helperText: errores.descripcion.mensaje,
    },

    {
      id: "usuario",
      error: errores.descripcion.error,
      label: "usuario",
      placeholder: "usuario",
      helperText: errores.usuario.mensaje,
    },
  ];

  const actualizarvideo = (valor, id) => {
    setNuevoVideo({ ...nuevoVideo, [id]: valor });
  };

  return (
    <Layout>
      {modal && (
        <Modaldiv>
          Video cargado <button onClick={() => setModal(false)}>Cerrar</button>
        </Modaldiv>
      )}
      <form
        style={{
          width: "90%",
          justifyContent: "center",
          height: "100vh",
        }}
        onSubmit={handleSubmit}
      >
        <Stack
          style={{
            marginTop: "2rem",
            gap: "1rem",
            height: "100vh",
          }}
        >
          {campos.map((campo, index) => (
            <Campo
              id={campo.id}
              key={index}
              label={campo.label}
              error={campo.error ? true : false}
              placeholder={campo.placeholder}
              onchange={handleError}
              helpertext={campo.helperText}
              value={nuevoVideo[campo.id]}
              actualizavalor={actualizarvideo}
              categorias={categorias}
            />
          ))}

          <button className="send" type="submit">
            Enviar
          </button>
        </Stack>
      </form>
    </Layout>
  );
};

export default Video;
