import { useEffect, useState } from "react";
import Campo from "./components/Campo/Campo";
import Layout from "./components/Layout/Layout";
import Banner from "./components/Banner/Banner";
import "./reset.css";
import Carrusel from "./components/Carousel/Carrusel/Carrusel";
import Button from "./components/Button/Button";

function App() {
  const [datos, setDatos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [vistaVideo, setVistaVideo] = useState(false);

  useEffect(() => {
    fetch("/datos/datos-iniciales.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDatos(data.data);
        setCategorias(data.categorias);
      });
  }, []);

  const handleVistaVideo = () => {
    setVistaVideo(true);
  };

  return (
    <div className="App">
      <Layout>
        {!vistaVideo && (
          <>
            <Banner clave="JPlVb3t6kx8" />
            <Carrusel datos={datos} categorias={categorias} />
            <Button texto={"Nuevo Video"} onClick={handleVistaVideo} />
          </>
        )}
        {vistaVideo && (
          <form>
            <Campo />
          </form>
        )}
      </Layout>
    </div>
  );
}

export default App;
