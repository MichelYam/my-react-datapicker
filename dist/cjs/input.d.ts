import { RefObject } from 'react';
type Props = {
    selectedDate: string;
    dataFormat: string;
    onChange: (value: string) => void;
    datapickerRef: RefObject<HTMLInputElement>;
    inputId?: string;
};
/**
 *
 * @param {string} selectedDate the day selected
 * @param {string} dataFormat format of the date
 * @param {function} onChange function will update the day
 * @param {RefObject<HTMLInputElement>} datapickerRef
 * @param {string} inputId ID of input
 * @returns JSX Element
 */
declare const Index: ({ selectedDate, dataFormat, onChange, datapickerRef, inputId }: Props) => JSX.Element;
export default Index;
