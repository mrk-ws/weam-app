import React from 'react'
import Navbar from './Navbar'

interface HeaderProps {
  settings?: any;
}

const Header = ({ settings }: HeaderProps) => {
  return (
    <div>
      <Navbar settings={settings} />
    </div>
  );
}

export default Header
