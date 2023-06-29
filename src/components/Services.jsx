import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id='services'>
      <h5>Areas of Interest</h5>
      <h2>Technical Skills</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>CS Subjects</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Database Management System</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Operating System</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Object Oriented Programming</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Computer Networks</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design and Analysis of Algorithm</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Certifications</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p><a href='https://www.credly.com/badges/38eb9d7a-9043-402f-b687-df368bc2bfff' target='_blank' rel="noreferrer">AWS Certified Cloud Practitioner</a></p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p><a href='https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_p4FCQkXp24SHjt9Na_1685624194127_completion_certificate.pdf' target='_blank' rel="noreferrer">JP Morgan Chase & Co. Virtual Internship</a></p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p><a href='https://www.kaggle.com/learn/certification/sumitdixit117/intermediate-machine-learning' target='_blank' rel="noreferrer"> Kaggle Intermediate Machine Learning</a></p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p><a href='https://www.hackerrank.com/certificates/b6095ffd3998' target='_blank' rel="noreferrer">HackerRank Problem Solving (Basic)</a></p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p><a href='https://www.hackerrank.com/certificates/76b155925833' target='_blank' rel="noreferrer">HackerRank JavaScript (Basic)</a></p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p><a href='https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/5N2ygyhzMWjKQmgCK_Cognizant_p4FCQkXp24SHjt9Na_1687194228773_completion_certificate.pdf' target='_blank' rel="noreferrer">Cognizant Artificial Intelligence Virtual Experience</a></p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p><a href='https://olympus.mygreatlearning.com/courses/12628/certificate' target='_blank' rel="noreferrer">Great Learning Introduction to Cyber Security</a></p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Soft Skills</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Leadership</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Event Management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creativity</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Public Speaking</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Technical Writing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Teamwork & Cooperation</p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Services