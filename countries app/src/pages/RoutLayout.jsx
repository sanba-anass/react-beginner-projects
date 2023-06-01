import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
const RoutLayout = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};

export default RoutLayout;
