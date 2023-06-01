import { useEffect } from "react";
import { useContext } from "react";
import { Store } from "../../context/store";
import HistoryItem from "./HistoryItem";
const HistoryItems = () => {
	const ctx = useContext(Store);

	useEffect(() => {
	
		const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
		if (storedExpenses) {
			ctx.setExpenses(storedExpenses);
		}
	}, []);	
	return (
		<div>
			<ul>
				{ctx.expenses.length === 0 ? (
					<p
						style={{
							textAlign: "center",
							marginBlock: "4rem",
							fontWeight: "600",
						}}
					>
						no expenses where added!
					</p>
				) : (
					ctx.expenses.map((item) => (
						<HistoryItem
							count={item.count}
							key={item.id}
							title={item.title}
							price={item.price}
							isIncome={item.isIncome}
							id={item.id}
						/>
					))
				)}
			</ul>
		</div>
	);
};

export default HistoryItems;
