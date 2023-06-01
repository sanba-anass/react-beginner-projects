import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
	return (
		<nav>
			<ul className="links">
				<li>
					<Link to="">Home</Link>
				</li>
				<li>
					<Link to="create-recpie">Create recpie</Link>
				</li>
				<li>
					<Link to="saved_recpies">Saved recpies</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
