import React from 'react';
type Props = {
    selectedDate: string;
    dataFormat: string;
    setSelectedDate: (value: string | ((prevVar: string) => string)) => void;
};
declare const Index: React.FC<Props>;
export default Index;
