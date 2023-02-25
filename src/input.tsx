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
const Index: React.FC<Props> = ({ selectedDate, dataFormat, onChange, datapickerRef, inputId }) => {
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
