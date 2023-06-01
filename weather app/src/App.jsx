import "./App.css";
import { useState } from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import { useEffect } from "react";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "577bc704348dd0b51cfb959603d0d9e6";

function App() {
	const [userInput, setuserInput] = useState("");
	const [data, setData] = useState(null);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const params = `&appid=${API_KEY}&units=metric&q=${userInput}`;

	useEffect(() => {
		const storedWeather = localStorage.getItem("weather");
		if (storedWeather) {
			setData(JSON.parse(storedWeather));
		}
	}, []);
	return (
		<>
			<div className="weather-container">
				<SearchForm
					baseUrl={baseUrl}
					userInput={userInput}
					params={params}
					setuserInput={setuserInput}
					setData={setData}
					setError={setError}
					setIsLoading={setIsLoading}
				/>
				{error ? (
					<h3 className="temp">{error}</h3>
				) : data === null ? null : isLoading ? (
					<h2 className="temp">{"Loading..."}</h2>
				) : (
					<div>
						<img
							className="img"
							src={`http://openweathermap.org/img/w/${data?.weather[0].icon}.png`}
						/>

						<h1 className="temp">{data?.main.temp + "°C"}</h1>
						<h2 className="temp">{data?.name}</h2>
						<div className="info">
							<div className="temp">
								{"humidity: " + data?.main.humidity + "%"}
							</div>
							<div className="temp">
								{"wind Speed: " + (data?.wind.speed * 3.6).toFixed(2) + "Km/h"}
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default App;
