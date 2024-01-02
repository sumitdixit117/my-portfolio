import React from "react";
import "./about.css";
import ME from "../assets/me-about.jpg";
import { FaAward, FaLaptopCode } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Pic" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>AWS Certified</h5>
              <small>Foundational</small>
            </article>
            <article className="about__card">
              <FaLaptopCode className="about__icon" />
              <h5>Problems</h5>
              <small>800+ Solved</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Hi there, Here is Shashwat Dixit, final year student pursuing
            Bachelor's degree in Computer Science at Vellore Institute of
            Technology
            <br />
            Vellore Campus.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
