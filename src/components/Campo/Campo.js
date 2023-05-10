import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";

const Campo = ({
  id,
  error,
  placeholder,
  label,
  onchange,
  helpertext,
  valor,
  actualizavalor,
  categorias,
  defaulty,
  type,
}) => {
  const manejarCambio = (e) => {
    actualizavalor(e.target.value, e.target.name);
  };

  return (
    <Stack direction="column" alignItems="stretch">
      {id !== "categoria" ? (
        <TextField
          id={id}
          type={type}
          name={id}
          label={label}
          variant="outlined"
          error={error}
          placeholder={placeholder}
          onBlur={onchange}
          helperText={helpertext}
          defaultValue={defaulty}
          value={valor}
          onChange={manejarCambio}
          multiline={id === "descripcion"}
          rows={id === "descripcion" ? 4 : 1}
        />
      ) : (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select
            name="categoria"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue=""
            label={label}
            onChange={manejarCambio}
          >
            {categorias.map((categoria, index) => (
              <MenuItem
                name={categoria.nombre}
                key={index}
                value={categoria.nombre}
              >
                {categoria.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Stack>
  );
};

export default Campo;
