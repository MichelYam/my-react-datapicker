import React from 'react';
import PropTypes from 'prop-types';
const Index = ({ selectedDate, dataFormat, onChange, datapickerRef, inputId }) => {
    return (React.createElement("input", { id: inputId, type: 'text', ref: datapickerRef, placeholder: dataFormat ? dataFormat : 'DD/MM/AAAA', value: selectedDate, onChange: (e) => onChange(e.target.value) }));
};
export default Index;
Index.prototype = {
    selectedDate: PropTypes.string,
    onChange: PropTypes.func,
    dataFormat: PropTypes.string
};
