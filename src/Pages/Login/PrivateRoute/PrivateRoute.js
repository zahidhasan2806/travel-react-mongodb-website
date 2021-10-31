import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../../Hooks/UseAuth';
import loader from "../../../Images/loader.gif"

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = UseAuth();
    if (isLoading) {
        return <img src={loader} alt="" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect to={
                    {
                        pathname: "/login",
                        state: { from: location }
                    }
                }

                ></Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;