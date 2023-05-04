import { useContext } from "react";
import Layout from "../Layout/Layout";
import Banner from "../Banner/Banner";
import Carrusel from "../Carousel/Carrusel/Carrusel";
import Button from "../Button/Button";
import { VideoContext } from "../../Contexts/VideoContexts";
import { useMediaQuery } from "@mui/material";
import Footer from "../Footer/Footer";
import styled from "styled-components";

const Foot = styled.div`
  margin-top: 20px;
  width: 100%;
`;
function Home() {
  const { videos, categorias } = useContext(VideoContext);
  const matches = useMediaQuery("(min-width:1024px)");

  return (
    <Layout>
      <Banner clave="JPlVb3t6kx8" />
      {videos && <Carrusel datos={videos} categorias={categorias} />}
      <Foot>
        {!matches ? (
          <Button
            estilo="blue-long"
            texto={"Nuevo Video"}
            onclick="/newvideo"
          />
        ) : (
          <Footer />
        )}
      </Foot>
    </Layout>
  );
}

export default Home;
