import { ReactNode, RefObject } from 'react';
import { IParamsCalendarHeader } from './Datapicker';
type Props = {
    dataFormat: string;
    customHeader?(params: IParamsCalendarHeader): ReactNode;
    selectedDate: string;
    onChange: (value: string) => void;
    setIsOpen: (value: boolean) => void;
    datapickerRef: RefObject<HTMLInputElement>;
    monthsList?: (string | number)[];
    yearList?: (string | number)[];
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
 * @param {string} dataFormat format of the date
 * @param {void} setIsOpen update the calendar view
 * @param {RefObject<HTMLInputElement>} datapickerRef
 * @returns JSX Element return calendar
 */
declare const Index: ({ customHeader, onChange, selectedDate, dataFormat, setIsOpen, datapickerRef, monthsList, yearList }: Props) => JSX.Element;
export default Index;
