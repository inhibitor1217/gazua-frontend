import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { OverviewPanel } from 'components';
import * as walletActions from 'store/modules/wallet';
import * as historyActions from 'store/modules/history';

class OverviewPanelContainer extends Component {
    constructor(props) {
        super(props);

        this.componentWillMount = this.componentWillMount.bind(this);
    }

    async componentWillMount() {
        const { user, WalletActions, HistoryActions } = this.props;

        /* Will retrieve all of base data in this component.
         * In other components in dashboard page, just subscribe from the store,
         * no need to request base data again.
         */
        if (user) {
            await WalletActions.setWallet();
            await HistoryActions.setLastHistory();
            await HistoryActions.setYesterdayHistory();
        }
    }

    render() {
        const { user, wallet, history } = this.props;
        const _user = user ? user.toJS() : null;
        const _wallet = wallet ? wallet.toJS() : null;
        const _history = history ? history.toJS() : null;
        return user ? (
            <div>
                <OverviewPanel user={_user} wallet={_wallet} history={_history}/>
            </div>
        ) : <Redirect to='/login' />;
    }
}

// connect to redux
export default connect(
    // mapStateToProps
    (state) => ({
        user: state.user.get('user'),
        wallet: state.wallet,
        history: state.history
    }),
    (dispatch) => ({
        WalletActions: bindActionCreators(walletActions, dispatch),
        HistoryActions: bindActionCreators(historyActions, dispatch)
    })
)(OverviewPanelContainer);