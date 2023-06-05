import { Link } from "react-router-dom";

import "../styles/ColorHome.css";

const ColorHome = ({ colors }) => {
	

	return (
		<div className="ColorHome">
			<div className="ColorHome-header">
				<h2>Colors Home</h2>
				<Link to="/colors/new"><h1>Add a color</h1></Link>
			</div>
			<div>
				<p>Select a color:</p>
				<ul>
					{colors.map((color, idx) => (
						<li key={idx}>
							<Link to={`/colors/${color.name}`}>{color.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ColorHome;
