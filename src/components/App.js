import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { LandingPage, DashboardPage } from 'components';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/dashboard" component={DashboardPage}/>
            </div>
        );
    }
}

export default App;
