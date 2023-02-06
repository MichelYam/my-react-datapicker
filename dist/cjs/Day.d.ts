import React from 'react';
type Props = {
    value: string | number;
    year?: string | number;
    month?: string | number;
    selected?: boolean;
    otherMonth: boolean | string;
    setDaySelected: ({}: {}) => void;
};
declare const Index: React.FC<Props>;
export default Index;
