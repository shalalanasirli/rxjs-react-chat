import {Outlet} from "react-router-dom";
import Switcher from "./components/Switcher";

function App() {
	return (
		<div>
			<Switcher />
			<Outlet/>
		</div>
	);
}

export default App;
