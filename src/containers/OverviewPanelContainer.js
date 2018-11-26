import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OverviewPanel } from 'components';

class OverviewPanelContainer extends Component {
    render() {
        const { user } = this.props;
        const _user = user ? user.toJS() : null;
        console.log(_user);
        return (
            <div>
                <OverviewPanel />
            </div>
        );
    }
}

// connect to redux
export default connect(
    // mapStateToProps
    (state) => ({
        user: state.user.get('user')
    })
)(OverviewPanelContainer);