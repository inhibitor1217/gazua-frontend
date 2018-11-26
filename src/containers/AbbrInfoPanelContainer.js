import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AbbrInfoPanel } from 'components';

class AbbrInfoPanelContainer extends Component {
    render() {
        const { dark, tickers, highlights } = this.props;
        const data = tickers.toJS();
        return (
            <div>
                <AbbrInfoPanel dark={dark} data={data} highlights={highlights}/>
            </div>
        );
    }
}

// connect to redux
export default connect(
    // mapStateToProps
    (state) => ({
        tickers: state.ticker.get('tickers'),
        highlights: state.ticker.get('highlights')
    })
)(AbbrInfoPanelContainer);