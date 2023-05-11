import styled from "styled-components";
import Button from "../Button/Button";
import { useContext } from "react";
import { VideoContext } from "../../Contexts/VideoContexts";

const Main = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  heigth: 50vh;
  opacity: 0.8;
  margin-top: 0.5rem;
`;
const Content = styled.div`
  width: 90%;
  position: relative;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    width: 100vw;
    height: 30%;
  }
`;
const Parrafo = styled.p`
  position: absolute;
  width: 90%;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-align: center;
  font-size: 3rem;
  text-shadow: 2px 4px 3px black;
  background-color: rgba(0, 0, 0, 0.9);
`;

const Imagen = styled.img`
  border-radius: 0 0 10px 10px;
  width: 90%;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const Banner = ({ clave }) => {
  const { videos } = useContext(VideoContext);
  const min = 1;
  const max = videos.length;
  const rand = min + Math.random() * (max - min);

  return (
    <Main>
      <Content>
        {videos.length > 0 ? (
          <>
            <Imagen
              width="100%"
              height="500vh"
              sty
              src={videos[Math.floor(rand)].limagen}
              alt={`imagen de ${clave}`}
            />
            <Parrafo>{videos[Math.floor(rand)].titulo}</Parrafo>
            <Button
              estilo="gray"
              texto={"Ver video"}
              onclick={videos[Math.floor(rand)].lvideo}
            />
          </>
        ) : (
          <>
            {/* <Imagen
              width="100%"
              src={videos[2].limagen}
              alt={`imagen de ${clave}`}
            />
            <Parrafo>{videos[2].titulo}</Parrafo>
            <Button
              estilo="gray"
              texto={"Ver video"}
              onclick={videos[2].lvideo}
            /> */}
          </>
        )}
      </Content>
    </Main>
  );
};

export default Banner;
