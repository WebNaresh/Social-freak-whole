import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/swiper-bundle.min.css";

import "./style.css";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import Paper from "@mui/material/Paper";

export default function Stories() {
  return (
    <>
      <div className="swiper-container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          initialSlide={0} //change dynamically
          style={{
            height: "100%",
            width: "100%",
          }}
          navigation={true} // Enable navigation buttons
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              width: "30%",
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src="https://swiperjs.com/demos/images/nature-1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              width: "30%",
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              width: "30%",
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src="https://swiperjs.com/demos/images/nature-3.jpg"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              width: "30%",
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src="https://swiperjs.com/demos/images/nature-4.jpg"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              width: "30%",
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src="https://swiperjs.com/demos/images/nature-5.jpg"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              width: "30%",
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src="https://swiperjs.com/demos/images/nature-6.jpg"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              width: "30%",
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src="https://swiperjs.com/demos/images/nature-7.jpg"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              width: "30%",
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src="https://swiperjs.com/demos/images/nature-8.jpg"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              width: "30%",
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src="https://swiperjs.com/demos/images/nature-9.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
