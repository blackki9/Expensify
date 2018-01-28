import React from 'react';
import {removeExpense} from '../actions/expenses';
import {connect} from 'react-redux';

const ExpenseListItem = ({id, dispatch, description, amount, createdAt}) => (
    <div>
     {description} {amount} {createdAt}
     <button onClick={() => {
        dispatch(removeExpense({id}));
     }}>Remove</button>
    </div>
);


export default connect()(ExpenseListItem);