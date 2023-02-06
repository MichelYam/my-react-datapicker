import React from 'react'
import Day from './Day'
import PropTypes from 'prop-types'
// import './stylesheets/datapicker.css'

type dayProp = {
  value: string | number
  selected?: boolean
  otherMonth: boolean | string
  year?: string | number
  month?: string | number
}[]
type Props = {
  calendarData: dayProp
  indexWeek: number
  setDaySelected: (value: any) => void
}
const Index: React.FC<Props> = ({ calendarData, indexWeek, setDaySelected }) => {
  const start = indexWeek * 7
  const weekDays = calendarData.slice(start, start + 7)
  return (
    <div className='calendar-week'>
      {weekDays.map((day, index) => {
        return (
          <Day
            key={index}
            value={day.value}
            year={day.year}
            month={day.month}
            otherMonth={day.otherMonth}
            selected={day.selected}
            setDaySelected={setDaySelected}
          />
        )
      })}
    </div>
  )
}

export default Index

Index.prototype = {
  calendarData: PropTypes.string.isRequired,
  indexWeek: PropTypes.string.isRequired,
  setDaySelected: PropTypes.func.isRequired,
}
