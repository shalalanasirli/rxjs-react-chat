import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import FirstPerson from "./components/FirstPerson";
import SecondPerson from "./components/SecondPerson";
import "./styles.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
		children: [
			{
				path: "/first-person",
				element: <FirstPerson/>
			},
			{
				path: "/",
				element: <FirstPerson/>
			},
			{
				path: "/second-person",
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