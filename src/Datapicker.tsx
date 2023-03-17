import React, { ReactNode, useRef, useState } from 'react'
import Calendar from './Calendar'
import Input from './input'
import PropTypes from 'prop-types'

// import './stylesheets/datapicker.css'

type Props = {
  dataFormat: string
  selectedDate: string
  onChange: (value: string) => void
  customHeader?(params: IParamsCalendarHeader): ReactNode
  inputId?: string
  monthsList?: (string | number)[]
  yearList?: (string | number)[]
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
 * @param {Object} datapicker datapicker component
 * @param {string} datapicker.dataFormat format of date
 * @param {string} datapicker.inputId ID of input
 * @param {string} datapicker.selectedDate day selected
 * @param {string} datapicker.onChange update the date
 * @param {string} datapicker.customHeader customize your calendar header
 * @return {JSX Element} return the input and calendar
 */
const Datapicker = ({ selectedDate, onChange, customHeader, dataFormat, inputId, monthsList, yearList }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  let datapickerRef = useRef<HTMLInputElement>(null)
  return (
    <div className='datapicker'>
      <div className='datapicker-input' onClick={() => setIsOpen(true)}>
        <Input
          inputId={inputId}
          selectedDate={selectedDate}
          onChange={onChange}
          dataFormat={dataFormat}
          datapickerRef={datapickerRef}
        />
        {isOpen && <Calendar
          setIsOpen={() => setIsOpen(false)}
          customHeader={customHeader}
          selectedDate={selectedDate}
          onChange={onChange}
          dataFormat={dataFormat}
          datapickerRef={datapickerRef}
          monthsList={monthsList}
          yearList={yearList}
        />}
      </div>
    </div>
  )
}

export default Datapicker

Datapicker.prototype = {
  selectedDate: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  customHeader: PropTypes.func,
  dataFormat: PropTypes.string,
}
