import React from 'react';

const Invoice = ({ expenses }) => {
  const calculateTotal = () => {
    // Make sure to parse the amount as a float for correct calculation
    return expenses.reduce((total, exp) => total + parseFloat(exp.amount || 0), 0).toFixed(2);
  };

  return (
    <div>
      <h2>Invoices</h2>
      <h3>Invoice Summary</h3>
      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>
            {exp.name}: ${exp.amount}
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3> {/* Display the total */}
    </div>
  );
};

export default Invoice;
