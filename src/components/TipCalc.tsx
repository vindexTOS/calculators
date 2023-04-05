import React, { useState, useEffect } from 'react'
import { BsCurrencyDollar, BsFillPersonFill } from 'react-icons/bs'

const TipCalc = () => {
  const style = {
    section: ` flex      items-center justify-center w-[100vw]   max_Xll:text-[1rem] h-[100vh]  max_Xll:h-[100%] text-[1rem] bg-gray-600 `,
    mainDiv: `flex max_Xll:flex-col max_Xll:gap-10 items-center justify-center  w-[50%] max_Xll:w-[90%] max_Xll:py-40 `,
    calcDiv: `border-2 w-[60%] h-[600px] py-5  max_Xll:h-[500px] max_Xll:w-[90%]`,
    screenDiv: `border-2 w-[60%] h-[600px] flex items-center flex-col justify-cetner py-40 gap-5 max_Xll:h-[400px] max_Xll:w-[90%] `,
    inputDiv: `w-[90%] h-[4rem] bg-gray-200 flex items-center  justify-between    px-4`,
    input: `outline-none rounded-[5px] h-[2rem] w-[80%] flex items-end justify-end text-end`,
    inputWrapper: ` flex items-center justify-center flex-col gap-5`,
    header: `text-white font-bold text-[1.2rem]  max_Xll:text-[1rem] w-[90%] `,
  }
  const [money, setMoney] = useState<number>(0)
  const [people, setPeople] = useState<number>(1)
  const [tipAmount, setTipamount] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)
  const [proc, setProc] = useState(0)
  const [customBool, setCustomBool] = useState<boolean>(false)
  const TipCalc = (tip: number) => {
    const pro = money * (tip / 100)
    const total = pro + money
    setTipamount(pro / people)
    setTotal(total / people)
    setProc(Number(tip))
  }

  const CleanUp = () => {
    setTipamount(0)
    setTotal(0)
    setProc(0)
    setCustomBool(false)
  }

  useEffect(() => {
    TipCalc(proc)
  }, [people])

  return (
    <section className={style.section}>
      <div className={style.mainDiv}>
        <div className={style.calcDiv}>
          <div className={style.inputWrapper}>
            <h1 className={style.header}>Bill</h1>
            <div className={style.inputDiv}>
              <BsCurrencyDollar className="text-green-600" />
              <input
                onChange={(e) => setMoney(Number(e.target.value))}
                type="number"
                className={style.input}
                placeholder="0"
              />
            </div>
          </div>
          <div className="w-[100%] flex items-center justify-center flex-col gap-5">
            <h1 className="w-[90%] text-white text-[1.2rem] font-bold">
              Select Tip %
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-5  max_Xll:text-[1rem] w-[90%]">
              {new Array('5', '10', '15', '25', '50').map((val: string) => (
                <div
                  onClick={() => TipCalc(Number(val))}
                  className="w-[30%] cursor-pointer hover:bg-green-300 flex items-center justify-center p-2 bg-green-500  max_Xll:text-[1rem]  text-white text-[2rem]"
                >
                  {val}%
                </div>
              ))}
              {customBool ? (
                <input
                  onChange={(e) => TipCalc(Number(e.target.value))}
                  className="w-[30%] flex items-center justify-center bg-green-300  p-2 bg-gray-900 text-purple-600 text-[2rem]  max_Xll:text-[1rem]"
                />
              ) : (
                <div
                  onClick={() => setCustomBool(!customBool)}
                  className="w-[30%] flex items-center justify-center bg-green-300  p-2 bg-gray-900 text-purple-600 text-[2rem] max_Xll:text-[1rem]"
                >
                  Custom
                </div>
              )}
            </div>
          </div>
          <div className={style.inputWrapper}>
            <h1 className={style.header}>Number Of People</h1>
            <div className={style.inputDiv}>
              <BsFillPersonFill className="text-orange-500" />
              <input
                onChange={(e) => setPeople(Number(e.target.value))}
                type="number"
                className={style.input}
                placeholder="1"
              />
            </div>
          </div>
        </div>
        <div className={style.screenDiv}>
          <h1 className="text-white text-[2rem]">
            Tip Amount{' '}
            <span className="text-green-400">{tipAmount.toFixed(2)}$</span>
          </h1>
          <h1 className="text-white text-[2rem]">
            Total: <span className="text-green-400">{total.toFixed(2)}$</span>
          </h1>

          <button
            onClick={CleanUp}
            className="text-[2rem] w-[8rem] text-white hover:bg-red-500 h-[3rem] bg-red-400"
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  )
}

export default TipCalc
