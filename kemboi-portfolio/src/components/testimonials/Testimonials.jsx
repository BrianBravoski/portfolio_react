import React from "react";
import "./testimonials.css";
import Avt1 from "../../assets/me.png";

// Importing swiper for Slides
import { Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Avt1,
    name: "Steve Bert",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est asperiores commodi fugiat tenetur aspernatur eligendi in,reiciendis velit ex laborum.",
  },
  {
    avatar: Avt1,
    name: "Mike Bruce",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est asperiores commodi fugiat tenetur aspernatur eligendi in,reiciendis velit ex laborum.",
  },
  {
    avatar: Avt1,
    name: "Shem Tulo",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est asperiores commodi fugiat tenetur aspernatur eligendi in,reiciendis velit ex laborum.",
  },
  {
    avatar: Avt1,
    name: "Steve Bert",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est asperiores commodi fugiat tenetur aspernatur eligendi in,reiciendis velit ex laborum.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable:true}}
      >
        {
          data.map(({avatar, name, review}, index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="avatar" />          
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;
