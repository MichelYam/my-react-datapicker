"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const prop_types_1 = tslib_1.__importDefault(require("prop-types"));
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
    return (react_1.default.createElement("input", { id: inputId, type: 'text', ref: datapickerRef, placeholder: dataFormat ? dataFormat : 'DD/MM/AAAA', value: selectedDate, onChange: (e) => onChange(e.target.value) }));
};
exports.default = Index;
Index.prototype = {
    selectedDate: prop_types_1.default.string,
    onChange: prop_types_1.default.func,
    dataFormat: prop_types_1.default.string
};
