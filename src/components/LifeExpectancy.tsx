import React, { useState, FC, useRef } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { UseCalcContext } from './context'
import Human from './lifeExpectancyComponents/Human'
import Results from './lifeExpectancyComponents/Results'
const LifeExpectancy = () => {
  const {
    state,
    dispatch,
    age,
    setAge,
    weight,
    setWeight,
    height,
    setHeight,
    feet,
    setFeet,
    inch,
    setInch,
    ImperialToMetric,
    setImperialToMetric,
  } = UseCalcContext()
  const style = {
    section: `w-[100%]  h-[100%] bg-gray-600 max_md:gap-5   flex flex-col gap-10 items-center justify-center pb-10 overflow-x-hiddens`,
    header: ` py-3 px-5   max_Xll:text-[1.3rem] max_md:text-[1rem] text-[2rem] w-[12rem] h-[10rem]  text-white`,
    rangeHeader: `py-3 px-5  max_Xll:text-[1.3rem]  text-[2rem] w-[12rem]  text-white `,
    genderDiv: `  w-[500px]  max_md:gap-4 max_md:mr-[9rem] max_md:w-[50%]  max_md:w-[250px] flex  gap-5 items-center justify-start max_md:justify-start max_md:items-start   `,
    labelInputDiv: ` flex flex-col items-center justify-center  gap-5  max_md:gap-2  `,
    checkBox: `w-[5rem] bg-white h-[5rem]  max_Xll:w-[2rem] max_Xll:h-[2rem] max_md:w-[1rem]  max_md:h-[1rem] rounded-[50%] relative flex items-center justify-center cursor-pointer `,
    checKIcon: `absolute text-blue-500 w-[6rem] h-[6rem]  max_Xll:w-[2rem] max_Xll:h-[2rem cursor-pointer`,
    raceDiv: `  w-[500px] max_md:w-[50%] max_md:mr-[9rem]  max_md:w-[250px] flex  gap-5 items-center justify-start`,
    ageAndPHysiqueDiv: ` w-[500px] max_Xll:gap-0 max_Xll:w-[400px]  max_md:w-[300px] flex items-center justify-center gap-3 relative`,
    rangeInput: ` w-[500px] max_Xll:w-[300px] max_md:mr-10`,
  }

  type CheckBoxProps = {
    type: string
    title: string
    state: boolean
  }

  const resutlRef = useRef(null)
  const CheckBox: FC<CheckBoxProps> = ({ type, title, state }) => {
    return (
      <div className={style.labelInputDiv}>
        <span
          onClick={() =>
            dispatch({
              type: type,
              payload: 0,
            })
          }
          className={style.checkBox}
        >
          {state && <AiFillCheckCircle className={style.checKIcon} />}
        </span>
        <label className="h-[5rem] text-center text-white max_md:text-[9px] ">
          {title}
        </label>
      </div>
    )
  }
  const [resultShow, setResultShow] = useState<boolean>(false)

  React.useEffect(() => {
    let lb = weight * 2.2

    if (ImperialToMetric) {
      setWeight(lb)
    }
  }, [ImperialToMetric])

  React.useEffect(() => {
    const totalInches = height / 2.54
    const feet = Math.floor(totalInches / 12)
    const inches = Math.round(totalInches % 12)
    setFeet(feet)
    setInch(inches)
  }, [ImperialToMetric, height])
  React.useEffect(() => {
    dispatch({ type: 'points', payload: age })
  }, [age])
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false)
  const [agePoints, setAgePoints] = useState<string>('')
  const Result = () => {
    if (ImperialToMetric) {
      let inch = height / 2.54
      let bmi = (weight / (inch * inch)) * 703
      dispatch({ type: 'bmi', payload: Number(bmi.toFixed(2)) })
    } else {
      let lb = weight * 2.2
      let ft = height / 2.54
      let bmi = (lb / (ft * ft)) * 703
      dispatch({ type: 'bmi', payload: Number(bmi.toFixed(2)) })
    }
    dispatch({ type: 'age', payload: Number(age) })

    setResultShow(!resultShow)
    setBtnDisabled(true)
    const ageCheck =
      state.points <= age
        ? 'the fact that you are still alive is nothing short of a miracle'
        : state.points
    setAgePoints(String(ageCheck))
  }
  React.useEffect(() => {
    const element = (resutlRef.current as unknown) as HTMLDivElement
    element?.scrollIntoView({ behavior: 'smooth' })
    element?.scrollIntoView({ behavior: 'smooth' })
  }, [Result])
  return (
    <section className={style.section}>
      <div className={style.genderDiv}>
        <h1 className={style.header}>Gender:</h1>
        <CheckBox type={'male'} title="Male" state={state.male} />
        <CheckBox type={'female'} title="Female" state={state.female} />
      </div>
      <div className={style.raceDiv}>
        <h1 className={style.header}>Race:</h1>
        <CheckBox type={'white'} title="White" state={state.white} />
        <CheckBox type={'black'} title="Black" state={state.black} />
        <CheckBox type={'asian'} title="Asian" state={state.asian} />
      </div>

      <div className={style.labelInputDiv}>
        <h1 className="text-[2rem] text-white ">Age & Physique</h1>

        <div className="flex flex-col gap-10">
          <span
            onClick={() => setImperialToMetric(!ImperialToMetric)}
            className={`cursor-pointer flex w-[5rem] border-2 h-[2rem]  rounded-[20px]  ${
              ImperialToMetric
                ? 'flex items-end justify-end'
                : 'flex items-strt'
            }`}
          >
            <div
              className={`w-[2.5rem] flex items-center justify-center h-[1.8rem] bg-orange-400 rounded-[20px] `}
            >
              {' '}
              <p className="absolute text-[12px] text-white">
                {ImperialToMetric ? 'USA' : 'Metric'}{' '}
              </p>
            </div>
          </span>
          <div className={style.ageAndPHysiqueDiv}>
            <h1 className={style.rangeHeader}>Age: </h1>
            <input
              className={style.rangeInput}
              type="range"
              min={1}
              max={85}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
            <p className=" ml-[35rem] absolute text-white max_md:mr-[17rem] font-bold text-[1.2rem]">
              {age}
            </p>
          </div>
          <div className={style.ageAndPHysiqueDiv}>
            <h1 className={style.rangeHeader}>Weight: </h1>
            <input
              className={style.rangeInput}
              type="range"
              min={ImperialToMetric ? 74 : 34}
              max={ImperialToMetric ? 660 : 300}
              value={weight?.toFixed(2)}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
            <p className=" ml-[35rem] absolute text-white max_md:mr-[17rem] font-bold text-[1.2rem]">
              {weight}
              {ImperialToMetric ? 'Lb' : 'Kg'}
            </p>
          </div>
          <div className={style.ageAndPHysiqueDiv}>
            <h1 className={style.rangeHeader}>Height: </h1>
            <input
              className={style.rangeInput}
              type="range"
              min={50}
              max={230}
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
            <p className=" ml-[35rem] absolute text-white max_md:mr-[17rem] font-bold text-[1.2rem]">
              {ImperialToMetric ? `${feet}'${inch}` : height}
              {ImperialToMetric ? 'FT' : 'CM'}
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-[2rem] text-white">Life Events</h1>
      <div className={style.genderDiv}>
        <h1 className={style.header}>Education:</h1>
        <CheckBox
          type={'noSchool'}
          title="Less Than 12 Years"
          state={state.noSchool}
        />
        <CheckBox
          type={'highSchool'}
          title="High School Graduate"
          state={state.highSchool}
        />
        <CheckBox
          type={'someCollege'}
          title="Some College"
          state={state.someCollege}
        />
        <CheckBox
          type={'college'}
          title="College Graduate"
          state={state.college}
        />
      </div>
      <div className={style.genderDiv}>
        <h1 className={style.header}>Marital Status</h1>
        <CheckBox type={'married'} title="Married" state={state.married} />
        <CheckBox type={'widowed'} title="Widowed" state={state.widowed} />
        <CheckBox type={'divorced'} title="Divorced" state={state.divorced} />
        <CheckBox type={'never'} title="Never Married" state={state.never} />
        <CheckBox
          type={'seperated'}
          title="Separated"
          state={state.seperated}
        />
      </div>
      <div className={style.genderDiv}>
        <h1 className={style.header}>Are You Retired?</h1>
        <CheckBox
          type={'working'}
          title="Currently Working"
          state={state.working}
        />
        <CheckBox type={'retired'} title="Retired" state={state.retired} />
      </div>
      <div className={style.genderDiv}>
        <h1 className={style.header}>Income</h1>
        <CheckBox type={'low'} title="< $40k" state={state.lowIncome} />
        <CheckBox type={'mid'} title=" $40-60k" state={state.midIncome} />
        <CheckBox type={'high'} title="$60-80k" state={state.highIncome} />
        <CheckBox type={'top'} title=" > 80k" state={state.topEarner} />
      </div>
      <h1 className="text-[2rem] text-white">Fitness</h1>
      <div className={style.genderDiv}>
        <h1 className={style.header}>Exercise</h1>

        <CheckBox
          type={'neverWorkout'}
          title="Never"
          state={state.neverWorkout}
        />
        <CheckBox type={'rarely'} title="Rarely" state={state.rarely} />
        <CheckBox
          type={'oneTwo'}
          title="Workout 1-2 Per Week"
          state={state.oneTwo}
        />
        <CheckBox
          type={'threeFoure'}
          title="Workout 3-4 Per Week"
          state={state.threeFoure}
        />
        <CheckBox type={'fivePluse'} title="5+" state={state.fivePluse} />
      </div>
      <div className={style.genderDiv}>
        <h1 className={style.header}>Health</h1>
        <CheckBox type={'poorHealth'} title="Poor" state={state.poorHealth} />
        <CheckBox type={'fairHealth'} title="Fair" state={state.fairHealth} />
        <CheckBox type={'goodHealth'} title="Good" state={state.goodHealth} />
        <CheckBox
          type={'veryGoodHealth'}
          title="Very Good"
          state={state.veryGoodHealth}
        />
        <CheckBox
          type={'excellentHealth'}
          title="Excellent"
          state={state.excellentHealth}
        />
      </div>
      <div className={style.genderDiv}>
        <h1 className={style.header}>Diabetes</h1>
        <CheckBox type={'diabetesYes'} title="Yes" state={state.diabetesYes} />
        <CheckBox type={'diabetesNo'} title="No" state={state.diabetesNo} />
      </div>
      <h1 className="text-[2rem] text-white">LifeStyle</h1>
      <div className={style.genderDiv}>
        <h1 className={style.header}>Alchohol:</h1>
        <CheckBox
          type={'alchoholZero'}
          title="Zero"
          state={state.alchoholZero}
        />
        <CheckBox
          type={'alchoholWeek'}
          title="Once A Week"
          state={state.alchoholWeek}
        />
        <CheckBox
          type={'alchoholDay'}
          title="Every Day"
          state={state.alchoholDay}
        />
      </div>
      <div className={style.genderDiv}>
        <h1 className={style.header}>Smoking:</h1>
        <CheckBox type={'smokeYes'} title="Yes" state={state.smokeYes} />
        <CheckBox type={'smokeNo'} title="No" state={state.smokeNo} />
      </div>
      <Human />
      <button
        disabled={btnDisabled}
        className="w-[70%] p-10 max_md:w-[100%]   bg-blue-300 text-[3rem] text-white hover:bg-blue-400 border-2 max_Xll:mt-[15rem]"
        onClick={() => Result()}
      >
        Result
      </button>
      {resultShow && <Results resutlRef={resutlRef} points={agePoints} />}
    </section>
  )
}

export default LifeExpectancy
