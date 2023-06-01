/* eslint-disable react/prop-types */
import "./SearchForm.css";

function SearchForm({
	baseUrl,
	params,
	setuserInput,
	userInput,
	setIsLoading,
	setData,
	setError,
}) {
	const onSubmit = async (evt) => {
		evt.preventDefault();
		console.log(userInput);
		setIsLoading(true);
		const response = await fetch(`${baseUrl}?${params}`);
		const data = await response.json();
		if (data?.cod === "404") {
			console.log(data);
			setIsLoading(true);
			setError(data.message);
		} else {
			setError("");
		}
		setIsLoading(false);

		console.log(data);
		localStorage.setItem("weather", JSON.stringify(data));
		setData(data);
	};
	const handleUserInputChange = (evt) => {
		setuserInput(evt.target.value);
	};
	return (
		<form onSubmit={onSubmit}>
			<input
				onChange={handleUserInputChange}
				value={userInput}
				type="text"
				name="search"
				id="search"
				placeholder="enter a city"
			/>

			<button type="submit">search</button>
		</form>
	);
}

export default SearchForm;
