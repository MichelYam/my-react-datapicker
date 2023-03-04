/// <reference types="react" />
type Props = {
    value: string | number;
    year?: string | number;
    month?: string | number;
    selected?: boolean;
    otherMonth: boolean | string;
    setDaySelected: ({}: {}) => void;
};
/**
 *
 * @param {number} value id of the week
 * @param {boolean} selected check is the day is selected
 * @param {string} otherMonth check if is previous or next month
 * @param {string} month current month
 * @param {string} year current year
 * @param {function} setDaySelected set day selected
 * @returns {JsxElement} return day
 */
declare const Index: ({ value, selected, otherMonth, setDaySelected, year, month }: Props) => JSX.Element;
export default Index;
