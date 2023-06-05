import DogList from "./DogList";
import DogDetails from "./DogDetails";
import dogData from "../data/dogData";
import Routes from "./Routes";
import Nav from "./Nav"
import "../styles/app.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App({ dogs }) {
	return (
		<>
			<Nav dogs={dogs} />
			<div className="container">
				<Routes dogs={dogs} />
			</div>
		</>
	);
}

App.defaultProps = dogData;
export default App;
