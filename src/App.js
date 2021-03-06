import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react/cjs/react.development";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "My expense",
    amound: 100,
    date: new Date(2021, 2, 23),
  },
  {
    id: "e2",
    title: "My expense 2",
    amound: 200,
    date: new Date(2021, 3, 23),
  },
  {
    id: "e3",
    title: "My expense 3",
    amound: 300,
    date: new Date(2021, 4, 23),
  },
  {
    id: "e4",
    title: "My expense 4",
    amound: 400,
    date: new Date(2021, 5, 23),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (enteredExpence) => {
    setExpenses((prevState) => {
      return [enteredExpence, ...prevState];
    });
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
