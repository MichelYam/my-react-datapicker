import React from 'react';
import { IParamsCalendarHeader } from './Datapicker';
type Props = {
    currentMonth: number | string;
    currentYear: number | string;
    changeMonth: (value: number) => void;
    changeYear: (value: number) => void;
    prev: () => void;
    next: () => void;
    customHeader?(params: IParamsCalendarHeader): React.ReactNode;
};
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
declare const Index: ({ currentMonth, currentYear, prev, next, customHeader, changeMonth, changeYear }: Props) => JSX.Element;
export default Index;
