import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
// import Authprovider from "./Component/Providers/Authprovider";


ReactDOM.createRoot(document.getElementById("root")).render(
	// <Authprovider>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	// </Authprovider>
);
