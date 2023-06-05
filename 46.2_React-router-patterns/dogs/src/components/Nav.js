import { NavLink } from "react-router-dom";
import "../styles/Nav.css"

const Nav = ({ dogs }) => {
	const dogLinks = dogs.map((dog,idx) => (
		<NavLink exact to={`/dogs/${dog.name.toLowerCase()}`} key={idx}>{dog.name}</NavLink>
	));

	return (
		<nav className="Nav">
			<NavLink exact to="/dogs">Home</NavLink>
			{dogLinks}
		</nav>
	);
};

export default Nav;
