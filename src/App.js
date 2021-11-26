import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react/cjs/react.development";

const App = () => {
  const expense = [
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

  const [expenses, setExpenses] = useState(expense);

  const addExpenseHandler = (enteredExpence) => {
    setExpenses({...expense, enteredExpence});
    console.log(expenses);
  }

  return (
    <div>
      <h2>Let's learn React!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expense={expense}/>
    </div>
  );
}

export default App;
