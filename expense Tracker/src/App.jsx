import IncomeAndOutcome from "./components/IncomeAndoutcome";
import History from "./components/history/History";
import NewTransaction from "./components/new Transaction/NewTransaction";
import { Store } from "./context/store";
import { useState } from "react";
function App() {
	const [expenses, setExpenses] = useState([]);
	const [enteredAmount, setEnteredAmount] = useState("");
	return (
		<Store.Provider
			value={{
				expenses,
				setExpenses,
				enteredAmount,
				setEnteredAmount,
			}}
		>
			<div className="App">
				<h3 className="title">Expense Tracker</h3>
				<IncomeAndOutcome />
				<History />
				<NewTransaction />
			</div>
		</Store.Provider>
	);
}

export default App;
