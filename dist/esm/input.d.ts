import { RefObject } from 'react';
type Props = {
    selectedDate: string;
    dateFormat: string;
    onChange: (value: string) => void;
    datepickerRef: RefObject<HTMLInputElement>;
    inputId?: string;
};
/**
 *
 * @param {string} selectedDate the day selected
 * @param {string} dateFormat format of the date
 * @param {function} onChange function will update the day
 * @param {RefObject<HTMLInputElement>} datepickerRef
 * @param {string} inputId ID of input
 * @returns JSX Element
 */
declare const Index: ({ selectedDate, dateFormat, onChange, datepickerRef, inputId }: Props) => JSX.Element;
export default Index;
