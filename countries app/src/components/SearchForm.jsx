import { useContext } from "react";
import { Store } from "../context/store";
import "./Form.css";
const SearchForm = () => {
	const ctx = useContext(Store);

	const dark = ctx.isDark ? "quit-dark" : "";
	

	//country.name.common.toLowerCase().includes(searchValue.toLowerCase())
	// useEffect(() => {
	// 	ctx.setCountries((prevCountries) =>
	// 		prevCountries.filter((country) =>

	// 		)
	// 	);
	// }, [searchValue]);
	return (
		<form>
			<input
				onChange={(e) => {
					ctx.setSearchValue(e.target.value);
				}}
				value={ctx.searchValue}
				placeholder="Search for a country..."
				type="text"
				name="country-search"
				id="country-search"
				className={dark}
			/>
		</form>
	);
};

export default SearchForm;
