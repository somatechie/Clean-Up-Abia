import { useState } from 'react'
import './App.css'
import FirstAbout from '../ABOUT/FirstAbout'
import Problem from '../ABOUT/Problem'
import OurMission from '../ABOUT/OurMission'
import RoadMap from '../ABOUT/RoadMap'
import Values from '../ABOUT/Values'
import Action from '../ABOUT/Action'

function App() {
  
  return (
    <>
      <FirstAbout/>
      <Problem/>
      <OurMission/>
      <Values/>
      <RoadMap/>
      <Action/>
    </>
  )
}

export default App
