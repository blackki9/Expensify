import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters'
import moment from 'moment';

test('should return set text action object with proper info', () => {
    const action = setTextFilter("test");

    expect(action).toEqual( {
        type: 'SET_TEXT_FILTER',
        text: 'test'
    });
});

test('should return set text action object with default text', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test("should return sort by date object with type", () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: "SORT_BY_DATE"
    });
});

test("should generate proper sort by amount action", () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
})

test("should generate set start date action", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test("should generate set end date action", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});