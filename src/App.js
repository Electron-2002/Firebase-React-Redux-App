import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/project/:id" exact component={ProjectDetails} />
            </Switch>
        </>
    );
};

export default App;
