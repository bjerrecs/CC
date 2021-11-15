import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/* IMPORT COMPONENTS*/
import NavbarRoot from "./components/navbar";

/* Import random pages*/
import Home from './pages/home';
import Email from './pages/email';
import Dashboard from "./pages/dashboard";

/* Clients Imports*/
import Client from "./pages/client/client";
import Clients from "./pages/client/clients";
import ClientCreation from "./pages/client/client_creation";
import ClientModify from "./pages/client/client_modify";

/* Client CC Pages Import*/
import ApplicationPage from "./pages/docs/application";
import UMPage from "./pages/docs/um";
import SharesPage from "./pages/docs/shares";
import LicensPage from "./pages/docs/licens";
import PasswordsPage from "./pages/docs/passwords";

/* Warehouse Imports*/
import Warehouse from "./pages/warehouse/warehouse";
import WarehouseLocation from "./pages/warehouse/locations";
import WarehouseItems from "./pages/warehouse/items";
import AccessPageView from "./pages/docs/access_page";

import Profile from "./pages/profile/profile";



function RootRouter() {
  return (
    <div>
    <Router>
      <div>
        <Switch>

          {/* Default Route */}
          <Route exact path="/">
            <NavbarRoot />
            <Home />
          </Route>

          {/* Misc Routes */}
          <Route path="/email">
            <NavbarRoot />
            <Email />
          </Route>
          <Route path="/dashboard">
            <NavbarRoot />
            <Dashboard />
          </Route>

          {/* Warehouse Routes */}
          <Route exact path="/warehouse">
            <NavbarRoot />
            <Warehouse />
          </Route>
          <Route exact path="/warehouse/location">
            <NavbarRoot />
            <WarehouseLocation />
          </Route>
          <Route exact path="/warehouse/items">
            <NavbarRoot />
            <WarehouseItems />
          </Route>

          {/* Client Routes */}
          <Route exact path="/clients">
            <NavbarRoot />
            <Clients />
          </Route>
          <Route exact path="/client/new">
            <NavbarRoot />
            <ClientCreation />
          </Route>
          <Route exact path="/client/modify">
            <NavbarRoot />
            <ClientModify />
          </Route>
          <Route exact path="/client/:id">
            <NavbarRoot />
            <Client />
          </Route>
          <Route exact path="/client/:id/access">
            <NavbarRoot />
            <AccessPageView />
          </Route>
          <Route exact path="/client/:id/applications">
            <NavbarRoot />
            <ApplicationPage />
          </Route>
          <Route exact path="/client/:id/um">
            <NavbarRoot />
            <UMPage />
          </Route>
          <Route exact path="/client/:id/shares">
            <NavbarRoot />
            <SharesPage />
          </Route>
          <Route exact path="/client/:id/licens">
            <NavbarRoot />
            <LicensPage />
          </Route>
          <Route exact path="/client/:id/passwords">
            <NavbarRoot />
            <PasswordsPage />
          </Route>

          <Route exact path="/profile">
            <NavbarRoot />
            <Profile />
          </Route>

          
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default RootRouter;
