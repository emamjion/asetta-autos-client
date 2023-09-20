import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import Authprovider from "./Component/Providers/Authprovider";



import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import store from "./Component/Redux/store";
import { Provider } from "react-redux";
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<Authprovider>
			<React.StrictMode>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={router} />
				</QueryClientProvider>
			</React.StrictMode>
		</Authprovider>
	</Provider>

);
