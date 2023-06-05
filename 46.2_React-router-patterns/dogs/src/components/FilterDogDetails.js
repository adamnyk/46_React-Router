import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

const FilterDogDetails = ({ dogs }) => {
	const { name } = useParams();

	const foundDog = dogs.find(
		(dog) => dog.name.toLowerCase() === name.toLowerCase()
	);

	return <DogDetails dog={foundDog} />;
};

export default FilterDogDetails;
