import { NavLink } from "react-router-dom";
import "../styles/NavBar.css"

const NavBar = () => {
	return (
		<nav className="NavBar">
			<NavLink exact to="/">Home</NavLink>
			<NavLink exact to="/chips">chips</NavLink>
			<NavLink exact to="/carrots">carrots</NavLink>
			<NavLink exact to="/sandwich">sandwich</NavLink>
		</nav>
	);
};
export default NavBar;
