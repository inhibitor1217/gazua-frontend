import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HeaderNav } from 'components';
import * as userActions from 'store/modules/user';

class HeaderNavContainer extends Component {
    render() {
        const { user, logged } = this.props;
        const _user = logged ? user.toJS() : null;
        return (
            <div>
                <HeaderNav user={_user} />
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