import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { OverviewPanel } from 'components';
import storage from 'lib/storage';
import * as walletActions from 'store/modules/wallet';
import * as historyActions from 'store/modules/history';

class OverviewPanelContainer extends Component {
    constructor(props) {
        super(props);

        this.componentWillMount = this.componentWillMount.bind(this);
    }

    async componentWillMount() {
        const { WalletActions, HistoryActions } = this.props;

        if (storage.get('__USER__')) {
            await WalletActions.setWallet();
            await HistoryActions.setLastHistory();
            await HistoryActions.setYesterdayHistory();
        } else {
            this.props.history.push('/login');
        }
    }

    render() {
        const { wallet, userHistory } = this.props;
        const user = storage.get('__USER__');
        const _wallet = wallet ? wallet.toJS() : null;
        const _history = userHistory ? userHistory.toJS() : null;
        return (
            <div>
                <OverviewPanel user={user} wallet={_wallet} history={_history}/>
            </div>
        );
    }
}

// connect to redux
export default withRouter(connect(
    // mapStateToProps
    (state) => ({
        logoutFlag: state.user.get('logoutFlag'),
        wallet: state.wallet,
        userHistory: state.history
    }),
    (dispatch) => ({
        WalletActions: bindActionCreators(walletActions, dispatch),
        HistoryActions: bindActionCreators(historyActions, dispatch)
    })
)(OverviewPanelContainer));