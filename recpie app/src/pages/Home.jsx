import Recipes from "../components/Recipes/Recipes";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { RecpieContext } from "../context/RecpieContext";

const Home = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const ctx = useContext(RecpieContext);

	useEffect(() => {
		const loadedData = [];
		setIsLoading(true);
		fetch("https://dummy-2c596-default-rtdb.firebaseio.com/recpies.json")
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
						isSaved: data[key].isSaved,
					};
					loadedData.push(newRecipe);
				}
				ctx.setRecpies(loadedData);
				setIsLoading(false);
			});
	}, []);

	return <Recipes error={error} isLoading={isLoading} />;
};

export default Home;
