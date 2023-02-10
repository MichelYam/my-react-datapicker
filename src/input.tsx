import React, { RefObject } from 'react'
import PropTypes from 'prop-types'
// import './stylesheets/datapicker.css'

type Props = {
  selectedDate: string
  dataFormat: string
  setSelectedDate: (value: string | ((prevVar: string) => string)) => void
  datapickerRef: RefObject<HTMLInputElement>
}
const Index: React.FC<Props> = ({ selectedDate, dataFormat, setSelectedDate, datapickerRef }) => {
  return (
    <input
      id='data'
      type='text'
      ref={datapickerRef}
      placeholder={dataFormat ? dataFormat : 'DD/MM/AAAA'}
      value={selectedDate}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedDate(e.target.value)}
    />
  )
}

export default Index

Index.prototype = {
  selectedDate: PropTypes.string,
  setSelectedDate: PropTypes.func,
  dataFormat: PropTypes.string
}
