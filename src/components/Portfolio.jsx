import React from 'react'
import "./portfolio.css"
import IMG1 from "../assets/portfolio1.jpg"
import IMG2 from "../assets/portfolio2.jpg"

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'AgriKart',
    github: 'https://github.com/sumitdixit117/AgriKart',
    demo: 'http://agrikart.epizy.com/Home.php'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Keeper App',
    github: 'https://github.com/sumitdixit117/keeper-app',
    demo: 'https://sumitdixit117.github.io/keeper-app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio