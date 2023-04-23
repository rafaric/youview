import styled from "styled-components";
import Button from "../Button/Button";

const Main = styled.section`
  width: 100vw;
  heigth: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  position: relative;
`;
const Parrafo = styled.p`
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.5rem;
`;

const Imagen = styled.img`
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const Banner = ({ clave }) => {
  return (
    <Main>
      <Content>
        <Imagen
          width="100%"
          src={`https://img.youtube.com/vi/${clave}/hqdefault.jpg`}
          alt={`imagen de ${clave}`}
        />
        <Parrafo>Titulo del Video</Parrafo>
        <Button estilo="gray" texto="Ver video" />
      </Content>
    </Main>
  );
};

export default Banner;
