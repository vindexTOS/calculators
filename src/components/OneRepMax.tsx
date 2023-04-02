import React, { useState } from 'react'

const OneRepMax = () => {
  const [weightLifted, setWeightLifter] = useState<number>()
  const [reps, setReps] = useState<number>()

  const style = {
    section: `w-[100%] h-[100vh] bg-gray-600 flex items-center justify-center`,
    mainInputDiv: `flex flex-col gap-5`,
    inputDiv: `flex items-center  gap-5`,
    input: `w-[6rem] h-[2.5rem] outline outline-2 outline-blue-300 `,
    label: `text-[2rem] text-white`,
    inputSection: `flex flex-col gap-20`,
    btnDiv: `flex gap-6`,
    btn: `text-[2rem] outline outline-[1px] text-white  hover:outline-blue-500 hover:bg-gray-500 w-[10rem] outline-blue-300`,
    resultSection: ``,
  }
  return (
    <section className={style.section}>
      <section className={style.inputSection}>
        <div className={style.mainInputDiv}>
          <div className={style.inputDiv}>
            <input
              className={style.input}
              onChange={(e) => setWeightLifter(Number(e.target.value))}
              value={weightLifted}
              type="number"
            />
            <label className={style.label}>Weight Lifted</label>
          </div>
          <div className={style.inputDiv}>
            <input
              className={style.input}
              onChange={(e) => setReps(Number(e.target.value))}
              value={reps}
              type="number"
            />
            <label className={style.label}>Reps Performed</label>
          </div>
        </div>
        <div className={style.btnDiv}>
          <button className={style.btn}>Calculate</button>
          <button className={style.btn}>Reset</button>
        </div>
      </section>
      <section className={style.resultSection}></section>
    </section>
  )
}

export default OneRepMax
