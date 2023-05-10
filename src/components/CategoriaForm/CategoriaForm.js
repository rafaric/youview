import { Button, Container, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const Campo = ({ label, type, value, onChange, error }) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      error={error}
      helperText={error ? "Campo obligatorio" : ""}
      margin="normal"
      fullWidth
      required
    />
  );
};

const CategoriaForm = ({
  onSubmit,
  categoriaSeleccionada,
  setCategoriaSeleccionada,
}) => {
  const [nombre, setNombre] = useState("");
  const [id, setId] = useState("");
  const [color, setColor] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [usuario, setUsuario] = useState("");
  const [nombreError, setNombreError] = useState(false);
  const [descripcionError, setDescripcionError] = useState(false);
  const [usuarioError, setUsuarioError] = useState(false);

  useEffect(() => {
    if (categoriaSeleccionada) {
      setNombre(categoriaSeleccionada.nombre);
      setColor(categoriaSeleccionada.color);
      setDescripcion(categoriaSeleccionada.descripcion);
      setUsuario(categoriaSeleccionada.usuario);
      setId(categoriaSeleccionada.id);
    } else {
      setNombre("");
      setColor("");
      setDescripcion("");
      setUsuario("");
    }
    setNombreError(false);
    setDescripcionError(false);
    setUsuarioError(false);
  }, [categoriaSeleccionada]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.length < 3) {
      setNombreError(true);
    }
    if (descripcion.length < 16) {
      setDescripcionError(true);
    }
    if (usuario.length < 4) {
      setUsuarioError(true);
    }

    if (nombre.length >= 3 && descripcion.length >= 16 && usuario.length >= 4) {
      onSubmit({ nombre, color, descripcion, usuario, id });
      setNombre("");
      setColor("");
      setDescripcion("");
      setUsuario("");
      setNombreError(false);
      setDescripcionError(false);
      setUsuarioError(false);
    }
  };

  const handleReset = () => {
    setCategoriaSeleccionada(null);
    setNombre("");
    setColor("");
    setDescripcion("");
    setUsuario("");
    setNombreError(false);
    setDescripcionError(false);
    setUsuarioError(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Campo
        label="Nombre"
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        error={nombreError}
      />
      <TextField
        label="Color"
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        margin="normal"
        fullWidth
        required
      />
      <TextField
        label="Usuario"
        type="text"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        error={usuarioError}
        margin="normal"
        fullWidth
        required
      />
      <TextField
        label="Descripción"
        multiline
        rows={4}
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        error={descripcionError}
        margin="normal"
        fullWidth
        required
      />
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        {categoriaSeleccionada ? (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "blue",
              fontWeight: "bold",
              fontSize: "15px",
            }}
            onClick={handleReset}
          >
            Cancelar
          </Button>
        ) : null}

        <Button
          variant="contained"
          sx={{ backgroundColor: "blue", fontWeight: "bold", fontSize: "15px" }}
          onClick={handleReset}
        >
          Limpiar
        </Button>

        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "blue", fontWeight: "bold", fontSize: "15px" }}
        >
          {categoriaSeleccionada ? "Actualizar" : "Guardar"}
        </Button>
      </Container>
    </form>
  );
};
export default CategoriaForm;
