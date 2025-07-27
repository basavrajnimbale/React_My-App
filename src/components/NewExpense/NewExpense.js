import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"; // Assuming you have a CSS file for styling

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
}

export default NewExpense;