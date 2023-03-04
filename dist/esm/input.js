import React from 'react';
import PropTypes from 'prop-types';
/**
 *
 * @param {string} selectedDate the day selected
 * @param {string} dataFormat format of the date
 * @param {function} onChange function will update the day
 * @param {RefObject<HTMLInputElement>} datapickerRef
 * @param {string} inputId ID of input
 * @returns JSX Element
 */
const Index = ({ selectedDate, dataFormat, onChange, datapickerRef, inputId }) => {
    return (React.createElement("input", { id: inputId, type: 'text', ref: datapickerRef, placeholder: dataFormat ? dataFormat : 'DD/MM/AAAA', value: selectedDate, onChange: (e) => onChange(e.target.value) }));
};
export default Index;
Index.prototype = {
    selectedDate: PropTypes.string,
    onChange: PropTypes.func,
    dataFormat: PropTypes.string
};
