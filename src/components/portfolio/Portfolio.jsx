import React from "react";
import "./portfolio.css";


import Img1 from '../../assets/portfolio1.png'
import Img2 from '../../assets/Chuma-Gym.png'
import Img3 from '../../assets/Real-Estate.png'
import Img4 from '../../assets/Politics-Blog.png'
import Img5 from '../../assets/Jambo-supermarket.png'


const data=[
  // {
  //   id:1,
  //   image:Img1,
  //   title:'Magical Safaris',
  //   github:'https://github.com/BrianBravoski', 
  //   demo:'https://magicalsfaris.netlify.com'
  // },
  {
    id:1,
    image:Img2,
    title:'Chuma Gym',
    github:'https://github.com/BrianBravoski/gym_web', 
    demo:'https://chumagym.netlify.app'
  },
  {
    id:2,
    image:Img3,
    title:'Realtor',
    github:'https://github.com/BrianBravoski/realtor/', 
    demo:'https://houseofluxury.vercel.app/'
  },
  {
    id:3,
    image:Img4,
    title:'The Blog',
    github:'https://github.com/BrianBravoski/politics_blog', 
    demo:'https://politicsblog.vercel.app/'
  },{
    id:4,
    image:Img5,
    title:'Jambo Shop',
    github:'https://github.com/BrianBravoski/e_commerce', 
    demo:'https://jambo-store.vercel.app/'
  },
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container container">
        {
          data.map(({id, image,title,github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a
            href={github}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href={demo}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
