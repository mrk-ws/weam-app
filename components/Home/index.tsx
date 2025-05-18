import React from 'react'
import HeroSlider from './HeroSlider'
import LogoSh from './LogoSh'
import Info from './Info'
import Numbre from './Numbre'
import Volunteer from './Volunteer'
import ProgramsSection from './ProgramsSection'
import Volunteer2 from './Volunteer2'
import VerticalTicker from './News'
import ContactSection from './ContactSection'

const HomePage = () => {
  return (
    <div>
      <HeroSlider/>
      <Numbre/>
      <Info/>
      <Volunteer/>
      <ProgramsSection/>
      <Volunteer2/>
      <LogoSh/>
      <VerticalTicker/>
      <ContactSection/>
    </div>
  )
}

export default HomePage
