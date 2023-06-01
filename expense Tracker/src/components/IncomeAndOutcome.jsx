import Card from "./ui/Card";
import "./IncomeAndOutcome.css";
import { useContext } from "react";
import { Store } from "../context/store";
import MyBalance from "./MyBalance";
const IncomeAndOutcome = () => {
	const ctx = useContext(Store);
	const incomeExpenses = ctx.expenses
		.filter((expense) => expense.price > 0)
		.map((expense) => expense.price);
	const incomeTotal = incomeExpenses.reduce((a, b) => a + b, 0);
	const outcomeExpenses = ctx.expenses
		.filter((expense) => expense.price < 0)
		.map((expense) => expense.price);
	const outcomeTotal = Math.abs(outcomeExpenses.reduce((a, b) => a + b, 0));
	return (
		<>
			<MyBalance incomeTotal={incomeTotal.toFixed(2)} outcomeTotal={outcomeTotal.toFixed(2)} />
			<Card className="balance-wrapper">
				<div className="income">
					<div className="text">InCome</div>
					<div className="income-price">${incomeTotal.toFixed(2)}</div>
				</div>
				<div className="line"></div>
				<div className="outcome">
					<div className="text">OutCome</div>
					<div className="outcome-price">${outcomeTotal.toFixed(2)}</div>
				</div>
			</Card>
		</>
	);
};

export default IncomeAndOutcome;
