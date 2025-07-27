import "./ExpenseDate.css";

const months = [
    "January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"
];

function ExpenseDate(props) {

    const monthName = months[props.date.getMonth()]; // Use monthName to avoid conflict
    const year = props.date.getFullYear();
    const date = props.date.getDate();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{monthName}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{date}</div>  
        </div>
    )
}

export default ExpenseDate;