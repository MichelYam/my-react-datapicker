import React, { RefObject } from 'react'
import PropTypes from 'prop-types'
// import './stylesheets/datepicker.css'

type Props = {
  selectedDate: string
  dateFormat: string
  onChange: (value: string) => void
  datepickerRef: RefObject<HTMLInputElement>
  inputId?: string
}
/**
 * 
 * @param {string} selectedDate the day selected
 * @param {string} dateFormat format of the date
 * @param {function} onChange function will update the day 
 * @param {RefObject<HTMLInputElement>} datepickerRef 
 * @param {string} inputId ID of input
 * @returns JSX Element
 */
const Index = ({ selectedDate, dateFormat, onChange, datepickerRef, inputId }: Props) => {
  return (
    <input
      id={inputId}
      type='text'
      ref={datepickerRef}
      placeholder={dateFormat ? dateFormat : 'DD/MM/AAAA'}
      value={selectedDate}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    />
  )
}

export default Index

Index.prototype = {
  selectedDate: PropTypes.string,
  onChange: PropTypes.func,
  dateFormat: PropTypes.string
}
