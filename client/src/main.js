import React from 'react';
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
  SecretsPage,
  LicensPage,
  UMPage,
  ApplicationPage,
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

import Patch from "./pages/patch";
import './aside.scss';
import CustomerMap from './pages/CustomerMap';
import NotFoundPage from './NotFoundPage';


const Main = () => {
  return (
    <main>



      <Router>
        <Switch>
          <PrivateRoute path="/" component={Login} />
        </Switch>
      </Router>
      <Router>
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
          <PrivateRoute path="/client/access/:id" component={AccessPageView} />
          <PrivateRoute path="/client/applications/:id" component={ApplicationPage} />
          <PrivateRoute path="/client/um/:id" component={UMPage} />
          <PrivateRoute path="/client/shares/:id" component={SharesPage} />
          <PrivateRoute path="/client/licens/:id" component={LicensPage} />
          <PrivateRoute path="/client/secrets/:id" component={SecretsPage} />
          <PrivateRoute path="/client/:id" component={Client} />

          {/* Maintenance Routes */}
          <PrivateRoute path="/maintenance/dashboard" component={MaintenanceDashboard} />
          <PrivateRoute path="/maintenance/schedule" component={MaintenanceShedule} />

          <PrivateRoute path="/demoloading" component={LoadingComponent} />
          
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/email" component={Email} />
          <PrivateRoute path="/patch" component={Patch} />
          <PrivateRoute path="/sms" component={Sms} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="*" component={NotFoundPage}/>
          <PrivateRoute path="/" component={Dashboard} />
    </Switch>
    </Router>
      


    </main>
  );
};

export default Main;