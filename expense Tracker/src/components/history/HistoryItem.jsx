/* eslint-disable react/prop-types */
import "./History.css";
import Card from "../ui/Card";
import { useContext } from "react";
import { Store } from "../../context/store";
const HistoryItem = ({ title, price, isIncome, id, count }) => {
	const greenOrRed = isIncome ? "border-green" : "border-red";
	const ctx = useContext(Store);
	const findItem = ctx.expenses.find((expense) => expense.id === id);
	const deleteItemHandler = () => {
		if (findItem) {
			const newExpenses = [...ctx.expenses];
			if (findItem.count === 1) {
				const filtred = ctx.expenses.filter(
					(expense) => expense.id !== findItem.id
				);

				ctx.setExpenses(filtred);

				localStorage.setItem("expenses", JSON.stringify(filtred));
				return;
			}

			findItem.count = findItem.count - 1;
			console.log(findItem.price);

			findItem.price -= price / count;

			ctx.setExpenses(newExpenses);
		}
		localStorage.setItem("expenses", JSON.stringify(ctx.expenses));
	};

	return (
		<Card onClick={deleteItemHandler} className={`history-item ${greenOrRed}`}>
			<div className="history-item-title">{title}</div>
			<div>
				{isIncome && "+"}
				{price}$
			</div>
			<span style={{ textAlign: "center" }}>x{count}</span>
		</Card>
	);
};

export default HistoryItem;
