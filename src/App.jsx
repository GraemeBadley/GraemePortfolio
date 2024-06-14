import React from 'react'
import Footer from './components/footer'
import Intro from './components/Intro'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import './App.css'

function App() {
  return (
    <>
      <Intro></Intro>
      <Portfolio></Portfolio>
      <Timeline></Timeline>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
