import React from "react";
import "./portfolio.css";
import IMG1 from "../assets/portfolio1.jpg";
import IMG2 from "../assets/portfolio2.jpg";
import IMG3 from "../assets/portfolio3.jpg";
import IMG4 from "../assets/portfolio4.jpg";
import IMG5 from "../assets/portfolio5.jpg";
import IMG6 from "../assets/portfolio6.jpg";
import IMG7 from "../assets/portfolio7.jpg";
import IMG8 from "../assets/portfolio8.jpg";
import IMG9 from "../assets/portfolio9.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Heychat App",
    github: "https://github.com/sumitdixit117/heychat-app",
    demo: "https://heychat-app.onrender.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "AgriKart",
    github: "https://github.com/sumitdixit117/AgriKart",
    demo: "http://agrikart.great-site.net/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Whatsapp Chat Analyser",
    github: "https://github.com/sumitdixit117/chat-analyzer",
    demo: "https://chat-analyzer-shashwat.onrender.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Lyrics Finder",
    github: "https://github.com/sumitdixit117/lyrics_finder",
    demo: "#",
  },
  {
    id: 5,
    image: IMG5,
    title: "Keeper App",
    github: "https://github.com/sumitdixit117/keeper-app",
    demo: "https://sumitdixit117.github.io/keeper-app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "To Do List",
    github: "https://github.com/sumitdixit117/todo_list_app",
    demo: "https://sumitdixit117.github.io/todo_list_app/",
  },
  {
    id: 7,
    image: IMG7,
    title: "Weather App",
    github: "https://github.com/sumitdixit117/weather_app",
    demo: "https://sumitdixit117.github.io/weather_app/",
  },
  {
    id: 8,
    image: IMG8,
    title: "Daily Journal",
    github: "https://github.com/sumitdixit117/Daily-Journal",
    demo: "https://daily-journal-shashwat.onrender.com",
  },
  {
    id: 9,
    image: IMG9,
    title: "Typing Master",
    github: "https://github.com/sumitdixit117/Typing-Master",
    demo: "https://sumitdixit117.github.io/Typing-Master/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
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
                  Github
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
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
