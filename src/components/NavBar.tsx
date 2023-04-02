import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcCalculator } from 'react-icons/fc'
const NavBar = () => {
  const style = {
    nav: `h-[90px] bg-gray-800 flex items-center justify-between px-40 z-50`,
    links: `outline outline-[1px] w-[15rem]   py-2 px-2 hover:bg-gray-600 hover:outline-gray-600`,
  }
  const [dropDown, setDropDown] = useState<boolean>(false)
  const linkObj = [
    { link: `emi-calulator`, title: `EMI calculator` },
    { link: `compauned-intrest`, title: `compound interest calculator` },
    { link: `life-expectancy`, title: `Life Expectancy calulcator` },
    { link: `one-rep-max`, title: `One Rep Max` },
    { link: `bmi-calculator`, title: `BMI calculator` },
  ]
  const LinkDivs = () => {
    return (
      <div className="text-white flex flex-col absolute right-20 top-[5.6rem] bg-gray-700 h-[300px] py-10 px-5 gap-2 items-start ">
        {linkObj.map((val: any) => (
          <Link className={style.links} to={val.link}>
            {val.title}
          </Link>
        ))}
      </div>
    )
  }
  return (
    <nav className={style.nav}>
      <Link className="text-white" to="/">
        Home
      </Link>
      <p
        onClick={() => setDropDown(!dropDown)}
        className="flex items-center justify-center gap-2 text-white hover:text-gray-200 cursor-pointer"
      >
        <FcCalculator className="text-[1.5rem]" />
        Other Calculators
      </p>
      {dropDown && <LinkDivs />}
    </nav>
  )
}

export default NavBar
