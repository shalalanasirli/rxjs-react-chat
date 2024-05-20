import Switcher from "./components/Switcher";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <div className="app-container">
            <Switcher/>
            <div className="app">
                <Outlet/>
            </div>
        </div>
    );
}

export default App;
