import React from 'react';
import numeral from 'numeral';
import {connect} from 'react-redux';

import selectExpenses from '../selectors/expenses';
import totalSumOfExpenses from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
    const expenseWord = (props.count === 1) ? 'expense' : 'expenses';
    return (
        <div>
           <h1> Viewing {props.count} {expenseWord} totalling {numeral(props.total).format("$0,0.00")} </h1>
        </div>
    );
}

const mapStateToProps = (state) => {
    const visibleExpense = selectExpenses(state.expenses, state.filters);
    return {
        count: visibleExpense.length,
        total: totalSumOfExpenses(visibleExpense)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);