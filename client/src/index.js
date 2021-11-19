import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <Auth0Provider
    domain="dev-o29jq5da.us.auth0.com"
    clientId="2V95QSiVyvknMXaZFT9nxcjElB5Xrc6W"
    redirectUri={window.location.origin}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Auth0Provider>,
  document.getElementById('root')
);
