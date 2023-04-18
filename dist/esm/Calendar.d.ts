import { ReactNode, RefObject } from 'react';
import { IParamsCalendarHeader } from './Datepicker';
type Props = {
    dateFormat: string;
    customHeader?(params: IParamsCalendarHeader): ReactNode;
    selectedDate: string;
    onChange: (value: string) => void;
    setIsOpen: (value: boolean) => void;
    datepickerRef: RefObject<HTMLInputElement>;
    monthsList?: (string | number)[];
    yearsList?: (string | number)[];
};
export type test = {
    day: string | number;
    month: string | number;
    year: string | number;
    otherMonth: string | number;
};
/**
 *
 * @param {ReactNode} customHeader customize the header of calendar
 * @param {void} onChange update the date
 * @param {string} selectedDate date selected
 * @param {string} dateFormat format of the date
 * @param {void} setIsOpen update the calendar view
 * @param {RefObject<HTMLInputElement>} datepickerRef
 * @returns JSX Element return calendar
 */
declare const Index: ({ customHeader, onChange, selectedDate, dateFormat, setIsOpen, datepickerRef, monthsList, yearsList }: Props) => JSX.Element;
export default Index;
