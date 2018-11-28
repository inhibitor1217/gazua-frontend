import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HeaderNav } from 'components';
import { withRouter } from 'react-router';
import storage from 'lib/storage';
import * as userActions from 'store/modules/user';
import * as walletActions from 'store/modules/wallet';
import * as historyActions from 'store/modules/history';

class HeaderNavContainer extends Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        const { UserActions, WalletActions, HistoryActions } = this.props;
        UserActions.logout();
        WalletActions.logout();
        HistoryActions.logout();
        storage.remove('__USER__');
        this.props.history.push('/login');
    }

    render() {
        const { handleLogout } = this;
        const { user, logged } = this.props;
        const _user = logged ? user.toJS() : null;
        return (
            <div>
                <HeaderNav
                    user={_user}
                    onClickLogout={handleLogout}
                />
            </div>
        );
    }
}

export default withRouter(connect(
    // mapStateToProps
    (state) => ({
        user: state.user.get('user'),
        logged: state.user.get('logged')
    }),
    // mapDispatchToProps
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch),
        WalletActions: bindActionCreators(walletActions, dispatch),
        HistoryActions: bindActionCreators(historyActions, dispatch)
    })
)(HeaderNavContainer));