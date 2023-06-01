import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "./pages/Home";
import CreateRecpie from "./pages/createRecpie";
import { RouterProvider } from "react-router-dom";
import RoutLayout from "./pages/RoutLayout";
import SavedRecpiesPage from "./pages/SavedRecpiesPage";
import RecpieDetailPage from "./pages/RecpieDetailPage";
import { RecpieContext } from "./context/RecpieContext";
import { useState } from "react";
import RecpieSavedDetailsPage from "./pages/RecpieSavedDetailsPage";
function isURL(str) {
	var pattern = /^(ftp|http|https):\/\/[^ "]+$/;
	return pattern.test(str);
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <RoutLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: ":recpieId",
				element: <RecpieDetailPage />,
			},
			{
				path: "create-recpie",
				element: <CreateRecpie />,
				action: async ({ request }) => {
					const formData = await request.formData();
					const data = {
						name: formData.get("name"),
						description: formData.get("description"),
						ingredients: formData.get("ingredients"),
						instructions: formData.get("instructions"),
						imageUrl: formData.get("image_url"),
						cookingTime: formData.get("cooking_time"),
						isSaved: false,
					};
					if (data.name.length === 0 || data.name.length < 5) {
						alert("please provider a descriptive name");
						return redirect("/create-recpie");
					}
					if (data.description.length === 0 || data.description.length < 10) {
						alert("please provider a description");
						return redirect("/create-recpie");
					}
					if (data.ingredients.length === 0 || data.ingredients.length < 10) {
						alert("please provide complete ingredients");
						return redirect("/create-recpie");
					}
					if (data.instructions.length === 0 || data.instructions.length < 10) {
						alert("please provide complete instructions");
						return redirect("/create-recpie");
					}
					if (data.imageUrl.length === 0) {
						alert("imageUrl can't be empty ");
						return redirect("/create-recpie");
					}
					if (!isURL(data.imageUrl)) {
						alert("please a valid image url ");
						return redirect("/create-recpie");
					}
					if (data.cookingTime.length === 0) {
						alert("cookingTime can't be empty");
						return redirect("/create-recpie");
					}

					await fetch(
						"https://dummy-2c596-default-rtdb.firebaseio.com/recpies.json",
						{
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify(data),
						}
					);

					return redirect("/");
				},
			},
			{
				path: "saved_recpies",
				element: <SavedRecpiesPage />,
			},
			{
				path: "saved_recpies/:recpieId",
				element: <RecpieSavedDetailsPage />,
			},
		],
	},
]);
function App() {
	const [savedRecpies, setSavedRecpies] = useState([]);
	const [recpies, setRecpies] = useState([]);

	return (
		<RecpieContext.Provider
			value={{ recpies, setRecpies, savedRecpies, setSavedRecpies }}
		>
			<RouterProvider router={router} />
		</RecpieContext.Provider>
	);
}

export default App;
