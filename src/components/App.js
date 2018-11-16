import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from 'store/modules/user';
import storage from 'lib/storage';
import { DashboardPage, LandingPage, LoginPage, RegisterPage } from 'components';

class App extends Component {
    constructor(props) {
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
        this.initializeUser = this.initializeUser.bind(this);
    }

    componentDidMount() {
        this.initializeUser();
    }

    async initializeUser() {
        const user = storage.get('__USER__');
        if (!user) {
            return;
        }

        const { UserActions } = this.props;
        UserActions.setUser(user);
        try {
            await UserActions.checkStatus();
        } catch (e) {
            storage.remove('__USER__');
            window.location.href = '/login?expired';
        }
    }

    render() {
        return (
            <div>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/dashboard" component={DashboardPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={RegisterPage}/>
            </div>
        );
    }
}

export default connect(
    null,
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(App);
