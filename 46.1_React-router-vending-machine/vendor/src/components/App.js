import VendingMachine from "./VendingMachine";
import Snack from "./Snack";
import NavBar from "./NavBar"
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
				<NavBar/>
				<Route exact path="/">
					<VendingMachine />
				</Route>
				<Route exact path="/chips">
					<Snack
						name="chips"
						img="https://m.media-amazon.com/images/I/813axPlVxBL.jpg"
					/>
				</Route>
				<Route exact path="/carrots">
					<Snack
						name="carrots"
						img="https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-benefits-pin.jpg"
					/>
				</Route>
				<Route exact path="/sandwich">
					<Snack
						name="sandwich"
						img="https://www.twopeasandtheirpod.com/wp-content/uploads/2016/08/Rainbow-Vegetable-Sandwich-12-500x500.jpg"
					/>
				</Route>

		</BrowserRouter>
	);
}

export default App;
