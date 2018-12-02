import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DetailsPanel } from 'components';
import * as tickerActions from 'store/modules/ticker';
import { currencyPairs } from 'lib/constants';

class DetailsPanelContainer extends Component {
    constructor(props) {
        super(props);

        this.retrieveTickerData = this.retrieveTickerData.bind(this);
    }

    componentWillMount() {
        const { retrieveTickerData } = this;
        retrieveTickerData();
    }

    async retrieveTickerData() {
        const { TickerActions } = this.props;
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
        const tickerData = tickers.toJS();
        return (
            <DetailsPanel tickerData={tickerData} />
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