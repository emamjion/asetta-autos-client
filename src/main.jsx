import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import Authprovider from "./Component/Providers/Authprovider";
import { Provider } from "react-redux";
import store from "./Component/Redux/store";



ReactDOM.createRoot(document.getElementById("root")).render(
	
	<Provider store={store}>
		<div>
			<Authprovider>
				<React.StrictMode>
					<RouterProvider router={router} />
				</React.StrictMode>
			</Authprovider>
		</div>
	</Provider>

);
