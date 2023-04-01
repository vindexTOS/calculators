import React, { useState } from 'react'
import { humanData } from '../assets/human/asset'
const CompaunedIntrest = () => {
  const [initialInvestment, setInitialInvestment] = useState<number>(0)
  const [monthlyContribution, setMonthleyContribution] = useState<number>(0)
  const [years, setYears] = useState<number>(0)
  const [interestRate, setIntrestRate] = useState<number>(0)
  const [result, setResult] = useState<number>(0)
  const calulateResult = () => {
    const n = 1
    const r = interestRate / 100
    const t = years

    const principal = initialInvestment
    const contributions = monthlyContribution * 12 * years
    const compoundInterest = principal * (1 + r / n) ** (n * t)

    const finalAmount = compoundInterest + contributions

    setResult(finalAmount)
  }

  const style = {
    input: `py-1 px-2 rounded-[10px] `,
    inputDiv: `flex flex-col items-center gap-2  `,
  }
  return (
    <section className="flex flex-col  w-[100%] h-[100vh] bg-gray-700 items-center justify-center ">
      <div className="bg-gray-600  w-[300px]  text-orange-400 p-10">
        <div className={style.inputDiv}>
          <label> Intial Investment </label>
          <input
            className={style.input}
            onChange={(e) => setInitialInvestment(Number(e.target.value))}
            type="number"
          />
        </div>
        <div className={style.inputDiv}>
          <label>Monthley Contribution</label>
          <input
            className={style.input}
            onChange={(e) => setMonthleyContribution(Number(e.target.value))}
            type="number"
          />
        </div>
        <div className={style.inputDiv}>
          <label>Length Of Time In Years </label>
          <input
            className={style.input}
            onChange={(e) => setYears(Number(e.target.value))}
            type="number"
          />
        </div>
        <div className={style.inputDiv}>
          <label>Estimated Intrest Rate</label>
          <input
            className={style.input}
            onChange={(e) => setIntrestRate(Number(e.target.value))}
            type="number"
          />
        </div>
      </div>
      <button
        className="w-[300px] h-[3rem] text-white text-[1.1rem] font-bold bg-orange-500 hover:bg-orange-400"
        onClick={() => calulateResult()}
      >
        Result
      </button>

      {result > 0 && (
        <div className="flex gap-2 ">
          <img className="w-[40px]" src={humanData.money} />
          <p className="  text-white text-green-400 text-[1.2rem]  ">
            ${result.toFixed(0)}
          </p>
          <img className="w-[40px]" src={humanData.money} />
        </div>
      )}
    </section>
  )
}

export default CompaunedIntrest
