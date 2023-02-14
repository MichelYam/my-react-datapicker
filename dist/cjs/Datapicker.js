"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Calendar_1 = tslib_1.__importDefault(require("./Calendar"));
const input_1 = tslib_1.__importDefault(require("./input"));
const prop_types_1 = tslib_1.__importDefault(require("prop-types"));
const Datapicker = ({ selectedDate, setSelectedDate, customHeader, dataFormat }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    let datapickerRef = (0, react_1.useRef)(null);
    return (react_1.default.createElement("div", { className: 'datapicker' },
        react_1.default.createElement("div", { className: 'datapicker-input', onClick: () => setIsOpen(true) },
            react_1.default.createElement(input_1.default, { selectedDate: selectedDate, setSelectedDate: setSelectedDate, dataFormat: dataFormat, datapickerRef: datapickerRef }),
            isOpen && react_1.default.createElement(Calendar_1.default, { isOpen: isOpen, setIsOpen: () => setIsOpen(false), customHeader: customHeader, selectedDate: selectedDate, setSelectedDate: setSelectedDate, dataFormat: dataFormat, datapickerRef: datapickerRef }))));
};
exports.default = Datapicker;
Datapicker.prototype = {
    selectedDate: prop_types_1.default.string.isRequired,
    setSelectedDate: prop_types_1.default.func.isRequired,
    customHeader: prop_types_1.default.func,
    dataFormat: prop_types_1.default.string,
};
