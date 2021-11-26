import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
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

  return (
    <div>
      <h2>Let's learn React!</h2>
      <ExpenseItem
        title={expense[0].title}
        amound={expense[0].amound}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amound={expense[1].amound}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        amound={expense[2].amound}
        date={expense[2].date}
      />
      <ExpenseItem
        title={expense[3].title}
        amound={expense[3].amound}
        date={expense[3].date}
      />
    </div>
  );
}

export default App;
