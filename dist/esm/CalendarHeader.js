import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PropTypes from 'prop-types';
const Index = ({ currentMonth, currentYear, prev, next, customHeader, changeMonth, changeYear }) => {
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
    return (React.createElement("div", { className: 'calendar-header' }, customHeader ? (customHeader({ prev, next, currentMonth, currentYear, changeMonth, changeYear })) : (React.createElement(React.Fragment, null,
        React.createElement("div", null, `${month[currentMonth]} ${currentYear}`),
        React.createElement("div", { className: 'calender-direction' },
            React.createElement(KeyboardArrowUpIcon, { onClick: prev }),
            React.createElement(KeyboardArrowDownIcon, { onClick: next }))))));
};
export default Index;
Index.prototype = {
    currentMonth: PropTypes.string.isRequired,
    currentYear: PropTypes.string.isRequired,
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    customHeader: PropTypes.func.isRequired,
    changeMonth: PropTypes.func.isRequired,
    changeYear: PropTypes.func.isRequired,
};
//# sourceMappingURL=CalendarHeader.js.map