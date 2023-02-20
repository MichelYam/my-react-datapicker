import React, { Dispatch, ReactNode, SetStateAction, useRef, useState } from 'react'
import Calendar from './Calendar'
import Input from './input'
import PropTypes from 'prop-types'
// import './stylesheets/datapicker.css'

type Props = {
  dataFormat: string
  selectedDate: string
  setSelectedDate: Dispatch<SetStateAction<string>>
  customHeader?(params: IParamsCalendarHeader): ReactNode
  inputId?: string
}
export interface IParamsCalendarHeader {
  prev(): void
  next(): void
  currentYear: string | number
  currentMonth: string | number
  changeMonth: (value: number) => void
  changeYear: (value: number) => void
}
const Datapicker: React.FC<Props> = ({ selectedDate, setSelectedDate, customHeader, dataFormat, inputId }) => {
  const [isOpen, setIsOpen] = useState(false)
  let datapickerRef = useRef<HTMLInputElement>(null)
  return (
    <div className='datapicker'>
      <div className='datapicker-input' onClick={() => setIsOpen(true)}>
        <Input
          inputId={inputId}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          dataFormat={dataFormat}
          datapickerRef={datapickerRef}
        />
        {isOpen && <Calendar
          isOpen={isOpen}
          setIsOpen={() => setIsOpen(false)}
          customHeader={customHeader}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          dataFormat={dataFormat}
          datapickerRef={datapickerRef}
        />}
      </div>
    </div>
  )
}

export default Datapicker

Datapicker.prototype = {
  selectedDate: PropTypes.string.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
  customHeader: PropTypes.func,
  dataFormat: PropTypes.string,
}
