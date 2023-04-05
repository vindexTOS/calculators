import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { NavData } from '../assets/navigation/navData'
const Home = () => {
  type ImgDivProps = {
    link: string
    title: string
    img: string
  }
  const ImgDiv: FC<ImgDivProps> = ({ link, title, img }) => {
    return (
      <Link to={link}>
        <div className="w-[400px] flex items-center flex-col hover:text-red-300">
          <Link
            className="text-[1.2rem] text-white  hover:text-red-300"
            to={link}
          >
            {title}
          </Link>
          <img
            className="w-[390px] h-[300px] border-2 hover:border-red-300 "
            src={img}
          />
        </div>
      </Link>
    )
  }
  return (
    <div className="w-[100vw] h-[100vh] bg-gray-600 flex flex-wrap items-center justify-center  ">
      <ImgDiv
        link={`life-expectancy`}
        title={`Life Expectancy calulcator`}
        img={NavData.life}
      />
      <ImgDiv
        link={`compauned-intrest`}
        title={`compound interest calculator`}
        img={NavData.compauned}
      />
      <ImgDiv
        link={`emi-calulator`}
        title={`EMI calculator`}
        img={NavData.emi}
      />
      <ImgDiv
        img={NavData.onerep}
        link={`one-rep-max`}
        title={'One Rep Max Calculator'}
      />
      <ImgDiv
        link={`bmi-calculator`}
        title={`BMI calculator`}
        img={NavData.bmi}
      />
      <ImgDiv
        link={`tip-calculator`}
        title={`Tip Calculator`}
        img={NavData.tipCal}
      />
    </div>
  )
}

export default Home
