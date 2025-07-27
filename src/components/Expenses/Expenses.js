import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card" // Assuming you have a Card component for styling

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.expenses.map((expense) => {
                return (
                    <ExpenseItem
                        id={expense.id}
                        title={expense.title}
                        date={expense.date}
                        price={expense.price}
                    />
                )

            })}
        </Card>
    )
}

export default Expenses;