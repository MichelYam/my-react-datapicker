"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const prop_types_1 = tslib_1.__importDefault(require("prop-types"));
const Index = ({ value, selected, otherMonth, setDaySelected, year, month }) => {
    const handleOnClick = (e) => {
        const target = e.currentTarget.dataset.day;
        const date = parseInt(target, 10) < 10 ? '0' + target : target;
        setDaySelected({
            day: date,
            otherMonth: e.currentTarget.dataset.month,
            month: month,
            year: year,
        });
    };
    const isMonth = otherMonth === false ? '' : otherMonth === 'previous-month' ? 'previous-month' : 'next-month';
    return (react_1.default.createElement("span", { "data-day": value, "data-month": isMonth, className: `day ${isMonth}${selected ? 'selected' : ''}`, onClick: handleOnClick }, value));
};
exports.default = Index;
Index.prototype = {
    value: prop_types_1.default.string,
    selected: prop_types_1.default.string,
    otherMonth: prop_types_1.default.string,
    month: prop_types_1.default.string,
    setDaySelected: prop_types_1.default.func,
    year: prop_types_1.default.string,
};
//# sourceMappingURL=Day.js.map