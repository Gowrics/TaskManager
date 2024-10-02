import React, { useState } from 'react';

const Expenses = ({ addExpense }) => {
  const [expense, setExpense] = useState({ name: '', amount: '' });
  const [expensesList, setExpensesList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleAddExpense = () => {
    if (expense.name && expense.amount) {
      setExpensesList([...expensesList, expense]);
      addExpense(expense); // Add the expense to the main state
      setExpense({ name: '', amount: '' }); // Reset the input fields
    }
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = expensesList.filter((_, i) => i !== index);
    setExpensesList(updatedExpenses);
  };

  return (
    <div>
      <h2>Expenses</h2>
      <input
        type="text"
        name="name"
        placeholder="Expense Name"
        value={expense.name}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={expense.amount}
        onChange={handleInputChange}
      />
      <button onClick={handleAddExpense}>Add Expense</button>

      <ul>
        {expensesList.map((exp, index) => (
          <li key={index}>
            {exp.name}: ${exp.amount}
            <button onClick={() => handleDeleteExpense(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
