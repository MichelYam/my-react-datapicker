import React, { RefObject } from 'react'
import PropTypes from 'prop-types'
// import './stylesheets/datapicker.css'

type Props = {
  selectedDate: string
  dataFormat: string
  onChange: (value: string) => void
  datapickerRef: RefObject<HTMLInputElement>
  inputId?: string
}
/**
 * 
 * @param {string} selectedDate the day selected
 * @param {string} dataFormat format of the date
 * @param {function} onChange function will update the day 
 * @param {RefObject<HTMLInputElement>} datapickerRef 
 * @param {string} inputId ID of input
 * @returns JSX Element
 */
const Index = ({ selectedDate, dataFormat, onChange, datapickerRef, inputId }: Props) => {
  return (
    <input
      id={inputId}
      type='text'
      ref={datapickerRef}
      placeholder={dataFormat ? dataFormat : 'DD/MM/AAAA'}
      value={selectedDate}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    />
  )
}

export default Index

Index.prototype = {
  selectedDate: PropTypes.string,
  onChange: PropTypes.func,
  dataFormat: PropTypes.string
}
