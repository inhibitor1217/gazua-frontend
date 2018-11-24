import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from 'store/modules/user';
import * as tickerActions from 'store/modules/ticker';

import storage from 'lib/storage';
import { openConnection } from 'lib/socket';

import { DashboardPage, LandingPage, LoginPage, RegisterPage } from 'components';

class App extends Component {
    constructor(props) {
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
        this.retrieveTickerInfo = this.retrieveTickerInfo.bind(this);
        this.configureSocket = this.configureSocket.bind(this);
        this.initializeUser = this.initializeUser.bind(this);
    }

    componentDidMount() {
        this.initializeUser();
        this.configureSocket();
        this.retrieveTickerInfo();
    }

    retrieveTickerInfo() {
        const { TickerActions } = this.props;
        const currencyPairs = ['btc_krw', 'etc_krw', 'eth_krw', 'xrp_krw', 'bch_krw', 'ltc_krw'];
        currencyPairs.forEach(async (currencyPair) => {
            try {
                await TickerActions.setTicker({ currencyPair });
            } catch (e) {
                console.log(e);
            }
        });
    }

    configureSocket() {
        // socket configuration
        const socket = openConnection();
        const { TickerActions } = this.props;
        // ticker update notification
        socket.on('ticker', async (msg) => {
            try {
                await TickerActions.setTicker({
                    currencyPair: msg
                });
                TickerActions.setHighlight({
                    currencyPair: msg,
                    value: true
                });
                setTimeout(() => {
                    TickerActions.setHighlight({
                        currencyPair: msg,
                        value: false
                    });
                }, 1000);
            } catch (e) {
                console.log(e);
            }
        });
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
        UserActions: bindActionCreators(userActions, dispatch),
        TickerActions: bindActionCreators(tickerActions, dispatch)
    })
)(App);
