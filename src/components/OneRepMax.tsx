import React, { useState } from 'react'

const OneRepMax = () => {
  const [weightLifted, setWeightLifter] = useState<number>(0)
  const [reps, setReps] = useState<number>(0)
  type RMobj = {
    proc: string
    num?: number
  }[]
  const [RM, setRM] = useState<RMobj>([
    { proc: '%50', num: 0 },
    { proc: '%55', num: 0 },
    { proc: '%60', num: 0 },
    { proc: '%65', num: 0 },
    { proc: '%70', num: 0 },
    { proc: '%75', num: 0 },
    { proc: '%80', num: 0 },
    { proc: '%85', num: 0 },
    { proc: '%90', num: 0 },
    { proc: '%95', num: 0 },
  ])
  const [oneRepMax, setOneRepMax] = useState<number>(0)
  const OneRepCal = () => {
    const repMax = weightLifted / (1.0278 - 0.0278 * reps)
    const repMaxFixed = Number(repMax.toFixed(0))
    const fifty = repMaxFixed * 0.5
    const fiftyFive = repMaxFixed * 0.55
    const sixty = repMaxFixed * 0.6
    let arr = []
    let RMarr = []
    let starter = 0.5
    let newProc = 0
    for (let i = 0; i < RM.length; i++) {
      let newStarter = (starter += 0.05)

      let proc = repMaxFixed * newStarter
      arr.push(Number(proc.toFixed(0)))
      RMarr.push({ proc: RM[i].proc, num: arr[i] })
    }
    setRM(RMarr)
  }
  const style = {
    section: `w-[100%] h-[100vh] bg-gray-600 flex items-center justify-center gap-10`,
    mainInputDiv: `flex flex-col gap-5`,
    inputDiv: `flex items-center  gap-5`,
    input: `w-[6rem] h-[2.5rem] outline outline-2 outline-blue-300 `,
    label: `text-[2rem] text-white`,
    inputSection: `flex flex-col gap-20`,
    btnDiv: `flex gap-6`,
    btn: `text-[2rem] outline outline-[1px] text-white  hover:outline-blue-500 hover:bg-gray-500 w-[10rem] outline-blue-300`,
    resultSection: `w-[20%] border-2 py-2 flex flex-col items-center justify-center `,
    oneRepDiv: `outline outline-[1px] w-[100%]  py-3 text-[2rem] px-4 text-white flex gap-2`,
    procDiv: `flex gap-2 text-[2rem] flex-col text-white `,
  }
  return (
    <section className={style.section}>
      <section className={style.inputSection}>
        <div className={style.mainInputDiv}>
          <div className={style.inputDiv}>
            <input
              className={style.input}
              onChange={(e) => setWeightLifter(Number(e.target.value))}
              type="number"
            />
            <label className={style.label}>Weight Lifted</label>
          </div>
          <div className={style.inputDiv}>
            <input
              className={style.input}
              onChange={(e) => setReps(Number(e.target.value))}
              type="number"
            />
            <label className={style.label}>Reps Performed</label>
          </div>
        </div>
        <div className={style.btnDiv}>
          <button onClick={OneRepCal} className={style.btn}>
            Calculate
          </button>
          <button className={style.btn}>Reset</button>
        </div>
      </section>
      <section className={style.resultSection}>
        <div className={style.oneRepDiv}>
          <span>{oneRepMax}</span>
          <p>One-rep max</p>
        </div>
        <div className={style.procDiv}>
          {RM.map((val: any, index) => {
            return (
              <div key={index} className="flex gap-10">
                <span className="w-[6rem] px-2 outline-2 outline outline-blue-200 ">
                  {val.num}
                </span>
                <p>{val.proc}</p>
              </div>
            )
          })}
        </div>
      </section>
    </section>
  )
}

export default OneRepMax
