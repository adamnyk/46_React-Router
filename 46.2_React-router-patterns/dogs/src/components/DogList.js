import "../styles/DogList.css";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {


	return (
		<>
			<h1>These are all of the dogs. Click on one for more info</h1>

			{dogs.map((dog) => (
				<Link to={`/dogs/${dog.name.toLowerCase()}`} key={dog.name}>
					<div className="DogList-dogdiv">
						<p>{dog.name}</p>
						<img src={dog.src} alt={dog.name} />
					</div>
				</Link>
			))}
		</>
	);
};

export default DogList;
