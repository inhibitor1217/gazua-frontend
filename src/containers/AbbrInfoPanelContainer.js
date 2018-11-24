import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AbbrInfoPanel } from 'components';

class AbbrInfoPanelContainer extends Component {
    render() {
        const { dark, tickers } = this.props;
        const data = tickers.toJS();
        return (
            <div>
                <AbbrInfoPanel dark={dark} data={data}/>
            </div>
        );
    }
}

// connect to redux
export default connect(
    // mapStateToProps
    (state) => ({
        tickers: state.ticker.get('tickers')
    }),
    // mapDispatchToProps
    (dispatch) => ({

    })
)(AbbrInfoPanelContainer);