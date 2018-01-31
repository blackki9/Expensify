import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render expense item with data', () => {
    const wrapper = shallow(<ExpenseListItem expense={{...expenses[0]}} />);
    expect(wrapper).toMatchSnapshot();
});