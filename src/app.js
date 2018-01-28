import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {Provider} from 'react-redux';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({
    description: "Water bill",
    amount: 10000,
    createdAt: 1000
}));

store.dispatch(addExpense({
    description: "Gas bill",
    amount: 2000,
    createdAt: 2000
}));

store.dispatch(addExpense({
    description: "Gas bill",
    amount: 23000,
    createdAt: 20000
}));

store.dispatch(addExpense({
    description: "Gas bill",
    amount: 200,
    createdAt: 100
}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx =  (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));