import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HeaderNav } from 'components';
import storage from 'lib/storage';
import * as userActions from 'store/modules/user';

class HeaderNavContainer extends Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        const { UserActions } = this.props;
        UserActions.logout();
        storage.remove('__USER__');
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

export default connect(
    // mapStateToProps
    (state) => ({
        user: state.user.get('user'),
        logged: state.user.get('logged')
    }),
    // mapDispatchToProps
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(HeaderNavContainer);