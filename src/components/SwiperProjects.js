
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards"

import "../styles/SwiperProjects.css";

import receita from '../icons/receitas.png';


import SwiperCore, { EffectCards } from 'swiper';

SwiperCore.use([EffectCards]);

function SwiperProjects() {
  return (
    <div id="swiper-projects">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        className="mySwiper swiper-proj"
      >
        <SwiperSlide>
          <div className="card">
            <img src={ receita } alt="receita" />
            <h3>Recipe app</h3>
            <button type="button" className="button-repository">Repository</button>
            <button type="button" className="button-open">Open</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperProjects;
