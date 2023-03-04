import React, { ReactNode } from 'react';
/**
 * This is the description of the interface
 *
 * @type Props
 * @member {string} label is used for whatever reason
 * @field {string} prop is used for other reason
 */
type Props = {
    dataFormat: string;
    selectedDate: string;
    onChange: (value: string) => void;
    customHeader?(params: IParamsCalendarHeader): ReactNode;
    inputId?: string;
};
export interface IParamsCalendarHeader {
    prev(): void;
    next(): void;
    currentYear: string | number;
    currentMonth: string | number;
    changeMonth: (value: number) => void;
    changeYear: (value: number) => void;
}
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
declare const Datapicker: React.FC<Props>;
export default Datapicker;
