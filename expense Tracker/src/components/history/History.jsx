import HistoryItems from "./HistoryItems";
import "./History.css";
const History = () => {
	
	return (
		<div>
			<h2 className="history-intro-title">History</h2>
        <div className="big-line"></div>
			<HistoryItems />
		</div>
	);
};

export default History;
