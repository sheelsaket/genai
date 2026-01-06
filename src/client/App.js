import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import TrendAnalysis from './components/TrendAnalysis';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/transactions" component={TransactionList} />
                <Route path="/trends" component={TrendAnalysis} />
            </Switch>
        </Router>
    );
};

export default App;