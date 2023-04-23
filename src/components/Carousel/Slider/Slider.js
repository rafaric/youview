import React, { useEffect, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import Slider from "react-slick";

const Slid = ({ datos, categoria }) => {
  const [datosfiltrados, setDatosfiltrados] = useState([]);

  useEffect(() => {
    setDatosfiltrados(datos.filter((dato) => dato.categoria === categoria));
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {datosfiltrados.map((data) => (
          <VideoCard dato={data} />
        ))}
      </Slider>
    </>
  );
};

export default Slid;
