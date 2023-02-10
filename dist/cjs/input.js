"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const prop_types_1 = tslib_1.__importDefault(require("prop-types"));
const Index = ({ selectedDate, dataFormat, setSelectedDate, datapickerRef }) => {
    return (react_1.default.createElement("input", { id: 'data', type: 'text', ref: datapickerRef, placeholder: dataFormat ? dataFormat : 'DD/MM/AAAA', value: selectedDate, onChange: (e) => setSelectedDate(e.target.value) }));
};
exports.default = Index;
Index.prototype = {
    selectedDate: prop_types_1.default.string,
    setSelectedDate: prop_types_1.default.func,
    dataFormat: prop_types_1.default.string
};
//# sourceMappingURL=input.js.map