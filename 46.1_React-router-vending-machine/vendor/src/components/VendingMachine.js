import { Link } from "react-router-dom";
import "../styles/VendingMachine.css";

const VendingMachine = () => {
	return (
        <div className="VendingMachine">
            <h1>Pick a snack:</h1>
			<Link to="/chips">Chips</Link>
			<Link to="/carrots">Carrots</Link>
			<Link to="/sandwich">Sandwich</Link>
		</div>
	);
};

export default VendingMachine;
