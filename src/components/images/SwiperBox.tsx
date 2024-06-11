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

  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Add event listener
    swiperRef.current.addEventListener('swiperslidechange', (e) => {
      console.log(e.detail);
    });

    // Object with parameters
    const params = {
      // or pass it in on
      on: {
        slideChange(s) {
          console.log(s);
        },
      },
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
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
        <swiper-slide key={image.id} lazy="true">
          <div className="swiper-zoom-container ">
            <img loading="lazy" className="object-contain" src={image.image} />
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
}
