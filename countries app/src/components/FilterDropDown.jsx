import { useContext } from "react";
import { Store } from "../context/store";
import "./FilterDropDown.css";
const FilterDropDown = () => {
	const ctx = useContext(Store);

	const dark = ctx.isDark ? "quit-dark" : "";
	return (
		<select
			className={dark}
			onChange={(e) => {
				ctx.setValue(e.target.value);
			}}
			name="filter-dropdown"
			id="region-filter"
		>
			<option style={{ display: "none" }}>{ctx.value}</option>
			<option value="americas">America</option>
			<option value="africa">Africa</option>
			<option value="asia">Asia</option>
			<option value="oceania">Oceania</option>
			<option value="europe">Europe</option>
		</select>
	);
};

export default FilterDropDown;
