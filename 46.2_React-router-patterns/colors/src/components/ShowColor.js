import { Link, useParams, Redirect } from "react-router-dom";
import { useEffect } from "react";
import "../styles/ShowColor.css";

const ShowColor = ({ name, value }) => {


	return (
		<>
			<div className="ShowColor" style={{ backgroundColor: value}}>
				<h1>This is {name}</h1>
				<Link to="/colors"> Back to all colors</Link>
			</div>
		</>
	);
};

export default ShowColor;
