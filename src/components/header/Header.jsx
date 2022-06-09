import React from 'react'
import './header.css'

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Me from "../../assets/me.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container" id='header'>
        <h5>Hello I'm</h5>
        <h2>Brian Kemboi</h2>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={Me} alt="Brian Kemboi" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header