/* eslint-disable react/prop-types */
import "./MyBalance.css";
const MyBalance = ({ incomeTotal, outcomeTotal }) => {
	return (
		<>
			<h2 className="balance-title">your balance</h2>
			<div className="balance-price">
				${(incomeTotal - outcomeTotal).toFixed(2)}
			</div>
		</>
	);
};

export default MyBalance;
