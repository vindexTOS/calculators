import React, { FC } from 'react'
import { UseCalcContext } from '../context'
import { AiOutlineReload } from 'react-icons/ai'
type ResultsProp = {
  resutlRef: React.MutableRefObject<null>
  points: string
}
const Results: FC<ResultsProp> = ({ resutlRef, points }) => {
  const reload = () => {
    window.location.reload()
  }
  return (
    <div
      ref={resutlRef}
      className="w-[100%] h-[1000px] flex flex-col items-center justify-center bg-gray-900 absolute"
    >
      <h1 className="text-[3rem] text-white text-center max_md:text-[1rem] max_md:w-[50%] ">
        Your results is {points}
      </h1>
      <div
        className="flex  items-end justify-center gap-5"
        onClick={() => reload()}
      >
        <h1 className="text-[3rem] text-white cursor-pointer max_md:text-[1rem]">
          ReTry
        </h1>{' '}
        <AiOutlineReload className="text-[3rem] max_md:text-[1rem] text-white cursor-pointer hover:text-gray-500" />
      </div>
    </div>
  )
}

export default Results
