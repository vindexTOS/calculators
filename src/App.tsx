import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import EMIcalulator from './components/EMIcalulator'
import CompaunedIntrest from './components/CompaunedIntrest'
import LifeExpectancy from './components/LifeExpectancy'
import NavBar from './components/NavBar'
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="emi-calulator" element={<EMIcalulator />} />
        <Route path="compauned-intrest" element={<CompaunedIntrest />} />
        <Route path="life-expectancy" element={<LifeExpectancy />} />
      </Routes>
    </>
  )
}

export default App
