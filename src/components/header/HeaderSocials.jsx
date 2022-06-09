import React from 'react'

import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https:/linkedin.com" target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/BrianBravoski" target="_blank" rel="noreferrer" ><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials