import React, { Dispatch, ReactNode, SetStateAction } from 'react';
type Props = {
    dataFormat: string;
    selectedDate: string;
    setSelectedDate: Dispatch<SetStateAction<string>>;
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
declare const Datapicker: React.FC<Props>;
export default Datapicker;
