import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {type: 'REMOVE_EXPENSE', id: expenses[1].id};
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
    const action = {type: 'REMOVE_EXPENSE', id: '-1'};
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        description: 'test',
        note: 'dgs',
        createdAt: 1000
    };
    const action = {type: 'ADD_EXPENSE', expense: expense};

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses, expense ]);
});

test('should edit expense by id', () => {
    const action = {type: "EDIT_EXPENSE", id: expenses[0].id, updates: {
        description: 'New Test'
    }};

    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('New Test');
});

test('should not edit expense if id is wrong', () => {
   const action = {type: "EDIT_EXPENSE", id: "-1", updates: {
        description: 'New Test'
   }};

   const store = expensesReducer(expenses, action);
   expect(store).toEqual(expenses);
});