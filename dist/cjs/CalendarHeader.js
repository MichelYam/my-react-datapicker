"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const KeyboardArrowDown_1 = tslib_1.__importDefault(require("@mui/icons-material/KeyboardArrowDown"));
const KeyboardArrowUp_1 = tslib_1.__importDefault(require("@mui/icons-material/KeyboardArrowUp"));
const prop_types_1 = tslib_1.__importDefault(require("prop-types"));
/**
 *
 * @param {number | string} currentMonth the current month
 * @param {number | string} currentYear the current year
 * @param {void} changeMonth update month
 * @param {void} changeYear update year
 * @param {void} prev update display calendar
 * @param {void} next update display calendar
 * @param {ReactNode} customHeader customize your calendar header
 * @returns JSX Element return the header of calendar
 */
const Index = ({ currentMonth, currentYear, prev, next, customHeader, changeMonth, changeYear, monthsList, yearList }) => {
    const month = [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
    ];
    return (react_1.default.createElement("div", { className: 'calendar-header' }, monthsList && yearList ? react_1.default.createElement("div", null,
        react_1.default.createElement("button", { onClick: prev }, "<"),
        react_1.default.createElement("select", { value: monthsList[currentMonth], onChange: ({ target: { value } }) => changeMonth(monthsList.indexOf(value)) }, monthsList.map((option) => (react_1.default.createElement("option", { key: option, value: option }, option)))),
        react_1.default.createElement("select", { value: currentYear, onChange: ({ target: { value } }) => changeYear(value) }, yearList.map((option) => (react_1.default.createElement("option", { key: option, value: option }, option)))),
        react_1.default.createElement("button", { onClick: next }, ">")) :
        customHeader ? (customHeader({ prev, next, currentMonth, currentYear, changeMonth, changeYear })) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", null, `${month[currentMonth]} ${currentYear}`),
            react_1.default.createElement("div", { className: 'calender-direction' },
                react_1.default.createElement(KeyboardArrowUp_1.default, { onClick: prev }),
                react_1.default.createElement(KeyboardArrowDown_1.default, { onClick: next }))))));
};
exports.default = Index;
Index.prototype = {
    currentMonth: prop_types_1.default.string.isRequired,
    currentYear: prop_types_1.default.string.isRequired,
    prev: prop_types_1.default.func.isRequired,
    next: prop_types_1.default.func.isRequired,
    customHeader: prop_types_1.default.func.isRequired,
    changeMonth: prop_types_1.default.func.isRequired,
    changeYear: prop_types_1.default.func.isRequired,
};
