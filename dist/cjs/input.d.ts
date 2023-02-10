import React, { RefObject } from 'react';
type Props = {
    selectedDate: string;
    dataFormat: string;
    setSelectedDate: (value: string | ((prevVar: string) => string)) => void;
    datapickerRef: RefObject<HTMLInputElement>;
};
declare const Index: React.FC<Props>;
export default Index;
