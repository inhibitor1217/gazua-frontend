import React, { Component } from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { LineChart } from 'components';
import * as tickerAPI from 'apis/ticker';

const cx = classNames.bind(style);

class CurrencyDetailsPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tickers: []
        };

        this.componentWillMount = this.componentWillMount.bind(this);
    }

    async componentWillMount() {
        const { currencyPair } = this.props;
        const { data: tickers } = await tickerAPI.tickerTimeInterval({ currencyPair, timeInterval: '1d' });
        this.setState({ tickers });
    }

    render() {
        const { tickers } = this.state;
        const data = [];
        tickers.forEach((ticker) => {
            data.push({ x: new Date(ticker.ticker.timestamp), y: ticker.ticker.last });
        });
        return (
            <div className={cx('currency-details-panel')}>
                <LineChart data={data} />
            </div>
        );
    }
}

export default CurrencyDetailsPanel;