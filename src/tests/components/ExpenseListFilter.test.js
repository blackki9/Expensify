import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setTextFilter={setTextFilter}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
});

test('should render filters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render filters correctly with alt data', () => {
    wrapper.setProps({filters: altFilters});
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    wrapper.find('input').simulate('change', {
        target: {
            value: "New text"
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith("New text");
});

test('should handle text change', () => {
    wrapper.find('select').simulate('change', {
        target: {
            value: "amount"
        }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle text change', () => {
    wrapper.setProps({filters: altFilters});

    wrapper.find('select').simulate('change', {
        target: {
            value: "date"
        }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should handle date change', () => {
    const startDate = moment(0);
    const endDate = moment(0).add(3, 'days');

    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});

    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle focus change', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')("startDate");

    expect(wrapper.state('calendarFocused')).toBe("startDate");
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')("endDate");
    expect(wrapper.state('calendarFocused')).toBe("endDate");

});