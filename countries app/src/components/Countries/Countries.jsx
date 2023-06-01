import { useContext } from "react";
import { useEffect } from "react";
import { Store } from "../../context/store";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = () => {
	const ctx = useContext(Store);
	const countries = JSON.parse(localStorage.getItem("countries"));
	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((res) => res.json())
			.then((data) => {
				ctx.setCountries(data);
				localStorage.setItem("countries", JSON.stringify(data));
			});
	}, []);

	return (
		<div className="countries">
			{countries
				?.filter((country) => {
					if (ctx.value === "Filter by Region" && ctx.searchValue === "") {
						return true;
					}
					if (ctx.searchValue !== "") {
						return country.name.common
							.toLowerCase()
							.includes(ctx.searchValue.toLowerCase());
					}

					return ctx.value.toLowerCase() === country.region.toLowerCase();
				})
				.map((country, idx) => {
					return (
						<Country
							key={idx}
							name={country.name.common}
							population={country.population}
							capital={country.capital}
							flagUrl={country.flags.svg}
							region={country.region}
						/>
					);
				})}
		</div>
	);
};

export default Countries;
