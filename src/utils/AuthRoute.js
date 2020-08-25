import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute = ({ component: Component, ...rest }) => {
    const auth = useSelector((state) => state.firebase.auth);

    return (
        <Route
            {...rest}
            render={(props) =>
                !auth.uid ? <Redirect to="/signin" /> : <Component {...props} />
            }
        />
    );
};

export default AuthRoute;
