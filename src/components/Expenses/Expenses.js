import { useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022');

    function filterChangeHandler(yearValue) {
        setFilteredYear(yearValue);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear() == filteredYear
    })

    return <Card className='expenses'>
        <ExpensesFilter selectedYear={filteredYear} onYearChange={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
    </Card>
}

export default Expenses;