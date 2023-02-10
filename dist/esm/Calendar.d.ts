import React, { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';
import { IParamsCalendarHeader } from './Datapicker';
type Props = {
    dataFormat: string;
    customHeader?(params: IParamsCalendarHeader): ReactNode;
    setSelectedDate: Dispatch<SetStateAction<string>>;
    selectedDate: string;
    setIsOpen: (value: boolean) => void;
    isOpen: boolean;
    datapickerRef: RefObject<HTMLInputElement>;
};
export type test = {
    day: string | number;
    month: string | number;
    year: string | number;
    otherMonth: string | number;
};
declare const Index: React.FC<Props>;
export default Index;
