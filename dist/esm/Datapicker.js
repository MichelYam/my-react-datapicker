import React, { useRef, useState } from 'react';
import Calendar from './Calendar';
import Input from './input';
import PropTypes from 'prop-types';
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
const Datapicker = ({ selectedDate, onChange, customHeader, dataFormat, inputId, monthsList, yearsList }) => {
    const [isOpen, setIsOpen] = useState(false);
    let datapickerRef = useRef(null);
    return (React.createElement("div", { className: 'datapicker' },
        React.createElement("div", { className: 'datapicker-input', onClick: () => setIsOpen(true) },
            React.createElement(Input, { inputId: inputId, selectedDate: selectedDate, onChange: onChange, dataFormat: dataFormat, datapickerRef: datapickerRef }),
            isOpen && React.createElement(Calendar, { setIsOpen: () => setIsOpen(false), customHeader: customHeader, selectedDate: selectedDate, onChange: onChange, dataFormat: dataFormat, datapickerRef: datapickerRef, monthsList: monthsList, yearsList: yearsList }))));
};
export default Datapicker;
Datapicker.prototype = {
    selectedDate: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    customHeader: PropTypes.func,
    dataFormat: PropTypes.string,
    monthsList: PropTypes.array,
    yearList: PropTypes.array,
};
