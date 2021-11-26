import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = props => {
  const { expense } = props;

  return (
    <Card className="expenses">
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
    </Card>
  );
}

export default Expenses;
