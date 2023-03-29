import React, { useState } from 'react'

const CompaunedIntrest = () => {
  const [initialInvestment, setInitialInvestment] = useState<number>(0)
  const [monthlyContribution, setMonthleyContribution] = useState<number>(0)
  const [years, setYears] = useState<number>(0)
  const [interestRate, setIntrestRate] = useState<number>(0)
  const [result, setResult] = useState<number>(0)
  const calulateResult = () => {
    const n = 1 // assuming annual compounding
    const r = interestRate / 100 // convert interest rate to decimal
    const t = years

    const principal = initialInvestment
    const contributions = monthlyContribution * 12 * years
    const compoundInterest = principal * (1 + r / n) ** (n * t)

    const finalAmount = compoundInterest + contributions

    setResult(finalAmount)
  }
  return (
    <section className="flex flex-col  w-[100%] h-[100%] items-center justify-center ">
      <div className="bg-gray-600  text-orange-400 p-10">
        <div className="flex flex-col">
          <label> intial investment </label>
          <input
            onChange={(e) => setInitialInvestment(Number(e.target.value))}
            type="number"
          />
        </div>
        <div className="flex flex-col">
          <label>monthley contribution</label>
          <input
            onChange={(e) => setMonthleyContribution(Number(e.target.value))}
            type="number"
          />
        </div>
        <div className="flex flex-col">
          <label>length of time in years </label>
          <input
            onChange={(e) => setYears(Number(e.target.value))}
            type="number"
          />
        </div>
        <div className="flex flex-col">
          <label>estimated intrest rate</label>
          <input
            onChange={(e) => setIntrestRate(Number(e.target.value))}
            type="number"
          />
        </div>
      </div>
      <button onClick={() => calulateResult()}>Result</button>
      {result}
    </section>
  )
}

export default CompaunedIntrest
