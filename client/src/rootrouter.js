import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/* IMPORT COMPONENTS*/
import NavbarRoot from "./components/navbar";

/* Import random pages*/
import Email from './pages/email';
import Dashboard from "./pages/dashboard/dashboard";

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

/*import Profile from "./pages/profile/profile";*/
import Profile from "./pages/profile/profile";
import MaintenanceDashboard from "./pages/maintenance/dashboard";
import MaintenanceShedule from "./pages/maintenance/schedule";
import Login from "./pages/login";
import PrivateRoute from "./private-route";
import LoadingComponent from "./components/loading";
import Sms from "./pages/sms";



function RootRouter() {
  return (
    <div>
    <Router>
      <Switch>
        <PrivateRoute path="/" component={Login} />
      </Switch>
    </Router>
    <Router>
      <NavbarRoot />     
        <Switch>


          <Route path="/login">
            <Login />
          </Route>

          {/* Warehouse Routes */}
          <PrivateRoute path="/warehouse" component={Warehouse} />
          <PrivateRoute path="/warehouse/location" component={WarehouseLocation} />
          <PrivateRoute path="/warehouse/items" component={WarehouseItems} />

          {/* Client Routes */}
          <PrivateRoute path="/clients" component={Clients} />
          <PrivateRoute path="/client/new" component={ClientCreation} />
          <PrivateRoute path="/client/modify" component={ClientModify} />
          <PrivateRoute path="/client/:id" component={Client} />
          <PrivateRoute path="/client/:id/access" component={AccessPageView} />
          <PrivateRoute path="/client/:id/applications" component={ApplicationPage} />
          <PrivateRoute path="/client/:id/um" component={UMPage} />
          <PrivateRoute path="/client/:id/shares" component={SharesPage} />
          <PrivateRoute path="/client/:id/licens" component={LicensPage} />
          <PrivateRoute path="/client/:id/passwords" component={PasswordsPage} />

          {/* Maintenance Routes */}
          <PrivateRoute path="/maintenance/dashboard" component={MaintenanceDashboard} />
          <PrivateRoute path="/maintenance/schedule" component={MaintenanceShedule} />

          <PrivateRoute path="/demoloading" component={LoadingComponent} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/email" component={Email} />
          <PrivateRoute path="/sms" component={Sms} />
          <PrivateRoute path="/profile" component={Profile} />

        </Switch>
    </Router>
    </div>
  );
}

export default RootRouter;
