import React, { useState } from 'react';
import logo from './logo.svg';

import { Datapicker } from 'my-react-datapicker'
import 'my-react-datapicker/dist/stylesheets/datapicker.css'
import './App.css';

function App() {
  const [startDate, setStartDate] = useState("")
  const [start, setStart] = useState("")

  const getYear = (date: Date) => {
    return date.getFullYear()
  }

  const range = (start: number, end: number) => {
    const year = [];
    for (let i = start; i <= end; i++) {
      year.push(i);
    }
    return year;
  }
  const years = range(1990, getYear(new Date()) + 10);
  const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

  return (
    <div className="App">
      <Datapicker dataFormat='DD/MM/YYYY' selectedDate={startDate} setSelectedDate={setStartDate}
        customHeader={({
          currentMonth,
          currentYear,
          changeMonth,
          changeYear,
          prev,
          next,
        }) => (
          <div>
            <button onClick={prev}>
              {"<"}
            </button>
            <select
              value={months[currentMonth as unknown as number]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              value={currentYear}
              onChange={({ target: { value } }: any) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button onClick={next} >
              {">"}
            </button>
          </div>
        )}
      />
      <Datapicker dataFormat='DD/MM/YYYY' selectedDate={start} setSelectedDate={setStart}
        customHeader={({
          currentMonth,
          currentYear,
          changeMonth,
          changeYear,
          prev,
          next,
        }) => (
          <div>
            <button onClick={prev}>
              {"<"}
            </button>
            <select
              value={months[currentMonth as unknown as number]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              value={currentYear}
              onChange={({ target: { value } }: any) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button onClick={next} >
              {">"}
            </button>
          </div>
        )}
      />
    </div>
  );
}

export default App;
