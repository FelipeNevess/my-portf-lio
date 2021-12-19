
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination } from 'swiper';
// Component
import Header from '../components/Header';

// Pages
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Contacts from '../pages/Contacts';
import About from '../pages/About';

// Swiper css
import "swiper/css";
import "swiper/css/pagination"
import "../styles/Swiper.css";

// install Swiper modules
SwiperCore.use([Pagination]);

function SwiperApp() {
  return (
    <div id="swiper-app">
      <Header />
      <Swiper
        pagination={{ "dynamicBullets": true }}
        className="mySwiper"
      >
        <SwiperSlide>{ Contacts }</SwiperSlide>
        <SwiperSlide>{ About }</SwiperSlide>
        <SwiperSlide>{ Home }</SwiperSlide>
        <SwiperSlide>{ Portfolio }</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperApp;
