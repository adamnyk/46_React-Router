import { Link } from "react-router-dom";
const Snack = ({ name, img }) => {
	return (
		<>
			<div>
				<h2>{`Yay ${name.toUpperCase()}!`}</h2>
				<img src={img} style={{ width: "300px" }} />
			</div>
			<Link to="/">Back to all snacks</Link>
		</>
	);
};

export default Snack;
