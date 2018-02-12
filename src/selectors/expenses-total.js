
export default (expenses) => {

    if (!expenses || expenses.length === 0) {
        return 0;
    }

    const amounts = expenses.map( (expense) => {
        return (expense.amount) ? expense.amount : 0;
    });

    const sum = amounts.reduce((totalSum, currentAmount) => {
        return totalSum + currentAmount;
    });

    return sum;
}