import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { IParamsCalendarHeader } from './Datapicker'
import PropTypes from 'prop-types'
// import './stylesheets/datapicker.css'

type Props = {
  currentMonth: number | string
  currentYear: number | string
  changeMonth: (value: number) => void
  changeYear: (value: number) => void
  prev: () => void
  next: () => void
  customHeader?(params: IParamsCalendarHeader): React.ReactNode
}

const Index: React.FC<Props> = ({ currentMonth, currentYear, prev, next, customHeader, changeMonth, changeYear }) => {
  const month = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ]

  return (
    <div className='calendar-header'>
      {customHeader ? (
        customHeader({ prev, next, currentMonth, currentYear, changeMonth, changeYear })
      ) : (
        <>
          <div>{`${month[currentMonth as unknown as number]} ${currentYear}`}</div>
          <div className='calender-direction'>
            <KeyboardArrowUpIcon onClick={prev} />
            <KeyboardArrowDownIcon onClick={next} />
          </div>
        </>
      )}
    </div>
  )
}

export default Index

Index.prototype = {
  currentMonth: PropTypes.string.isRequired,
  currentYear: PropTypes.string.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  customHeader: PropTypes.func.isRequired,
  changeMonth: PropTypes.func.isRequired,
  changeYear: PropTypes.func.isRequired,
}
