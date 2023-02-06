import React from 'react';
type dayProp = {
    value: string | number;
    selected?: boolean;
    otherMonth: boolean | string;
    year?: string | number;
    month?: string | number;
}[];
type Props = {
    calendarData: dayProp;
    indexWeek: number;
    setDaySelected: (value: any) => void;
};
declare const Index: React.FC<Props>;
export default Index;
