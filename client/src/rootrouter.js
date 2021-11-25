import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { SharesPage,
  AccessPageView,
  Warehouse,
  WarehouseItems,
  WarehouseLocation,
  PasswordsPage,
  LicensPage,
  UMPage,
  ApplicationPage,
  NavbarRoot,
  ClientModify,
  Client,
  Clients,
  ClientCreation,
  Email,
  Sms,
  Dashboard,
  LoadingComponent,
  PrivateRoute,
  Login,
  MaintenanceShedule,
  MaintenanceDashboard,
  Profile 
} from "./component"

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
          <PrivateRoute path="/warehouse/locations" component={WarehouseLocation} />
          <PrivateRoute path="/warehouse" component={Warehouse} />
          <PrivateRoute path="/warehouse/items" component={WarehouseItems} />

          {/* Client Routes */}
          <PrivateRoute path="/clients" component={Clients} />
          <PrivateRoute path="/client/new" component={ClientCreation} />
          <PrivateRoute path="/client/modify" component={ClientModify} />
          <PrivateRoute path="/client/:id/access" component={AccessPageView} />
          <PrivateRoute path="/client/:id/applications" component={ApplicationPage} />
          <PrivateRoute path="/client/:id/um" component={UMPage} />
          <PrivateRoute path="/client/:id/shares" component={SharesPage} />
          <PrivateRoute path="/client/:id/licens" component={LicensPage} />
          <PrivateRoute path="/client/:id/passwords" component={PasswordsPage} />
          <PrivateRoute path="/client/:id" component={Client} />

          {/* Maintenance Routes */}
          <PrivateRoute path="/maintenance/dashboard" component={MaintenanceDashboard} />
          <PrivateRoute path="/maintenance/schedule" component={MaintenanceShedule} />

          <PrivateRoute path="/demoloading" component={LoadingComponent} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/email" component={Email} />
          <PrivateRoute path="/sms" component={Sms} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/" component={Dashboard} />

        </Switch>
    </Router>
    </div>
  );
}

export default RootRouter;
