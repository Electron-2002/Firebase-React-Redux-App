import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/project/:id" exact component={ProjectDetails} />
                <Route path="/signin" exact component={SignIn} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/create" exact component={CreateProject} />
            </Switch>
        </>
    );
};

export default App;
