import React, { useEffect, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";

import { Swiper } from "./Swiper";

const Slid = ({ datos, categoria }) => {
  const [datosfiltrados, setDatosfiltrados] = useState([]);

  useEffect(() => {
    console.log(datos.filter((dato) => dato.categoria === categoria));
    setDatosfiltrados(datos.filter((dato) => dato.categoria === categoria));
  }, []);

  return (
    <>
      {datosfiltrados.map((data) => (
        <swiper-slide key={data.id}>
          <VideoCard dato={data} />
        </swiper-slide>
      ))}
    </>
  );
};

export default Slid;
