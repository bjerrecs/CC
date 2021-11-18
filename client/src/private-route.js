import React from 'react';
import { Route } from 'react-router-dom'
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';
import LoadingComponent from './components/loading'

const PrivateRoute = ({ component, ...args}) => (
    <Route
        component={withAuthenticationRequired(component,{
            onRedirecting:() => <LoadingComponent />,
        })}
        {...args}
    />
);

export default PrivateRoute