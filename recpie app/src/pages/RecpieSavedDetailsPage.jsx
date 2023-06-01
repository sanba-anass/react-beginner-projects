import { useContext } from "react";
import { RecpieContext } from "../context/RecpieContext";
import { Link, useParams } from "react-router-dom";
import "./RecpieDetailPage.css";
const RecpieSavedDetailsPage = () => {
	const ctx = useContext(RecpieContext);
	const { recpieId } = useParams();

	const clickedRecpie = ctx.savedRecpies.find(
		(recpie) => recpie.id === recpieId
	);
	if (!clickedRecpie) {
		return <h1 className="container">not found 404</h1>;
	}
	return (
		<div className="container">
			<div className="flex">
				<Link to={-1}>back</Link>
				<h2>{clickedRecpie.name}</h2>
			</div>
			<img className="img" src={clickedRecpie.imageUrl} />
			<p className="desc">{clickedRecpie.description}</p>
			<h4>ingredients</h4>
			<p className="ingredients">{clickedRecpie.ingredients}</p>
			<h4>instructions</h4>
			<p className="ingredients">{clickedRecpie.instructions}</p>
		</div>
	);
};
export default RecpieSavedDetailsPage;
