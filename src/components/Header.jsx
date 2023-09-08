import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../assets/me.jpg'
import HeaderSocials from './HeaderSocials'
import {AiFillDownCircle} from 'react-icons/ai'

const Header = () => {
  return (
    <header id='header'>
       <div className='container header__container'>
          <h5>Hello I'm</h5>
          <h1>Shashwat Dixit</h1>
          <h5 className='text-light'>Software Engineer</h5>
          <CTA />
          <HeaderSocials />

          <div className='me'>
            <img src={ME} alt='me'></img>
          </div>

          
          <a href='#contact' className='scroll__down'><AiFillDownCircle /></a>
       </div>
    </header>
  )
}

export default Header