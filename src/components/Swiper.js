
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination } from 'swiper';

import Home from '../components/Header';

// Swiper css
import "swiper/css";
import "swiper/css/pagination"
import "../styles/Swiper.css";

// install Swiper modules
SwiperCore.use([Pagination]);

function SwiperApp() {
  return (
    <div id="swiper-app">
      <Swiper
        pagination={{ "dynamicBullets": true }}
        className="mySwiper"
      >
        <SwiperSlide>{ Home }</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperApp;
