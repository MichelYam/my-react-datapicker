import React, { RefObject } from 'react';
type Props = {
    selectedDate: string;
    dataFormat: string;
    setSelectedDate: (value: string | ((prevVar: string) => string)) => void;
    datapickerRef: RefObject<HTMLInputElement>;
    inputId?: string;
};
declare const Index: React.FC<Props>;
export default Index;
