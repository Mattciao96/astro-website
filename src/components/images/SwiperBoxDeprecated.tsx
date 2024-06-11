import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper/modules";

export default function SwiperBox({ images, currentImageId }) {
  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
        initialSlide={currentImageId}
      >
        {images.map((image) => (
          <SwiperSlide >
            <div className="swiper-zoom-container ">
              <img  className="object-contain" src={image.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
