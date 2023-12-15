import React from 'react'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/shashwat-dixit117/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/sumitdixit117' target='_blank' rel="noreferrer"><BsGithub /></a>
        <a href='https://instagram.com/shashwat_dixit_?igshid=NGExMmI2YTkyZg==' target='_blank' rel="noreferrer"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials