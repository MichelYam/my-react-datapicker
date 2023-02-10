import React from 'react';
import PropTypes from 'prop-types';
const Index = ({ selectedDate, dataFormat, setSelectedDate, datapickerRef }) => {
    return (React.createElement("input", { id: 'data', type: 'text', ref: datapickerRef, placeholder: dataFormat ? dataFormat : 'DD/MM/AAAA', value: selectedDate, onChange: (e) => setSelectedDate(e.target.value) }));
};
export default Index;
Index.prototype = {
    selectedDate: PropTypes.string,
    setSelectedDate: PropTypes.func,
    dataFormat: PropTypes.string
};
//# sourceMappingURL=input.js.map