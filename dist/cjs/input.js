"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const prop_types_1 = tslib_1.__importDefault(require("prop-types"));
/**
 *
 * @param {string} selectedDate the day selected
 * @param {string} dateFormat format of the date
 * @param {function} onChange function will update the day
 * @param {RefObject<HTMLInputElement>} datepickerRef
 * @param {string} inputId ID of input
 * @returns JSX Element
 */
const Index = ({ selectedDate, dateFormat, onChange, datepickerRef, inputId }) => {
    return (react_1.default.createElement("input", { id: inputId, type: 'text', ref: datepickerRef, placeholder: dateFormat ? dateFormat : 'DD/MM/AAAA', value: selectedDate, onChange: (e) => onChange(e.target.value) }));
};
exports.default = Index;
Index.prototype = {
    selectedDate: prop_types_1.default.string,
    onChange: prop_types_1.default.func,
    dateFormat: prop_types_1.default.string
};
