import { useState } from 'react';
import './NewExpenseForm.css';

function NewExpenseForm(props) {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    function saveExpense(event) {
        event.preventDefault();
        const formData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        };

        props.onSaveExpense(formData);

        setTitle('');
        setAmount('');
        setDate('');
    }

    function changeTitleHandler(event) {
        setTitle(event.target.value);
    }

    function changeAmountHandler(event) {
        setAmount(event.target.value);
    }

    function changeDateHandler(event) {
        setDate(event.target.value);
    }

    return <form onSubmit={saveExpense}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={title} onChange={changeTitleHandler} required/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={amount} min='0.01' step='0.01' onChange={changeAmountHandler} required/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={date} onChange={changeDateHandler} required/>
            </div>
        </div>
        <div className='new-expense__actions'>
            
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
            <button onClick={props.onCancel}>Cancel</button>
        </div>
    </form>
}

export default NewExpenseForm;
