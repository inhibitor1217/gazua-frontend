import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HeaderNav } from 'components';
import * as userActions from 'store/modules/user';

class HeaderNavContainer extends Component {
    render() {
        const { user: _user } = this.props;
        const user = _user ? _user.toJS() : null;
        return (
            <div>
                <HeaderNav user={user} />
            </div>
        );
    }
}

export default connect(
    // mapStateToProps
    (state) => ({
        user: state.user.get('user')
    }),
    // mapDispatchToProps
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(HeaderNavContainer);