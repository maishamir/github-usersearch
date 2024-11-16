import React from 'react'
import "./Header.scss"
import moonIcon from "../../assets/icon-moon.svg"

function Header() {
  return (
    <header className='header'>
        <h1 className='header__logo'>devfinder</h1>
          <div className="header__theme">
              <p className="header__theme--label">DARK</p>
              <img src={moonIcon} alt="light theme icon" className='header__theme--icon'/>
        </div>
    </header>
  )
}

export default Header