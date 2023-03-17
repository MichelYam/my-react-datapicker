import { ReactNode } from 'react';
type Props = {
    dataFormat: string;
    selectedDate: string;
    onChange: (value: string) => void;
    customHeader?(params: IParamsCalendarHeader): ReactNode;
    inputId?: string;
    monthsList?: (string | number)[];
    yearList?: (string | number)[];
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
declare const Datapicker: ({ selectedDate, onChange, customHeader, dataFormat, inputId, monthsList, yearList }: Props) => JSX.Element;
export default Datapicker;
