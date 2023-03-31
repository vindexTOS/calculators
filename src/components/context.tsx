import React, {
  useContext,
  createContext,
  useState,
  useReducer,
  Reducer,
} from 'react'

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
  points: number
  age: number
  bmi: number
  ageScore: string
}

type Action = {
  type: string
  payload: number
}

type Cell = {
  dispatch: React.Dispatch<Action>
  state: State
  age: number
  setAge: React.Dispatch<React.SetStateAction<number>>
  weight: number
  setWeight: React.Dispatch<React.SetStateAction<number>>
  height: number
  setHeight: React.Dispatch<React.SetStateAction<number>>
  feet: number
  setFeet: React.Dispatch<React.SetStateAction<number>>
  inch: number
  setInch: React.Dispatch<React.SetStateAction<number>>
  ImperialToMetric: boolean
  setImperialToMetric: React.Dispatch<React.SetStateAction<boolean>>
}

export const CalcContext = createContext<Cell | null>(null)

export const CalcContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [age, setAge] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [feet, setFeet] = useState<number>(0)
  const [inch, setInch] = useState<number>(0)
  const [ImperialToMetric, setImperialToMetric] = useState<boolean>(false)

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'male':
        return {
          ...state,
          male: state.male = true,
          female: state.female = false,
          points: state.points - 5,
        }
      case 'female':
        return {
          ...state,
          female: state.female = true,
          male: state.male = false,
          points: state.points + 5,
        }
      case 'white':
        return {
          ...state,
          white: state.white = true,
          black: state.black = false,
          asian: state.asian = false,
          points: state.points + 5,
        }
      case 'black':
        return {
          ...state,
          white: state.white = false,
          black: state.black = true,
          asian: state.asian = false,
          points: state.points - 2,
        }
      case 'asian':
        return {
          ...state,
          white: state.white = false,
          black: state.black = false,
          asian: state.asian = true,
          points: state.points + 7,
        }
      case 'noSchool':
        return {
          ...state,
          noSchool: state.noSchool = true,
          highSchool: state.highSchool = false,
          someCollege: state.someCollege = false,
          college: state.college = false,
          state: state.points - 5,
        }
      case 'highSchool':
        return {
          ...state,
          noSchool: state.noSchool = false,
          highSchool: state.highSchool = true,
          someCollege: state.someCollege = false,
          college: state.college = false,
          points: state.points + 2,
        }
      case 'someCollege':
        return {
          ...state,
          noSchool: state.noSchool = false,
          highSchool: state.highSchool = false,
          someCollege: state.someCollege = true,
          college: state.college = false,
          points: state.points + 5,
        }
      case 'college':
        return {
          ...state,
          noSchool: state.noSchool = false,
          highSchool: state.highSchool = false,
          someCollege: state.someCollege = false,
          college: state.college = true,
          points: state.points + 7,
        }
      case 'married':
        return {
          ...state,
          married: state.married = true,
          widowed: state.widowed = false,
          divorced: state.divorced = false,
          never: state.never = false,
          seperated: state.seperated = false,
          points: state.points + 5,
        }
      case 'widowed':
        return {
          ...state,
          married: state.married = false,
          widowed: state.widowed = true,
          divorced: state.divorced = false,
          never: state.never = false,
          seperated: state.seperated = false,
          points: state.points - 5,
        }
      case 'divorced':
        return {
          ...state,
          married: state.married = false,
          widowed: state.widowed = false,
          divorced: state.divorced = true,
          never: state.never = false,
          seperated: state.seperated = false,
          points: state.points - 5,
        }
      case 'never':
        return {
          ...state,
          married: state.married = false,
          widowed: state.widowed = false,
          divorced: state.divorced = false,
          never: state.never = true,
          seperated: state.seperated = false,
          points: state.points + 2,
        }
      case 'seperated':
        return {
          ...state,
          married: state.married = false,
          widowed: state.widowed = false,
          divorced: state.divorced = false,
          never: state.never = false,
          seperated: state.seperated = true,
          points: state.points - 2,
        }
      case 'working':
        return {
          ...state,
          working: state.working = true,
          retired: state.retired = false,
          points: state.points - 2,
        }
      case 'retired':
        return {
          ...state,
          working: state.working = false,
          retired: state.retired = true,
          points: state.points + 7,
        }
      case 'low':
        return {
          ...state,
          lowIncome: state.lowIncome = true,
          midIncome: state.midIncome = false,
          highIncome: state.highIncome = false,
          topEarner: state.topEarner = false,
          points: state.points - 2,
        }
      case 'mid':
        return {
          ...state,
          lowIncome: state.lowIncome = false,
          midIncome: state.midIncome = true,
          highIncome: state.highIncome = false,
          topEarner: state.topEarner = false,
          points: state.points + 5,
        }
      case 'high':
        return {
          ...state,
          lowIncome: state.lowIncome = false,
          midIncome: state.midIncome = false,
          highIncome: state.highIncome = true,
          topEarner: state.topEarner = false,
          points: state.points + 10,
        }
      case 'top':
        return {
          ...state,
          lowIncome: state.lowIncome = false,
          midIncome: state.midIncome = false,
          highIncome: state.highIncome = false,
          topEarner: state.topEarner = true,
          points: state.points + 15,
        }
      case 'neverWorkout':
        return {
          ...state,
          neverWorkout: state.neverWorkout = true,
          rarely: state.rarely = false,
          oneTwo: state.oneTwo = false,
          threeFoure: state.threeFoure = false,
          fivePluse: state.fivePluse = false,
          points: state.points - 5,
        }
      case 'rarely':
        return {
          ...state,
          neverWorkout: state.neverWorkout = false,
          rarely: state.rarely = true,
          oneTwo: state.oneTwo = false,
          threeFoure: state.threeFoure = false,
          fivePluse: state.fivePluse = false,
          points: state.points + 2,
        }
      case 'oneTwo':
        return {
          ...state,
          neverWorkout: state.neverWorkout = false,
          rarely: state.rarely = false,
          oneTwo: state.oneTwo = true,
          threeFoure: state.threeFoure = false,
          fivePluse: state.fivePluse = false,
          points: state.points + 15,
        }

      case 'threeFoure':
        return {
          ...state,
          neverWorkout: state.neverWorkout = false,
          rarely: state.rarely = false,
          oneTwo: state.oneTwo = false,
          threeFoure: state.threeFoure = true,
          fivePluse: state.fivePluse = false,
          points: state.points + 15,
        }

      case 'fivePluse':
        return {
          ...state,
          neverWorkout: state.neverWorkout = false,
          rarely: state.rarely = false,
          oneTwo: state.oneTwo = false,
          threeFoure: state.threeFoure = false,
          fivePluse: state.fivePluse = true,
          points: state.points + 10,
        }
      case 'poorHealth':
        return {
          ...state,
          poorHealth: state.poorHealth = true,
          fairHealth: state.fairHealth = false,
          goodHealth: state.goodHealth = false,
          veryGoodHealth: state.veryGoodHealth = false,
          excellentHealth: state.excellentHealth = false,
          points: state.points - 5,
        }
      case 'fairHealth':
        return {
          ...state,
          poorHealth: state.poorHealth = false,
          fairHealth: state.fairHealth = true,
          goodHealth: state.goodHealth = false,
          veryGoodHealth: state.veryGoodHealth = false,
          excellentHealth: state.excellentHealth = false,
          points: state.points + 2,
        }
      case 'goodHealth':
        return {
          ...state,
          poorHealth: state.poorHealth = false,
          fairHealth: state.fairHealth = false,
          goodHealth: state.goodHealth = true,
          veryGoodHealth: state.veryGoodHealth = false,
          excellentHealth: state.excellentHealth = false,
          points: state.points + 5,
        }
      case 'veryGoodHealth':
        return {
          ...state,
          poorHealth: state.poorHealth = false,
          fairHealth: state.fairHealth = false,
          goodHealth: state.goodHealth = false,
          veryGoodHealth: state.veryGoodHealth = true,
          excellentHealth: state.excellentHealth = false,
          points: state.points + 10,
        }
      case 'excellentHealth':
        return {
          ...state,
          poorHealth: state.poorHealth = false,
          fairHealth: state.fairHealth = false,
          goodHealth: state.goodHealth = false,
          veryGoodHealth: state.veryGoodHealth = false,
          excellentHealth: state.excellentHealth = true,
          points: state.points + 15,
        }
      case 'diabetesYes':
        return {
          ...state,
          diabetesYes: state.diabetesYes = true,
          diabetesNo: state.diabetesNo = false,
          points: state.points - 10,
        }
      case 'diabetesNo':
        return {
          ...state,
          diabetesYes: state.diabetesYes = false,
          diabetesNo: state.diabetesNo = true,
          points: state.points + 5,
        }
      case 'alchoholZero':
        return {
          ...state,
          alchoholZero: state.alchoholZero = true,
          alchoholWeek: state.alchoholWeek = false,
          alchoholDay: state.alchoholDay = false,
          points: state.points + 10,
        }
      case 'alchoholWeek':
        return {
          ...state,
          alchoholZero: state.alchoholZero = false,
          alchoholWeek: state.alchoholWeek = true,
          alchoholDay: state.alchoholDay = false,
          points: state.points - 5,
        }
      case 'alchoholDay':
        return {
          ...state,
          alchoholZero: state.alchoholZero = false,
          alchoholWeek: state.alchoholWeek = false,
          alchoholDay: state.alchoholDay = true,
          points: state.points - 20,
        }
      case 'smokeYes':
        return {
          ...state,
          smokeYes: state.smokeYes = true,
          smokeNo: state.smokeNo = false,
          points: state.points - 10,
        }
      case 'smokeNo':
        return {
          ...state,
          smokeYes: state.smokeYes = false,
          smokeNo: state.smokeNo = true,
          points: state.points + 10,
        }
      case 'points':
        return { ...state, points: state.points = action.payload }
      case 'age':
        return {
          ...state,
          age: state.age = action.payload,
          points:
            action.payload <= 85
              ? state.points - 20
              : action.payload <= 70
              ? state.points - 15
              : action.payload <= 60
              ? state.points - 10
              : action.payload <= 50
              ? state.points - 5
              : action.payload <= 40
              ? state.points - 2
              : action.payload <= 30
              ? state.points + 0
              : action.payload <= 20
              ? state.points + 5
              : action.payload <= 10
              ? state.points + 10
              : state.points + 0,
        }
      case 'bmi':
        return {
          ...state,
          bmi: state.bmi = action.payload,
          points:
            action.payload >= 40
              ? state.points - 20
              : action.payload >= 30
              ? state.points - 15
              : action.payload >= 25
              ? state.points - 10
              : action.payload <= 25
              ? state.points + 10
              : action.payload <= 17
              ? state.points - 5
              : state.points + 0,
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
    points: age,
    age: 0,
    bmi: 0,
    ageScore: '',
  })

  return (
    <CalcContext.Provider
      value={{
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
      }}
    >
      {children}
    </CalcContext.Provider>
  )
}

export const UseCalcContext = () => {
  const context = useContext(CalcContext)
  if (!context) {
    throw new Error('not wrapped')
  }
  return context
}
