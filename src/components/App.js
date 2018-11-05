import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { DashboardPage, LandingPage, LoginPage } from 'components';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/dashboard" component={DashboardPage}/>
                <Route path="/login" component={LoginPage}/>
            </div>
        );
    }
}

export default App;
