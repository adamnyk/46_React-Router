import { Link, Redirect } from "react-router-dom";
import "../styles/DogDetails.css";

const DogDetails = ({ dog }) => {
	if (!dog) return <Redirect to="/dogs" />;

	return (
		<div className="DogDetails">
			<img src={dog.src} alt={dog.name} />
			<h2>{dog.name}</h2>
			<h3>{dog.age} years old</h3>
			<ul>
				{dog.facts.map((fact, i) => (
					<li key={i}>{fact}</li>
				))}
			</ul>

			<Link to="/dogs">Go Back</Link>
		</div>
	);
};

export default DogDetails;
