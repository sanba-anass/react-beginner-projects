import { createContext } from "react";
export const RecpieContext = createContext({
	recpies: [],
	savedRecpies: [],
	setRecpies: () => {},
	setSavedRecpies: () => {},
});
