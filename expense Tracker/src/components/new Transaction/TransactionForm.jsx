import { useContext } from "react";
import { useState } from "react";
import { Store } from "../../context/store";

const TransactionForm = () => {
	const ctx = useContext(Store);
	const [enteredTitle, setEnteredTitle] = useState("");
	const onTitleChangedHandler = (event) => {
		setEnteredTitle(event.target.value);
	};
	const AddTransationHandler = async (event) => {
		event.preventDefault();
		ctx.setEnteredAmount("");
		setEnteredTitle("");
		localStorage.setItem("expenses", JSON.stringify(ctx.expenses));

		if (enteredTitle.length === 0) {
			alert("title can't be empty");
			return;
		}
		if (enteredTitle.trim().length < 3) {
			alert("enter a descriptive title");
			return;
		}
		if (ctx.enteredAmount.trim().length === 0) {
			alert("amount can't be empty");
			return;
		}
		if (+ctx.enteredAmount === 0) {
			alert("amount can't be 0");
			return;
		}
		localStorage.setItem("expenses", JSON.stringify(ctx.expenses));
		const newTransation = {
			title: enteredTitle.trim(),
			price: +ctx.enteredAmount.trim(),
			isIncome: +ctx.enteredAmount.trim() > 0,
			id: Math.random() * 100_000,
			count: 1,
		};
		localStorage.setItem("expenses", JSON.stringify(ctx.expenses));
		const findItem = ctx.expenses.find(
			(expense) =>
				expense.title.trim().toLowerCase() ===
				newTransation.title.trim().toLowerCase()
		);

		localStorage.setItem("expenses", JSON.stringify(ctx.expenses));

		if (findItem) {
			if (newTransation.price !== findItem.price / findItem.count) {
				alert(
					`this item is on your list but the price is wrong it should be ${(
						findItem.price / findItem.count
					).toFixed(2)}$ use diffrent name or change price to the correct one`
				);
				return;
			}

			findItem.count += 1;
			findItem.price += +newTransation.price;
			const newExpenses = [...ctx.expenses];
			ctx.setExpenses(newExpenses);
			localStorage.setItem("expenses", JSON.stringify(ctx.expenses));
			console.log("already in");
		} else {
			ctx.setExpenses((prevExpenses) => [...prevExpenses, newTransation]);
			localStorage.setItem("expenses", JSON.stringify(ctx.expenses));
		}

		localStorage.setItem("expenses", JSON.stringify(ctx.expenses));
	};
	const onAmountChangedHandler = (event) => {
		ctx.setEnteredAmount(event.target.value);
	};

	return (
		<form onSubmit={AddTransationHandler} className="form">
			<label htmlFor="transaction-title">Title</label>
			<input
				value={enteredTitle}
				placeholder="Enter title..."
				type="text"
				name="transaction-title"
				id=""
				onChange={onTitleChangedHandler}
			/>
			<label htmlFor="transaction-title">
				Amount <br />
				(negative - outcome, positive - income)
			</label>
			<input
				value={ctx.enteredAmount}
				placeholder="Enter amount..."
				type="number"
				name="transaction-amount"
				id=""
				onChange={onAmountChangedHandler}
			/>
			<button>Add Transaction</button>
		</form>
	);
};

export default TransactionForm;
