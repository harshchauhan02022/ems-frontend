import React from 'react'
import Navigation from './Navigation';
const logo = 'logo.png';

const Header = () => {
  return (
    <header>
      <Navigation logo={logo} />
    </header>
  )
}

export default Header