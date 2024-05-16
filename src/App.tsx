import Switcher from "./components/Switcher";
import {Outlet} from "react-router-dom";
import React from "react";

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
