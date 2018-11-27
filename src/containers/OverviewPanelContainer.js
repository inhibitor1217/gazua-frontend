import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { OverviewPanel } from 'components';
import * as walletActions from 'store/modules/wallet';

class OverviewPanelContainer extends Component {
    constructor(props) {
        super(props);

        this.componentWillMount = this.componentWillMount.bind(this);
    }

    async componentWillMount() {
        const { WalletActions } = this.props;

        await WalletActions.setWallet();
    }

    render() {
        const { user, wallet } = this.props;
        const _user = user ? user.toJS() : null;
        const _wallet = wallet ? wallet.toJS() : null;
        return user ? (
            <div>
                <OverviewPanel user={_user} wallet={_wallet}/>
            </div>
        ) : <Redirect to='/login' />;
    }
}

// connect to redux
export default connect(
    // mapStateToProps
    (state) => ({
        user: state.user.get('user'),
        wallet: state.wallet
    }),
    (dispatch) => ({
        WalletActions: bindActionCreators(walletActions, dispatch)
    })
)(OverviewPanelContainer);