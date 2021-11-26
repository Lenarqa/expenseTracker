import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const { title, amound, date } = props;

  return (
    <div className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amound}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
