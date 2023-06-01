import { useContext, useEffect, useState } from "react";
import { RecpieContext } from "../../context/RecpieContext";
import Recpie from "../Recpie/Recpie";
const SavedRecpies = () => {
	const ctx = useContext(RecpieContext);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const loadedData = [];
		setIsLoading(true);
		fetch("https://dummy-2c596-default-rtdb.firebaseio.com/saved.json")
			.then((res) => {
				if (res.status === 404) {
					setError("could not fetch data from the server");
					return;
				}
				return res.json();
			})
			.then((data) => {
				for (const key in data) {
					const newRecipe = {
						id: key,
						cookingTime: data[key].cookingTime,
						description: data[key].description,
						imageUrl: data[key].imageUrl,
						ingredients: data[key].ingredients,
						instructions: data[key].instructions,
						name: data[key].name,
					};
					loadedData.push(newRecipe);
				}
				ctx.setSavedRecpies(loadedData);
				setIsLoading(false);
			});
	}, []);
	if (error) {
		return <h2 className="text-center">{error}</h2>;
	}
	if (isLoading) {
		return <h2 className="text-center">Loading...</h2>;
	}
	if (ctx.savedRecpies.length !== 0) {
		return (
			<ul className="recpies">
				{ctx.savedRecpies.map((recpie) => (
					<Recpie
						key={recpie.id}
						name={recpie.name}
						imageUrl={recpie.imageUrl}
						cookingTime={recpie.cookingTime}
						id={recpie.id}
						ingredients={recpie.ingredients}
						instructions={recpie.instructions}
						description={recpie.description}
						isSavedItem={true}
					/>
				))}
			</ul>
		);
	}
	return <h2 className="text-center">no recipies was saved!</h2>
};

export default SavedRecpies;
