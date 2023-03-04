/// <reference types="react" />
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
/**
 *
 * @param {number} indexWeek id of the week
 * @param {Array} calendarData number of day
 * @param {number} setDaySelected function that will update the selected day
 * @returns {JsxElement} return day of week
 */
declare const Index: ({ calendarData, indexWeek, setDaySelected }: Props) => JSX.Element;
export default Index;
