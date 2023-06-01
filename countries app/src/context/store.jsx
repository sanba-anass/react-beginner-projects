import { createContext } from "react";
export const Store = createContext({
	countries: [],
	setCountries: () => {},
	value: "",
	setValue: () => {},
	searchValue: "",
	setSearchValue: () => {},
	isDark: false,
	setIsDark: () => {},
});
