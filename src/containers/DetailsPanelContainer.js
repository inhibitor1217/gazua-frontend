import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DetailsPanel } from 'components';
import * as tickerActions from 'store/modules/ticker';

class DetailsPanelContainer extends Component {
    constructor(props) {
        super(props);

        this.componentWillMount = this.componentWillMount.bind(this);
    }

    async componentWillMount() {
        const { TickerActions } = this.props;
        const currencyPairs = ['btc_krw', 'etc_krw', 'eth_krw', 'xrp_krw', 'bch_krw', 'ltc_krw'];
        currencyPairs.forEach(async (currencyPair) => {
            try {
                await TickerActions.setTicker({ currencyPair });
            } catch (e) {
                console.log(e);
            }
        });
    }

    render() {
        const { tickers } = this.props;
        const data = tickers.toJS();
        return (
            <DetailsPanel data={data} />
        );
    }
}

export default connect(
    // mapStateToProps
    (state) => ({
        tickers: state.ticker.get('tickers')
    }),
    // mapDispatchToProps
    (dispatch) => ({
        TickerActions: bindActionCreators(tickerActions, dispatch)
    })
)(DetailsPanelContainer);