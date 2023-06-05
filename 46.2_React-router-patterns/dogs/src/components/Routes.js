import { Route, Switch, Redirect } from "react-router-dom";
import FilterDogDetails from "./FilterDogDetails";
import DogList from "./DogList";

const Routes = ({ dogs }) => (
	<Switch>
		<Route exact path="/dogs">
			<DogList dogs={dogs} />
		</Route>
		<Route exact path="/dogs/:name">
			<FilterDogDetails dogs={dogs} />
		</Route>
		<Redirect to="/dogs" />
	</Switch>
);

export default Routes;
