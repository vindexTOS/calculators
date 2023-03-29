import React, { useState, useEffect } from 'react'

const EMIcalulator = () => {
  const style = {
    section: `w-[100%] h-[100%] flex flex-col items-center justify-center `,
    inputDiv: `w-[50%] text-orange-400 flex flex-col gap-10 `,
    singleInput: `flex flex-col `,
    numInput: ` border-b-[1px] border-orange-300`,
  }
  const [asset, setAsset] = useState<number>(0)
  const [intrestRate, setIntrestRate] = useState<number>(10)
  const [fee, setFee] = useState<number>(1)
  const [downPay, setDownPay] = useState<number>(0)
  const [totalDownPay, setTotalDownPay] = useState<number>(0)
  const [totalLoan, setTotalLoan] = useState<number>(0)
  const [montleyPay, setMonthleyPay] = useState<number>(0)
  const [months, setMonths] = useState<number>(12)

  const [monthBool, setMonthBool] = useState<boolean[]>(
    new Array(5).fill(false),
  )
  const Month = (index: number, val: number) => {
    let newMonthBool = new Array(5).fill(false)

    newMonthBool[index] = !newMonthBool[index]

    setMonthBool(newMonthBool)

    setMonths(val)
  }
  const EMICalc = (e: number) => {
    setDownPay(e)
    const emi = asset * Number(`0.${downPay}`)
    const afterDownPay = asset - emi
    const feeWithEmi = afterDownPay * Number(`0.0${fee}`)
    const totalLoan = afterDownPay + feeWithEmi

    const intrest = intrestRate / 100
    const years = months / 12
    setTotalLoan(totalLoan + totalLoan * Number(intrest) * years)
    setTotalDownPay(emi)
    const PRN =
      (totalLoan * intrest * (1 + intrest) ** years) /
      ((1 + intrest) ** years - 1)

    setMonthleyPay(PRN)
  }

  const perMonth = (e: number) => {
    setMonthleyPay(e)
  }

  return (
    <section className={style.section}>
      <h1 className="font-bold text-[2rem]">EMI Calculator </h1>
      <div className={style.inputDiv}>
        <div className={style.singleInput}>
          <label>Total Cost Of Asset</label>
          <input
            onChange={(e) => setAsset(Number(e.target.value))}
            className={style.numInput}
            type="number"
            placeholder="0"
            value={asset}
          />
        </div>
        <div className={style.singleInput}>
          <label>Intrest Rate (in %)</label>
          <input
            value={intrestRate}
            onChange={(e) => setIntrestRate(Number(e.target.value))}
            className={style.numInput}
            type="number"
            placeholder="10"
          />
        </div>
        <div className={style.singleInput}>
          <label>Processing Fee (In %)</label>
          <input
            onChange={(e) => setFee(Number(e.target.value))}
            className={style.numInput}
            type="number"
            placeholder="1"
            value={fee}
          />
        </div>
        <h1 className="font-bold">Down Payment</h1>
        <p className="underline">
          Total Down Payment - ${totalDownPay.toFixed(0)}
        </p>
        <div>
          <input
            onChange={(e) => EMICalc(Number(e.target.value))}
            className="w-[100%] bg-orange-400"
            min={0}
            max={asset - 200}
            type="range"
          />

          <div className="flex justify-between">
            <p>0%</p> <p>${Math.trunc(downPay)}</p>
            <p>80%</p>
          </div>
        </div>
        <h1 className="font-bold">Loan per Month</h1>
        <p className="underline">Total Loan Amount - ${totalLoan.toFixed(0)}</p>
        <div>
          <input
            onChange={(e) => perMonth(Number(e.target.value))}
            className="w-[100%] bg-orange-400"
            min={montleyPay}
            max={asset}
            type="range"
          />
          <div className="flex justify-between ">
            <p>0</p>
            <p>${montleyPay.toFixed(0)}</p>
            <p>{}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {new Array(12, 24, 36, 48, 60).map((month: number, index: number) => {
            return (
              <div
                onClick={() => Month(index, month)}
                className={`  py-5 px-10 rounded-[30px] cursor-pointer ${
                  monthBool[index] ? 'bg-orange-400 text-white' : 'bg-gray-200 '
                }`}
              >
                {month}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EMIcalulator
