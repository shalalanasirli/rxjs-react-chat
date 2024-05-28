import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import FirstPerson from "./components/FirstPerson";
import SecondPerson from "./components/SecondPerson";
import "./styles.css";
import NotFound from "./components/NotFound.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
        errorElement: <NotFound/>,
		children: [
            { index: true, element: <Navigate to={"/first-person"} replace/>},
			{
                // index: true,
				path: "first-person",
				element: <FirstPerson/>
			},
			{
				path: "second-person",
				element: <SecondPerson/>
			}
		]
	}
])

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);