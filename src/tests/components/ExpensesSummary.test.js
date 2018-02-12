import {ExpensesSummary} from '../../components/ExpensesSummary';
import {shallow} from 'enzyme';
import React from 'react';

test('should render summary with 0', () => {
    const wrapper = shallow(<ExpensesSummary />);
    expect(wrapper).toMatchSnapshot();
});

test('should render with one expense', () => {
    const wrapper = shallow(<ExpensesSummary count={1} total={1000412.3} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary count={10} total={9400.3} />);
    expect(wrapper).toMatchSnapshot();
})