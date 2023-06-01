import { useContext } from "react";
import { Store } from "../context/store";
import "./navbar.css";
const NavBar = () => {
	const ctx = useContext(Store);
	function handleDarkMode() {
		ctx.setIsDark((prev) => !prev);
		localStorage.setItem("dark",!ctx.isDark);
	}
	const dark = ctx.isDark ? "quit-dark" : "";
	return (
		<nav className={`navbar ${dark}`}>
			<div className="logo">Where in the world?</div>
			<button onClick={handleDarkMode} className="theme-mode">
				{ctx.isDark ? "Light mode" : "DarkMode"}
			</button>
		</nav>
	);
};

export default NavBar;
