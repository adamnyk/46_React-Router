import ColorHome from "./ColorHome";
import ShowColor from "./ShowColor";
import FindColor from "./FindColor";
import ColorForm from "./ColorForm";
import useLocalStorageState from "../hooks";
import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const Routes = () => {
	const INITIAL_COLORS = [
		{ name: "red", value: "red" },
		{ name: "blue", value: "blue" },
		{ name: "turquoise", value: "turquoise" },
	];

	const [colors, setColors] = useLocalStorageState('colors', INITIAL_COLORS);

	const addColor = (newColor) => {
		setColors((c) => [...colors, newColor]);
	};

	return (
		<Switch>
			<Route exact path="/colors">
				<ColorHome colors={colors} />
			</Route>
			<Route exact path="/colors/new">
				<ColorForm addColor={addColor} />
			</Route>
			<Route exact path="/colors/:color">
				<FindColor colors={colors} />
			</Route>

			<Redirect to="/colors" />
		</Switch>
	);
};

export default Routes;
