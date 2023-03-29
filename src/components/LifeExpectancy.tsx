import React, { useState, useReducer, Reducer, Dispatch, FC } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

type State = {
  male: boolean
  female: boolean
  white: boolean
  black: boolean
  asian: boolean
}

type Action = {
  type: string
}

const LifeExpectancy = () => {
  const style = {
    section: `w-[100%] h-[100vh] bg-gray-600 flex flex-col gap-10 items-center justify-center`,
    header: `px-10 py-3  bg-blue-500 text-[2rem] w-[12rem] text-white`,
    genderDiv: `  w-[70%]  flex  gap-5 items-center justify-start`,
    labelInputDiv: ` flex flex-col items-center justify-center  `,
    checkBox: `w-[5rem] bg-white h-[5rem] rounded-[50%] relative flex items-center justify-center cursor-pointer `,
    checKIcon: `absolute text-blue-500 w-[6rem] h-[6rem] cursor-pointer`,
    raceDiv: ` w-[70%]   flex  gap-5 items-center justify-start`,
    ageAndPHysiqueDiv: ` w-[70%]  flex items-center justify-center gap-5`,
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
  })

  return (
    <section className={style.section}>
      <div className={style.genderDiv}>
        <h1 className={style.header}>Gender:</h1>
        <div className={style.labelInputDiv}>
          <span
            onClick={() => dispatch({ type: 'male' })}
            className={style.checkBox}
          >
            {state.male && <AiFillCheckCircle className={style.checKIcon} />}
          </span>
          <label>Male</label>
        </div>
        <div className={style.labelInputDiv}>
          <span
            onClick={() => dispatch({ type: 'female' })}
            className={style.checkBox}
          >
            {state.female && <AiFillCheckCircle className={style.checKIcon} />}
          </span>
          <label>Female</label>
        </div>
      </div>
      <div className={style.raceDiv}>
        <h1 className={style.header}>Race:</h1>
        <div className={style.labelInputDiv}>
          <span
            onClick={() => dispatch({ type: 'white' })}
            className={style.checkBox}
          >
            {state.white && <AiFillCheckCircle className={style.checKIcon} />}
          </span>
          <label>White</label>
        </div>
        <div className={style.labelInputDiv}>
          <span
            onClick={() => dispatch({ type: 'black' })}
            className={style.checkBox}
          >
            {state.black && <AiFillCheckCircle className={style.checKIcon} />}
          </span>
          <label>Black</label>
        </div>
        <div className={style.labelInputDiv}>
          <span
            onClick={() => dispatch({ type: 'asian' })}
            className={style.checkBox}
          >
            {state.asian && <AiFillCheckCircle className={style.checKIcon} />}
          </span>
          <label>Asian</label>
        </div>
      </div>
      <div className={style.labelInputDiv}>
        <h1>Age & Physique</h1>
        <div className={style.ageAndPHysiqueDiv}>
          <h1 className={style.header}>Age: </h1>
          <input className={style.rangeInput} type="range" min={1} max={120} />
        </div>
      </div>
    </section>
  )
}

export default LifeExpectancy

// type CheckBoxObj = {
//     state: boolean[]
//     dispatchAction: string[]
//     titles: string[]
//   }

//   const CheckBoxes = ({ title, obj }: { title: string; obj: CheckBoxObj }) => {
//     return (
//       <div className={style.genderDiv}>
//         <h1 className={style.header}>{title}</h1>

//         <div className={style.labelInputDiv}>
//           {obj.dispatchAction.map((val: string) => {
//             return (
//               <span
//                 onClick={() => dispatch({ type: val })}
//                 className={style.checkBox}
//               >
//                 {obj.state.map((val: boolean) => {
//                   return (
//                     <>
//                       {state.male && (
//                         <AiFillCheckCircle className={style.checKIcon} />
//                       )}
//                     </>
//                   )
//                 })}
//               </span>
//             )
//           })}

//           {obj.titles.map((val: string) => (
//             <label>{val}</label>
//           ))}
//         </div>
//       </div>
//     )
//   }