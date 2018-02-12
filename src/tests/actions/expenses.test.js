import {startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit action object', () => {
    const action = editExpense('123abc', {note: 'New note'});

    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: '123abc',
        updates: {
            note: 'New note'
        }
    });
});

test('should setup add expense action object with provided info', () => {
    // const expenseData = {
    //     description: 'rent',
    //     amount: 15000,
    //     createdAt: 1000,
    //     note: 'Last month rent'
    // }

    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('should add expense to database and store', () => {
    const store = createMockStore({});
    const data = {
        description: "Mouse",
        amount: 3000,
        note: 'this one is better',
        createdAt: 1240104
    }
    store.dispatch(data)
});

test('should add expense with defaults to database and store', () => {

});

// test('should setup add expense action object with default values', () => {
//     const defaultSettings = {
//         description: '',
//         note: '',
//         amount: 0,
//         createdAt: 0
//       }

//     const action = addExpense({});

//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...defaultSettings,
//             id: expect.any(String)
//         }
//     })
// })