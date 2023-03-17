"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Calendar_1 = tslib_1.__importDefault(require("./Calendar"));
const input_1 = tslib_1.__importDefault(require("./input"));
const prop_types_1 = tslib_1.__importDefault(require("prop-types"));
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
const Datapicker = ({ selectedDate, onChange, customHeader, dataFormat, inputId, monthsList, yearList }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    let datapickerRef = (0, react_1.useRef)(null);
    return (react_1.default.createElement("div", { className: 'datapicker' },
        react_1.default.createElement("div", { className: 'datapicker-input', onClick: () => setIsOpen(true) },
            react_1.default.createElement(input_1.default, { inputId: inputId, selectedDate: selectedDate, onChange: onChange, dataFormat: dataFormat, datapickerRef: datapickerRef }),
            isOpen && react_1.default.createElement(Calendar_1.default, { setIsOpen: () => setIsOpen(false), customHeader: customHeader, selectedDate: selectedDate, onChange: onChange, dataFormat: dataFormat, datapickerRef: datapickerRef, monthsList: monthsList, yearList: yearList }))));
};
exports.default = Datapicker;
Datapicker.prototype = {
    selectedDate: prop_types_1.default.string.isRequired,
    onChange: prop_types_1.default.func.isRequired,
    customHeader: prop_types_1.default.func,
    dataFormat: prop_types_1.default.string,
};
