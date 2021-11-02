import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/* IMPORT COMPONENTS*/
import NavbarRoot from "./components/navbar";

/* IMPORT PAGES*/
import Home from './pages/home';
import Email from './pages/email';
import Dashboard from "./pages/dashboard";
import Warehouse from "./pages/warehouse/warehouse";
import Customers from "./pages/customers";
import NewCustomer from "./pages/newcustomer";
import WarehouseLocation from "./pages/warehouse/locations";
import WarehouseItems from "./pages/warehouse/items";
import CustomerDetail from "./pages/CustomerDetail";
import CustomerProcessDetail from './pages/CustomerProcessDetail'
import AccessPage from "./pages/docs/access";
import ApplicationPage from "./pages/docs/application";
import UMPage from "./pages/docs/um";
import SharesPage from "./pages/docs/shares";
import LicensPage from "./pages/docs/licens";
import PasswordsPage from "./pages/docs/passwords";


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
          <Route exact path="/customers">
            <NavbarRoot />
            <Customers />
          </Route>
          <Route exact path="/customers/new">
            <NavbarRoot />
            <NewCustomer />
          </Route>
          <Route exact path="/customer/:id">
            <NavbarRoot />
            <CustomerDetail />
          </Route>
          <Route exact path="/customer/:id/access">
            <NavbarRoot />
            <AccessPage />
          </Route>
          <Route exact path="/customer/:id/applications">
            <NavbarRoot />
            <ApplicationPage />
          </Route>
          <Route exact path="/customer/:id/um">
            <NavbarRoot />
            <UMPage />
          </Route>
          <Route exact path="/customer/:id/shares">
            <NavbarRoot />
            <SharesPage />
          </Route>
          <Route exact path="/customer/:id/licens">
            <NavbarRoot />
            <LicensPage />
          </Route>
          <Route exact path="/customer/:id/passwords">
            <NavbarRoot />
            <PasswordsPage />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default RootRouter;
