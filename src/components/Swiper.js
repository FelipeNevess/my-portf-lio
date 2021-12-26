
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination } from 'swiper';
import Header from '../components/Header';

import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Contacts from '../pages/Contacts';
import About from '../pages/About';

import "swiper/css";
import "swiper/css/pagination"
import "../styles/Swiper.css";

SwiperCore.use([Pagination]);

function SwiperApp() {
  return (
    <div id="swiper-app">
      <Header />
      <Swiper
        pagination={{ "dynamicBullets": true }}
        className="mySwiper main-swiper"
      >
        <SwiperSlide>{ Home }</SwiperSlide>
        <SwiperSlide>{ Portfolio }</SwiperSlide>
        <SwiperSlide>{ About }</SwiperSlide>
        <SwiperSlide>{ Contacts }</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperApp;
