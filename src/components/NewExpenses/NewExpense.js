import React, { useState } from "react";
import Expenseform from "./Expenseform";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveDataHandler = (newExpenseData) => {
    const ExpenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.onData(ExpenseData);
    setIsEditing(false);
  };

  const clicked = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={clicked}>
          Add Expense
        </button>
      )}
      {isEditing && (
        <Expenseform onSaveData={saveDataHandler} onCancel={stopEditing} />
      )}
    </div>
  );
};
export default NewExpense;
