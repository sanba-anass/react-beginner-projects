/* eslint-disable react/prop-types */
import "./Card.css";
const Card = ({ children, className, onClick }) => {
	const classes = "card " + className;
	return (
		<div onClick={onClick} className={classes}>
			{children}
		</div>
	);
};

export default Card;
