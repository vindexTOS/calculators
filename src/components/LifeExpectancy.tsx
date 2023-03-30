import React, { useState, useReducer, Reducer, Dispatch, FC } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

type State = {
  male: boolean
  female: boolean
  white: boolean
  black: boolean
  asian: boolean
  noSchool: boolean
  highSchool: boolean
  someCollege: boolean
  college: boolean
  married: boolean
  widowed: boolean
  divorced: boolean
  never: boolean
  seperated: boolean
  working: boolean
  retired: boolean
  lowIncome: boolean
  midIncome: boolean
  highIncome: boolean
  topEarner: boolean
  neverWorkout: boolean
  rarely: boolean
  oneTwo: boolean
  threeFoure: boolean
  fivePluse: boolean
  poorHealth: boolean
  fairHealth: boolean
  goodHealth: boolean
  veryGoodHealth: boolean
  excellentHealth: boolean
  diabetesNo: boolean
  diabetesYes: boolean
  alchoholZero: boolean
  alchoholWeek: boolean
  alchoholDay: boolean
  smokeYes: boolean
  smokeNo: boolean
}

type Action = {
  type: string
}

const LifeExpectancy = () => {
  const style = {
    section: `w-[100%] h-[100%] bg-gray-600 flex flex-col gap-10 items-center justify-center`,
    header: ` py-3 px-5   text-[2rem] w-[12rem] h-[10rem]  text-white`,
    rangeHeader: `py-3 px-5   text-[2rem] w-[12rem]  text-white `,
    genderDiv: `  w-[500px]  flex  gap-5 items-center justify-start`,
    labelInputDiv: ` flex flex-col items-center justify-center  gap-5 `,
    checkBox: `w-[5rem] bg-white h-[5rem] rounded-[50%] relative flex items-center justify-center cursor-pointer `,
    checKIcon: `absolute text-blue-500 w-[6rem] h-[6rem] cursor-pointer`,
    raceDiv: `  w-[500px]  flex  gap-5 items-center justify-start`,
    ageAndPHysiqueDiv: ` w-[500px]  flex items-center justify-center gap-3 relative`,
    rangeInput: ` w-[500px]`,
  }

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'male':
        return {
          ...state,
          male: state.male = true,
          female: state.female = false,
        }
      case 'female':
        return {
          ...state,
          female: state.female = true,
          male: state.male = false,
        }
      case 'white':
        return {
          ...state,
          white: state.white = true,
          black: state.black = false,
          asian: state.asian = false,
        }
      case 'black':
        return {
          ...state,
          white: state.white = false,
          black: state.black = true,
          asian: state.asian = false,
        }
      case 'asian':
        return {
          ...state,
          white: state.white = false,
          black: state.black = false,
          asian: state.asian = true,
        }
      case 'noSchool':
        return {
          ...state,
          noSchool: state.noSchool = true,
          highSchool: state.highSchool = false,
          someCollege: state.someCollege = false,
          college: state.college = false,
        }
      case 'highSchool':
        return {
          ...state,
          noSchool: state.noSchool = false,
          highSchool: state.highSchool = true,
          someCollege: state.someCollege = false,
          college: state.college = false,
        }
      case 'someCollege':
        return {
          ...state,
          noSchool: state.noSchool = false,
          highSchool: state.highSchool = false,
          someCollege: state.someCollege = true,
          college: state.college = false,
        }
      case 'college':
        return {
          ...state,
          noSchool: state.noSchool = false,
          highSchool: state.highSchool = false,
          someCollege: state.someCollege = false,
          college: state.college = true,
        }
      case 'married':
        return {
          ...state,
          married: state.married = true,
          widowed: state.widowed = false,
          divorced: state.divorced = false,
          never: state.never = false,
          seperated: state.seperated = false,
        }
      case 'widowed':
        return {
          ...state,
          married: state.married = false,
          widowed: state.widowed = true,
          divorced: state.divorced = false,
          never: state.never = false,
          seperated: state.seperated = false,
        }
      case 'divorced':
        return {
          ...state,
          married: state.married = false,
          widowed: state.widowed = false,
          divorced: state.divorced = true,
          never: state.never = false,
          seperated: state.seperated = false,
        }
      case 'never':
        return {
          ...state,
          married: state.married = false,
          widowed: state.widowed = false,
          divorced: state.divorced = false,
          never: state.never = true,
          seperated: state.seperated = false,
        }
      case 'seperated':
        return {
          ...state,
          married: state.married = false,
          widowed: state.widowed = false,
          divorced: state.divorced = false,
          never: state.never = false,
          seperated: state.seperated = true,
        }
      case 'working':
        return {
          ...state,
          working: state.working = true,
          retired: state.retired = false,
        }
      case 'retired':
        return {
          ...state,
          working: state.working = false,
          retired: state.retired = true,
        }
      case 'low':
        return {
          ...state,
          lowIncome: state.lowIncome = true,
          midIncome: state.midIncome = false,
          highIncome: state.highIncome = false,
          topEarner: state.topEarner = false,
        }
      case 'mid':
        return {
          ...state,
          lowIncome: state.lowIncome = false,
          midIncome: state.midIncome = true,
          highIncome: state.highIncome = false,
          topEarner: state.topEarner = false,
        }
      case 'high':
        return {
          ...state,
          lowIncome: state.lowIncome = false,
          midIncome: state.midIncome = false,
          highIncome: state.highIncome = true,
          topEarner: state.topEarner = false,
        }
      case 'top':
        return {
          ...state,
          lowIncome: state.lowIncome = false,
          midIncome: state.midIncome = false,
          highIncome: state.highIncome = false,
          topEarner: state.topEarner = true,
        }
      case 'neverWorkout':
        return {
          ...state,
          neverWorkout: state.neverWorkout = true,
          rarely: state.rarely = false,
          oneTwo: state.oneTwo = false,
          threeFoure: state.threeFoure = false,
          fivePluse: state.fivePluse = false,
        }
      case 'rarely':
        return {
          ...state,
          neverWorkout: state.neverWorkout = false,
          rarely: state.rarely = true,
          oneTwo: state.oneTwo = false,
          threeFoure: state.threeFoure = false,
          fivePluse: state.fivePluse = false,
        }
      case 'oneTwo':
        return {
          ...state,
          neverWorkout: state.neverWorkout = false,
          rarely: state.rarely = false,
          oneTwo: state.oneTwo = true,
          threeFoure: state.threeFoure = false,
          fivePluse: state.fivePluse = false,
        }

      case 'threeFoure':
        return {
          ...state,
          neverWorkout: state.neverWorkout = false,
          rarely: state.rarely = false,
          oneTwo: state.oneTwo = false,
          threeFoure: state.threeFoure = true,
          fivePluse: state.fivePluse = false,
        }

      case 'fivePluse':
        return {
          ...state,
          neverWorkout: state.neverWorkout = false,
          rarely: state.rarely = false,
          oneTwo: state.oneTwo = false,
          threeFoure: state.threeFoure = false,
          fivePluse: state.fivePluse = true,
        }
      case 'poorHealth':
        return {
          ...state,
          poorHealth: state.poorHealth = true,
          fairHealth: state.fairHealth = false,
          goodHealth: state.goodHealth = false,
          veryGoodHealth: state.veryGoodHealth = false,
          excellentHealth: state.excellentHealth = false,
        }
      case 'fairHealth':
        return {
          ...state,
          poorHealth: state.poorHealth = false,
          fairHealth: state.fairHealth = true,
          goodHealth: state.goodHealth = false,
          veryGoodHealth: state.veryGoodHealth = false,
          excellentHealth: state.excellentHealth = false,
        }
      case 'goodHealth':
        return {
          ...state,
          poorHealth: state.poorHealth = false,
          fairHealth: state.fairHealth = false,
          goodHealth: state.goodHealth = true,
          veryGoodHealth: state.veryGoodHealth = false,
          excellentHealth: state.excellentHealth = false,
        }
      case 'veryGoodHealth':
        return {
          ...state,
          poorHealth: state.poorHealth = false,
          fairHealth: state.fairHealth = false,
          goodHealth: state.goodHealth = false,
          veryGoodHealth: state.veryGoodHealth = true,
          excellentHealth: state.excellentHealth = false,
        }
      case 'excellentHealth':
        return {
          ...state,
          poorHealth: state.poorHealth = false,
          fairHealth: state.fairHealth = false,
          goodHealth: state.goodHealth = false,
          veryGoodHealth: state.veryGoodHealth = false,
          excellentHealth: state.excellentHealth = true,
        }
      case 'diabetesYes':
        return {
          ...state,
          diabetesYes: state.diabetesYes = true,
          diabetesNo: state.diabetesNo = false,
        }
      case 'diabetesNo':
        return {
          ...state,
          diabetesYes: state.diabetesYes = false,
          diabetesNo: state.diabetesNo = true,
        }
      case 'alchoholZero':
        return {
          ...state,
          alchoholZero: state.alchoholZero = true,
          alchoholWeek: state.alchoholWeek = false,
          alchoholDay: state.alchoholDay = false,
        }
      case 'alchoholWeek':
        return {
          ...state,
          alchoholZero: state.alchoholZero = false,
          alchoholWeek: state.alchoholWeek = true,
          alchoholDay: state.alchoholDay = false,
        }
      case 'alchoholDay':
        return {
          ...state,
          alchoholZero: state.alchoholZero = false,
          alchoholWeek: state.alchoholWeek = false,
          alchoholDay: state.alchoholDay = true,
        }
      case 'smokeYes':
        return {
          ...state,
          smokeYes: state.smokeYes = true,
          smokeNo: state.smokeNo = false,
        }
      case 'smokeNo':
        return {
          ...state,
          smokeYes: state.smokeYes = false,
          smokeNo: state.smokeNo = true,
        }

      default:
        return state
    }
  }

  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, {
    male: false,
    female: false,
    white: false,
    black: false,
    asian: false,
    noSchool: false,
    highSchool: false,
    someCollege: false,
    college: false,
    married: false,
    widowed: false,
    divorced: false,
    never: false,
    seperated: false,
    working: false,
    retired: false,
    lowIncome: false,
    midIncome: false,
    highIncome: false,
    topEarner: false,
    neverWorkout: false,
    rarely: false,
    oneTwo: false,
    threeFoure: false,
    fivePluse: false,
    poorHealth: false,
    fairHealth: false,
    goodHealth: false,
    veryGoodHealth: false,
    excellentHealth: false,
    diabetesNo: false,
    diabetesYes: false,
    alchoholZero: false,
    alchoholWeek: false,
    alchoholDay: false,
    smokeYes: false,
    smokeNo: false,
  })
  type CheckBoxProps = {
    type: string
    title: string
    state: boolean
  }
  const CheckBox: FC<CheckBoxProps> = ({ type, title, state }) => {
    return (
      <div className={style.labelInputDiv}>
        <span
          onClick={() => dispatch({ type: type })}
          className={style.checkBox}
        >
          {state && <AiFillCheckCircle className={style.checKIcon} />}
        </span>
        <label className="h-[5rem] text-center text-white ">{title}</label>
      </div>
    )
  }

  const [age, setAge] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [feet, setFeet] = useState<number>(0)
  const [inch, setInch] = useState<number>(0)
  const [ImperialToMetric, setImperialToMetric] = useState<boolean>(false)

  React.useEffect(() => {
    let lb = weight * 2.2

    if (ImperialToMetric) {
      setWeight(lb)
    }
    console.log(lb)
  }, [ImperialToMetric])

  React.useEffect(() => {
    const totalInches = height / 2.54
    const feet = Math.floor(totalInches / 12)
    const inches = Math.round(totalInches % 12)
    setFeet(feet)
    setInch(inches)
  }, [ImperialToMetric, height])
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
            <p className=" ml-[35rem] absolute text-white font-bold text-[1.2rem]">
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
              value={weight.toFixed(0)}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
            <p className=" ml-[35rem] absolute text-white font-bold text-[1.2rem]">
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
            <p className=" ml-[35rem] absolute text-white font-bold text-[1.2rem]">
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
    </section>
  )
}

export default LifeExpectancy
