import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./components/store/index";
import {Auth0Provider} from "@auth0/auth0-react"
import AppRoutes from "./components/routes/AppRoutes";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


//constantes para proveer a auth0
// const domain = process.env.REACT_APP_AUTH0_DOMAIN
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>

    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </BrowserRouter>

);
