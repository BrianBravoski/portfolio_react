import React from "react";
import "./portfolio.css";
import Img1 from '../../assets/portfolio1.png'


const data=[
  {
    id:1,
    image:Img1,
    title:'Magical Safaris',
    github:'https://github.com/BrianBravoski', 
    demo:'https://magicalsfaris.netlify.com'
  },
  {
    id:2,
    image:Img1,
    title:'Crypto /mtaani',
    github:'https://github.com', 
    demo:'https://github.com'
  },
  {
    id:3,
    image:Img1,
    title:'Portfolio Item',
    github:'https://github.com', 
    demo:'https://github.com'
  },
  {
    id:4,
    image:Img1,
    title:'Portfolio Item',
    github:'https://github.com', 
    demo:'https://github.com'
  },
  {
    id:5,
    image:Img1,
    title:'Portfolio Item',
    github:'https://github.com', 
    demo:'https://github.com'
  },{
    id:6,
    image:Img1,
    title:'Portfolio Item',
    github:'https://github.com', 
    demo:'https://github.com'
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
