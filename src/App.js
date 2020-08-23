import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={() => <h1>Home Page</h1>} />
        </Switch>
    );
};

export default App;
