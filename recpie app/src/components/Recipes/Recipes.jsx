/* eslint-disable react/prop-types */
import "./Recpies.css";
import Recpie from "../Recpie/Recpie";
import { useContext } from "react";
import { RecpieContext } from "../../context/RecpieContext";
const Recipes = ({ isLoading, error }) => {
	const ctx = useContext(RecpieContext);

	let content = (
		<h2 className="text-center">no recipies added! start by adding one!</h2>
	);
	if (error) {
		content = (
			<h2 className="text-center">{error}</h2>
		);
	}

	if (ctx.recpies.length !== 0) {
		content = (
			<ul className="recpies">
				{ctx.recpies.map((recpie) => (
					<Recpie
						key={recpie.id}
						name={recpie.name}
						imageUrl={recpie.imageUrl}
						cookingTime={recpie.cookingTime}
						id={recpie.id}
						ingredients={recpie.ingredients}
						instructions={recpie.instructions}
						description={recpie.description}
						isSavedItem={false}
						isSaved={recpie.isSaved}
					/>
				))}
			</ul>
		);
	}
	if (isLoading) {
		content = <h2 className="text-center">Loading...</h2>;
	}

	return (
		<>
			<h1>Recpies</h1>
			<div>{content}</div>
		</>
	);
};

export default Recipes;
