
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import date from '../services/cards';

import "swiper/css";
import "swiper/css/effect-cards"

import "../styles/SwiperProjects.css";

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
        {
          date.map((card, i) => (
            <SwiperSlide key={ i }>
              <div className="card">
                <img src={ card.image } alt={ card.alt } />
                <h3>{ card.card }</h3>
                <a href={ card.repository } target="_blank" rel="noreferrer">
                  <button
                    type="button"
                    className="button-repository"
                  >
                    Repository
                  </button>
                </a>
                <a href={ card.url } target="_blank" rel="noreferrer">
                  <button type="button" className="button-open">Open</button>
                </a>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default SwiperProjects;
