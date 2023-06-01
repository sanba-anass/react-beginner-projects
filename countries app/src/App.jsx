import "./App.css";
import { useState } from "react";
import { Store } from "./context/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RoutLayout from "./pages/RoutLayout";
import CountryDetailPage from "./pages/CountryDetailPage";
import { useEffect } from "react";
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
				path: ":countryId",
				element: <CountryDetailPage />,
				children: [
					{
						path: ":borderId",
						element: <CountryDetailPage />,
					},
				],
			},
		],
	},
]);

function App() {
	const [countries, setCountries] = useState([]);
	const [value, setValue] = useState("Filter by Region");
	const [searchValue, setSearchValue] = useState("");
	const [isDark, setIsDark] = useState(false);
	useEffect(() => {
		const dark = localStorage.getItem("dark");
		if (dark === "true") {
			setIsDark(true);
		}
	}, []);
	document.body.style.background = isDark ? "#202C36" : "";

	return (
		<Store.Provider
			value={{
				countries,
				setCountries,
				value,
				setValue,
				searchValue,
				setSearchValue,
				isDark,
				setIsDark,
			}}
		>
			<RouterProvider router={router} />
		</Store.Provider>
	);
}

export default App;
