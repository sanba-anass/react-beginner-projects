/* eslint-disable no-mixed-spaces-and-tabs */
import { Link, useParams } from "react-router-dom";
import { useState, useContext } from "react";
import "./CountryDetailPage.css";
import { Store } from "../context/store";
const CountryDetailPage = () => {
	const { countryId } = useParams();
	const ctx = useContext(Store);

	const dark = ctx.isDark ? "quit-dark" : "";
	const isDarkText = ctx.isDark ? "dark-text" : "";
	const IsDarkBtn = ctx.isDark ? "dark-btn" : "";
	const [clickedCountry, setClickedCountry] = useState(
		JSON.parse(localStorage.getItem("countryData"))
	);
	// const isValidRoute =
	// 	JSON.parse(
	// 		localStorage.getItem("countryData")
	// 	).name.common.toLowerCase() !== countryId.toLowerCase();

	const isValidRoute = JSON.parse(localStorage.getItem("countries")).find(
		(country) => country.name.common !== countryId
	);
	if (!isValidRoute) {
		return <h1 style={{ textAlign: "center" }}> 404 page not found</h1>;
	}

	return (
		<div className={"container" + " " + isDarkText}>
			<Link className={"btn" + " " + IsDarkBtn} to={"/"}>
				{"<< back to home"}
			</Link>
			<div className="flex">
				<img className="country-image" src={clickedCountry.flags.svg} />

				<div className="infos">
					<h2 className="country-name">{clickedCountry?.name.common}</h2>
					<div>
						<span>NativeName: </span>
						{(clickedCountry?.name?.nativeName || clickedCountry.name)[
							Object.keys(clickedCountry?.name?.nativeName || {})[0]
						]?.official || "unknown nativeName"}
					</div>
					<div>
						<span>Population: </span>
						{clickedCountry?.population}
					</div>
					<div>
						<span>Region: </span>
						{clickedCountry?.region}
					</div>
					<div>
						<span>Sub region: </span>
						{clickedCountry?.subregion || "unknown"}
					</div>
					<div>
						<span>Capital: </span>
						{clickedCountry?.capital || "unknown"}
					</div>
				</div>

				<div className="infos">
					<div>
						<span>Top Level Domain: </span>
						{clickedCountry?.tld
							? clickedCountry?.tld[0] ||
							  "" + " " + (clickedCountry?.tld[1] || "")
							: "no tld"}
					</div>
					<div>
						<span>Currencies: </span>
						{Object.keys(clickedCountry?.currencies || {})[0] ||
							"unknown currency"}
					</div>
					<div>
						<span>Languages: </span>
						{clickedCountry?.languages
							? clickedCountry?.languages[
									Object.keys(clickedCountry?.languages || {})[0]
							  ]
							: "unknown"}
					</div>
				</div>
			</div>
			<div className="borders">
				<span>borders: </span>
				<ul>
					{clickedCountry.borders
						? clickedCountry.borders.map((border, idx) => (
								<Link
									to={border.toLowerCase()}
									onClick={async () => {
										const res = await fetch(
											`https://restcountries.com/v3.1/alpha/${border}`
										);
										const data = await res.json();
										setClickedCountry(data[0]);
										localStorage.setItem(
											"countryData",
											JSON.stringify(data[0])
										);
									}}
									className={"link" + " " + dark}
									key={idx}
								>
									{" "}
									{border}
								</Link>
						  ))
						: "no borders"}
				</ul>
			</div>
		</div>
	);
};

export default CountryDetailPage;
