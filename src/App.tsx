import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import EMIcalulator from './components/EMIcalulator'
import CompaunedIntrest from './components/CompaunedIntrest'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="emi-calulator" element={<EMIcalulator />} />
      <Route path="compauned-intrest" element={<CompaunedIntrest />} />
    </Routes>
  )
}

export default App
