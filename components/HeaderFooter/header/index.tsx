import React from 'react'
import Navbar from './Navbar'
import { GeneralSettings } from "@/types/settings";

interface HeaderProps {
  settings?: GeneralSettings;
}

const Header = ({ settings }: HeaderProps) => {
  return (
    <div>
      <Navbar settings={settings} />
    </div>
  );
}

export default Header
