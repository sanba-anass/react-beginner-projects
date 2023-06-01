import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
const RoutLayout = () => {
	return (
		<>
			<Navbar />
            <Outlet/>
		</>
	);
};

export default RoutLayout;
