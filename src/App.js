import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/" exact component={() => <Dashboard />} />
            </Switch>
        </>
    );
};

export default App;
