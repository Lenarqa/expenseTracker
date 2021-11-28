import react, { useState } from "react";
import ExpesesList from "./ExpensesList";
import ExpensesFilter from "./ExpepsesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const filterChangeHandler = (enteredYear) => {
    setFilterYear(enteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpesesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
