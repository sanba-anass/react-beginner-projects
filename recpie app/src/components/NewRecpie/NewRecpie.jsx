import { Form, useNavigation } from "react-router-dom";
import "./NewRecpie.css";
const NewRecpie = () => {
	const navigation = useNavigation();

	const isSubmitting = navigation.state === "submitting";

	return (
		<Form className="form" method="post">
			<label>Name: </label>
			<input type="text" name="name" />
			<label>description: </label>
			<textarea type="text" name="description"></textarea>
			<label>ingredients: </label>
			<textarea type="text" name="ingredients"></textarea>
			<label>instructions: </label>
			<textarea type="text" name="instructions"></textarea>
			<label>image_url: </label>
			<input type="url" name="image_url" />
			<label> cookingTime: </label>
			<input min="10" max="90" type="number" name="cooking_time" />
			<button className="submit" type="submit">
				{isSubmitting ? "Submitting..." : "Create recpie"}
			</button>
		</Form>
	);
};

export default NewRecpie;
