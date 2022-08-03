import { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  function saveExpenseHandler(expenseFormData) {
    const expenseData = {
      ...expenseFormData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  }

  function showFormHandler() {
    setShowForm(true);
  }

  function hideFormHandler() {
    setShowForm(false);
  }

  return (
    <div className="new-expense">
      {showForm ? (
        <NewExpenseForm onSaveExpense={saveExpenseHandler} onCancel={hideFormHandler} />
      ) : (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
