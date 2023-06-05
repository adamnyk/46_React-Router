import Routes from "./Routes";
import "../styles/App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Routes />
		</div>
	);
}

export default App;
