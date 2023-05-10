import { register } from "swiper/element/bundle";
import VideoCard from "../VideoCard/VideoCard";
import { Swiper as Swip, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper";

register();

export const Swiper = ({ datos, categoria }) => {
  return (
    <Swip
      slidesPerView={1}
      allowSlideNext="true"
      allowSlidePrev="true"
      spaceBetween={5}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      modules={[Pagination]}
    >
      {datos.length > 0 &&
        datos.map((data) => {
          if (data.categoria === categoria) {
            return (
              <SwiperSlide style={{ borderRadius: "10px" }} key={data.id}>
                <VideoCard
                  dato={data.lvideo}
                  image={data.limagen}
                  categoria={categoria}
                />
              </SwiperSlide>
            );
          } else {
            return <></>;
          }
        })}
      <div className="swiper-button-prev slider-arrow"></div>
      <div className="swiper-button-next slider-arrow"></div>
    </Swip>
  );
};
