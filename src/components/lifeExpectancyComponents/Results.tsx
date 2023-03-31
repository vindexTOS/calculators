import React, { FC } from 'react'
import { UseCalcContext } from '../context'
type ResultsProp = {
  resutlRef: React.MutableRefObject<null>
  points: number
}
const Results: FC<ResultsProp> = ({ resutlRef, points }) => {
  return (
    <div
      ref={resutlRef}
      className="w-[100%] h-[1000px] flex items-center justify-center bg-gray-900 absolute"
    >
      <h1 className="text-[3rem] text-white ">Your results is {points}</h1>
    </div>
  )
}

export default Results
