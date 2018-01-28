import React from 'react';

const ExpenseListItem = ({description, amount, createdAt}) => (
    <div>
     {description} {amount} {createdAt}
    </div>
);


export default ExpenseListItem;