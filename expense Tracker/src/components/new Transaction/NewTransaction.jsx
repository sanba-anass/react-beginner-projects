import TransactionForm from "./TransactionForm";
import "./NewTransaction.css";
import "../history/History.css";
const NewTransaction = () => {
	return (
		<div>
			<h2 className="history-intro-title">Add New Transation</h2>
			<div className="big-line"></div>
			<TransactionForm />
		</div>
	);
};

export default NewTransaction;
