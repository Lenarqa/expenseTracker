import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenceData) => {
    const extendsData = {
      ...enteredExpenceData,
      id: Math.random().toString()
    }
    
    console.log(extendsData);
    props.onAddExpense(extendsData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
