/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../../context/store";
const Country = ({ name, population, capital, flagUrl, region }) => {
	const navigate = useNavigate();
	const ctx = useContext(Store);
	const dark = ctx.isDark ? "quit-dark" : "";

	return (
		<div
			onClick={() => {
				fetch(`https://restcountries.com/v3.1/name/` + name)
					.then((res) => res.json())
					.then((data) => {
						localStorage.setItem("countryData", JSON.stringify(data[0]));
						console.log(data[0]);
					})
					.then(() => navigate(name));
			}}
			className={`country ${dark}`}
		>
			<img src={flagUrl} />
			<div className="text">
				<h3>{name}</h3>
				<div className="sub">
					<span>population: </span> {population}
				</div>
				<div className="sub">
					<span>Region: </span>
					{region}
				</div>
				<div className="sub">
					<span>Capital: </span>
					{capital}
				</div>
			</div>
		</div>
	);
};

export default Country;
