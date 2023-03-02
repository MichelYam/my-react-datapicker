import React, { useRef, useState } from 'react';
import Calendar from './Calendar';
import Input from './input';
import PropTypes from 'prop-types';
const Datapicker = ({ selectedDate, onChange, customHeader, dataFormat, inputId }) => {
    const [isOpen, setIsOpen] = useState(false);
    let datapickerRef = useRef(null);
    return (React.createElement("div", { className: 'datapicker' },
        React.createElement("div", { className: 'datapicker-input', onClick: () => setIsOpen(true) },
            React.createElement(Input, { inputId: inputId, selectedDate: selectedDate, onChange: onChange, dataFormat: dataFormat, datapickerRef: datapickerRef }),
            isOpen && React.createElement(Calendar, { isOpen: isOpen, setIsOpen: () => setIsOpen(false), customHeader: customHeader, selectedDate: selectedDate, onChange: onChange, dataFormat: dataFormat, datapickerRef: datapickerRef }))));
};
export default Datapicker;
Datapicker.prototype = {
    selectedDate: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    customHeader: PropTypes.func,
    dataFormat: PropTypes.string,
};
