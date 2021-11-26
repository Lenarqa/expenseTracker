import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { title, amound, date } = props;
  
  const month = date.toLocaleString("ru-RU", { month: "long" });
  const day = date.toLocaleString("ru-RU", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amound}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
