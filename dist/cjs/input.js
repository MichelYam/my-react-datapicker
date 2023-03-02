"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const prop_types_1 = tslib_1.__importDefault(require("prop-types"));
const Index = ({ selectedDate, dataFormat, onChange, datapickerRef, inputId }) => {
    return (react_1.default.createElement("input", { id: inputId, type: 'text', ref: datapickerRef, placeholder: dataFormat ? dataFormat : 'DD/MM/AAAA', value: selectedDate, onChange: (e) => onChange(e.target.value) }));
};
exports.default = Index;
Index.prototype = {
    selectedDate: prop_types_1.default.string,
    onChange: prop_types_1.default.func,
    dataFormat: prop_types_1.default.string
};
