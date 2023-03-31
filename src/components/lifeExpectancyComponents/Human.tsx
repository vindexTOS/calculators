import React, { FC } from 'react'
import { humanData } from '../../assets/human/asset'
import { UseCalcContext } from '../context'
import { State } from '../context'
const Human = () => {
  const {
    state,
    age,
    weight,
    height,
    feet,
    inch,
    ImperialToMetric,
  } = UseCalcContext()
  const style = {
    section: ` w-[100%] h-[1000px]  flex flex-col  items-center justify-center gap-2`,
    summeryDiv: ` flex  items-center justify-between px-5  py-3 gap-5  w-[70%] border-2 text-white text-[1.4rem ] `,
    artDiv: `  w-[70%] flex     justify-between gap-[6rem] `,
    humanDiv: `border-2  relative py-5 w-[500px] h-[100%] flex `,
    lineDiv: `absolute w-[35%] left-[50%] bottom-5 h-[93%] border-r-2 border-t-2  border-b-2 border-dashed `,
    summerys: `flex flex-wrap wrap gap-2 `,
    singleSummery: `border-2 w-[14rem]  h-[9rem] py-5 px-20 flex flex-col gap-5 items-center justify-center text-white `,
    icon: `w-[60px] `,
  }

  type SingleSummeryProps = {
    icon: string
    text: string
  }
  const SingleSummeryDiv: FC<SingleSummeryProps> = ({ icon, text }) => {
    return (
      <div className={style.singleSummery}>
        <img className={style.icon} src={icon} />
        <h1 className="text-[12px] text-white text-center">{text}</h1>
      </div>
    )
  }
  const education = state.noSchool
    ? 'Drop Out'
    : state.highSchool
    ? 'High School'
    : state.someCollege
    ? 'Some College'
    : state.college
    ? 'College '
    : ''

  const martial = state.married
    ? 'Married'
    : state.widowed
    ? 'Widowed'
    : state.divorced
    ? 'Divorced'
    : state.never
    ? 'Never Married'
    : state.seperated
    ? 'Separated'
    : ''

  const workout = state.neverWorkout
    ? 'Never WorkOut'
    : state.rarely
    ? 'Rarely'
    : state.oneTwo
    ? '1-2 Workouts Per Week'
    : state.threeFoure
    ? '3-4 Workouts Per Week'
    : state.fivePluse
    ? '5+ Workouts Per Week'
    : ''

  const health = state.poorHealth
    ? 'Poor Health'
    : state.fairHealth
    ? 'Fair Health'
    : state.goodHealth
    ? 'Good Health'
    : state.veryGoodHealth
    ? 'Very Good Health'
    : state.excellentHealth
    ? 'Excellent Health'
    : ''

  const healthIcons = state.poorHealth
    ? humanData.sad
    : state.fairHealth || state.goodHealth
    ? humanData.happiness
    : state.veryGoodHealth || state.excellentHealth
    ? humanData.happy
    : humanData.happy

  const alchoholIcons =
    state.alchoholWeek || state.alchoholDay
      ? humanData.wineGlass
      : humanData.noAlcho

  const alchohol = state.alchoholDay
    ? 'Drinking Every Day'
    : state.alchoholWeek
    ? 'Drinking Every Week'
    : 'Zero Drink'
  const smoke = state.smokeNo ? 'Do Not Smoke' : 'Smoke'

  const cigIcon = state.smokeNo ? humanData.noCig : humanData.cigarrete
  const diabetes = state.diabetesNo ? 'No Diabetes' : 'Diabetes'

  const money = state.lowIncome
    ? '< $40K'
    : state.midIncome
    ? '$40-60k'
    : state.highIncome
    ? '$60-80k'
    : state.topEarner
    ? '>$80k'
    : '< $40k'
  return (
    <section className={style.section}>
      <div className={style.summeryDiv}>
        <h1>My Summary:</h1>
        <div className="flex justify-between items-center w-[50%]">
          <h1>{state.male ? 'Male ' : state.female ? 'Female' : null}</h1>
          <h1>{age}Years Old</h1>
          <h1>
            {state.white
              ? 'White'
              : state.black
              ? 'Black'
              : state.asian
              ? 'Asian'
              : null}
          </h1>
        </div>
      </div>
      <div className={style.artDiv}>
        <section>
          <div className={style.humanDiv}>
            <img src={humanData.human} />
            <div className={style.lineDiv}>
              <div className="text-[1rem] text-white bg-gray-600  absolute top-[40%] left-[90%]">
                <p>
                  {ImperialToMetric
                    ? `${feet}'${inch}ft`
                    : height?.toFixed(0) + 'cm'}
                </p>
                <p>
                  {weight?.toFixed(0)}
                  {ImperialToMetric ? 'Lb' : 'Kg'}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={style.summerys}>
          <SingleSummeryDiv icon={humanData.education} text={education} />
          <SingleSummeryDiv icon={humanData.heart} text={martial} />
          <SingleSummeryDiv icon={humanData.excercise} text={workout} />
          <SingleSummeryDiv icon={healthIcons} text={health} />
          <SingleSummeryDiv icon={alchoholIcons} text={alchohol} />
          <SingleSummeryDiv icon={cigIcon} text={smoke} />
          <SingleSummeryDiv icon={humanData.bleeding} text={diabetes} />
          <SingleSummeryDiv icon={humanData.money} text={money} />
        </section>
      </div>
    </section>
  )
}

export default Human
