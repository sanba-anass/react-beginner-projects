import { createContext } from "react";

export const Store = createContext({
	expenses: [],
	setExpenses: () => {},
	enteredAmount: "",
	setEnteredAmount: () => {},
});
