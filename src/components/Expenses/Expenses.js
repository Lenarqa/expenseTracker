import react, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpepsesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const filterChangeHandler = (enteredYear) => {
    setFilterYear(enteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.filter((expense=>{ return expense.date.getFullYear() == filterYear})).map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amound={expense.amound}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
