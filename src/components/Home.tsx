import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <Link to="emi-calulator">EMI calculator</Link>
      <Link to="compauned-intrest">compound interest calculator</Link>
    </div>
  )
}

export default Home
