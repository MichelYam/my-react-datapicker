import React from 'react';
import Day from './Day';
import PropTypes from 'prop-types';
/**
 *
 * @param {number} indexWeek id of the week
 * @param {Array} calendarData number of day
 * @param {number} setDaySelected function that will update the selected day
 * @returns {JsxElement} return day of week
 */
const Index = ({ calendarData, indexWeek, setDaySelected }) => {
    const start = indexWeek * 7;
    const weekDays = calendarData.slice(start, start + 7);
    return (React.createElement("div", { className: 'calendar-week' }, weekDays.map((day, index) => {
        return (React.createElement(Day, { key: index, value: day.value, year: day.year, month: day.month, otherMonth: day.otherMonth, selected: day.selected, setDaySelected: setDaySelected }));
    })));
};
export default Index;
Index.prototype = {
    calendarData: PropTypes.string.isRequired,
    indexWeek: PropTypes.string.isRequired,
    setDaySelected: PropTypes.func.isRequired,
};
