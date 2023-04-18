import React, { ReactNode, useRef, useState } from 'react'
import Calendar from './Calendar'
import Input from './input'
import PropTypes from 'prop-types'

// import './stylesheets/datepicker.css'

type Props = {
  dateFormat: string
  selectedDate: string
  onChange: (value: string) => void
  customHeader?(params: IParamsCalendarHeader): ReactNode
  inputId?: string
  monthsList?: (string | number)[]
  yearsList?: (string | number)[]
}
export interface IParamsCalendarHeader {
  prev(): void
  next(): void
  currentYear: string | number
  currentMonth: string | number
  changeMonth: (value: number) => void
  changeYear: (value: number) => void
}

/**
 * 
 * @param {Object} datepicker datepicker component
 * @param {string} datepicker.dateFormat format of date
 * @param {string} datepicker.inputId ID of input
 * @param {string} datepicker.selectedDate day selected
 * @param {string} datepicker.onChange update the date
 * @param {string} datepicker.customHeader customize your calendar header
 * @return {JSX Element} return the input and calendar
 */
const Datepicker = ({ selectedDate, onChange, customHeader, dateFormat, inputId, monthsList, yearsList }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  let datepickerRef = useRef<HTMLInputElement>(null)
  return (
    <div className='datepicker'>
      <div className='datepicker-input' onClick={() => setIsOpen(true)}>
        <Input
          inputId={inputId}
          selectedDate={selectedDate}
          onChange={onChange}
          dateFormat={dateFormat}
          datepickerRef={datepickerRef}
        />
        {isOpen && <Calendar
          setIsOpen={() => setIsOpen(false)}
          customHeader={customHeader}
          selectedDate={selectedDate}
          onChange={onChange}
          dateFormat={dateFormat}
          datepickerRef={datepickerRef}
          monthsList={monthsList}
          yearsList={yearsList}
        />}
      </div>
    </div>
  )
}

export default Datepicker

Datepicker.prototype = {
  selectedDate: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  customHeader: PropTypes.func,
  dateFormat: PropTypes.string,
  monthsList: PropTypes.array,
  yearList: PropTypes.array,
}
