"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Day_1 = tslib_1.__importDefault(require("./Day"));
const prop_types_1 = tslib_1.__importDefault(require("prop-types"));
const Index = ({ calendarData, indexWeek, setDaySelected }) => {
    const start = indexWeek * 7;
    const weekDays = calendarData.slice(start, start + 7);
    return (react_1.default.createElement("div", { className: 'calendar-week' }, weekDays.map((day, index) => {
        return (react_1.default.createElement(Day_1.default, { key: index, value: day.value, year: day.year, month: day.month, otherMonth: day.otherMonth, selected: day.selected, setDaySelected: setDaySelected }));
    })));
};
exports.default = Index;
Index.prototype = {
    calendarData: prop_types_1.default.string.isRequired,
    indexWeek: prop_types_1.default.string.isRequired,
    setDaySelected: prop_types_1.default.func.isRequired,
};
//# sourceMappingURL=Week.js.map