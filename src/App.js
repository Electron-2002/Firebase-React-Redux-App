import React from 'react';
import './tailwind.output.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import AuthRoute from './utils/AuthRoute';
import UpdateProject from './components/projects/UpdateProject';

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <AuthRoute
                    path="/project/:id"
                    exact
                    component={ProjectDetails}
                />
                <Route path="/signin" exact component={SignIn} />
                <Route path="/signup" exact component={SignUp} />
                <AuthRoute path="/create" exact component={CreateProject} />
                <AuthRoute path="/update/:id" exact component={UpdateProject} />
            </Switch>
        </>
    );
};

export default App;
