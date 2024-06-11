import React, { useRef, useState, useEffect } from "react";

import { register } from "swiper/element/bundle";
register();
// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper/modules";

export default function SwiperBox({ images, currentImageId }) {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      navigation="true"
      style={{
        "--swiper-pagination-color": "#fff",
      }}
      zoom={true}
      pagination={{
        clickable: true,
      }}
      modules={[Zoom, Navigation, Pagination]}
      className="mySwiper"
      initialSlide={currentImageId}
    >
      {images.map((image) => (
        <swiper-slide>
          <div className="swiper-zoom-container ">
            <img className="object-contain" src={image.image} />
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
}
