import React, { useState } from 'react'

const BMI = () => {
  const style = {
    section: ` w-[100%] h-[100vh] bg-gray-500 flex  items-center justify-center `,
    maininputDiv: ` flex   flex-col gap-2 `,
    inputDiv: `flex items-center  gap-2`,
    input: `w-[7rem] h-[2.2rem] `,
    label: `text-white text-[1.2rem] font-bold  w-[10rem]`,
  }

  const [height, setHeight] = useState<number>(0)
  const [Weight, setWeight] = useState<number>(0)
  const [feet, setFeet] = useState<number>(0)
  const [inch, setInch] = useState<number>(0)
  const [imperialToMetric, setImperialToMetric] = useState<boolean>(false)
  const [BMI, setBMI] = useState<number>(0)

  const BMICalc = () => {
    let weight = Weight * 2.2
    let inchs = height / 2.54
    let ftToInch = feet * 12 + inch
    if (!imperialToMetric) {
      let bmi = (weight / (inchs * inchs)) * 703
      setBMI(bmi)
    } else if (imperialToMetric) {
      let bmi = (Weight / (ftToInch * ftToInch)) * 703
      setBMI(bmi)
    }
    console.log(ftToInch)
  }

  return (
    <section className={style.section}>
      <div className="flex flex-col gap-2 p-5 w-[30rem] outline outlie-2 ">
        <div className="flex flex-col gap-2 justify-center">
          <p className="text-white text-[1.2rem] ">
            {' '}
            {imperialToMetric ? 'Imperial' : 'Metric'}
          </p>
          <span
            className={`outline outline-2 outline-blue-300 w-[4rem] h-[2rem] rounded-[30px] flex cursor-pointer ${
              imperialToMetric && 'justify-end items-end'
            }}`}
            onClick={() => setImperialToMetric(!imperialToMetric)}
          >
            <div
              className={` w-[50%] bg-orange-400 h-[2rem] rounded-[50%]  
         `}
            ></div>
          </span>
        </div>
        <div className={style.maininputDiv}>
          <div className={style.inputDiv}>
            {imperialToMetric ? (
              <div>
                <div className="flex gap-2">
                  <input
                    onChange={(e) => setFeet(Number(e.target.value))}
                    className={style.input}
                    type="number"
                    placeholder=" in Feet"
                  />
                  <input
                    onChange={(e) => setInch(Number(e.target.value))}
                    className={style.input}
                    type="number"
                    placeholder=" in Inch(es)"
                  />
                </div>
              </div>
            ) : (
              <input
                onChange={(e) => setHeight(Number(e.target.value))}
                className={style.input}
                type="number"
                placeholder=" in CM"
              />
            )}
            <label className={style.label}> Height</label>
          </div>
          <div className={style.inputDiv}>
            {imperialToMetric ? (
              <input
                onChange={(e) => setWeight(Number(e.target.value))}
                className={style.input}
                placeholder=" in Pounds"
                type="number"
              />
            ) : (
              <input
                onChange={(e) => setWeight(Number(e.target.value))}
                className={style.input}
                placeholder=" in KG"
                type="number"
              />
            )}
            <label className={style.label}>Weight</label>
          </div>
        </div>
        <button
          className="flex  text-white  bg-blue-400 w-[7rem] h-[2.2rem] items-center justify-center cursor-pointer hover:bg-blue-500"
          onClick={() => BMICalc()}
        >
          CALCULATE
        </button>
        <div>
          <div
            className={`${
              BMI > 35
                ? 'bg-red-600'
                : BMI > 30
                ? 'bg-orange-800'
                : BMI > 25
                ? 'bg-yellow-400'
                : BMI > 18
                ? 'bg-green-400'
                : BMI < 18
                ? 'bg-blue-300'
                : 'bg-grey-300'
            } text-white p-10 text-[1.5rem] flex gap-5`}
          >
            <span className="w-[15rem]">
              {BMI > 35
                ? 'EXTREMELY OBESE'
                : BMI > 30
                ? 'OBESE'
                : BMI > 25
                ? 'OVERWEIGHT'
                : BMI > 18
                ? 'NORMAL'
                : BMI < 18
                ? 'UNDERWEIGHT'
                : 'NO DATA'}
            </span>
            <p>
              BMI{' '}
              <span className="text-purple-400 font-bold">
                {BMI.toFixed(0)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BMI
