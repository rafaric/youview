import styled from "styled-components";
import Button from "../Button/Button";
import { useContext } from "react";
import { VideoContext } from "../../Contexts/VideoContexts";

const Main = styled.section`
  width: 100%;
  heigth: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  width: 100vw;
  position: relative;
  @media (min-width: 768px) {
    width: 100vw;
    height: 30%;
  }
`;
const Parrafo = styled.p`
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 3.5rem;
  text-shadow: 2px 4px 3px black;
`;

const Imagen = styled.img`
  border-radius: 0 0 10px 10px;
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
  console.log(videos);
  return (
    <Main>
      <Content>
        {videos.length > 0 ? (
          <>
            <Imagen
              width="100%"
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
