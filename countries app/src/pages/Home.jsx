import SearchForm from "../components/SearchForm";
import FilterDropDown from "../components/FilterDropDown";
import Countries from "../components/Countries/Countries";

const Home = () => {
	return (
		<div className="wrapper">
			<div
				className="app-wrapper
"
			>
				<SearchForm />
				<FilterDropDown />
			</div>
			<Countries />
		</div>
	);
};

export default Home;
