import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 when expenses are empty', () => {
    const total = getExpensesTotal([]);
    expect(total).toBe(0);
});

test('should return proper value for one expense', () => {
    const total = getExpensesTotal([expenses[1]]);

    expect(total).toBe(109500);
});

test('should return proper value for multiple expenses', () => {
    const total = getExpensesTotal(expenses);

    expect(total).toBe(114195);
});