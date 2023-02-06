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
declare const Index: React.FC<Props>;
export default Index;
