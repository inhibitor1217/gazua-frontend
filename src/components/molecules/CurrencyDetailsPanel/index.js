import React, { Component } from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { LineChart } from 'components';
import * as tickerAPI from 'apis/ticker';

const cx = classNames.bind(style);

const labels = ['6h', '1d', '1w', '1m'];
const labelToText = { '6h': '6시간', '1d': '1일', '1w': '7일', '1m': '30일' };

class CurrencyDetailsPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tickers: {
                '6h': [],
                '1d': [],
                '1w': [],
                '1m': []
            },
            activeFilter: '6h'
        };

        this.componentWillMount = this.componentWillMount.bind(this);
        this.handleClickFilter = this.handleClickFilter.bind(this);
    }

    async componentWillMount() {
        const { currencyPair } = this.props;
        const { data: tickers6H } = await tickerAPI.tickerTimeInterval({ currencyPair, timeInterval: '6h' });
        const { data: tickers1D } = await tickerAPI.tickerTimeInterval({ currencyPair, timeInterval: '1d' });
        const { data: tickers1W } = await tickerAPI.tickerTimeInterval({ currencyPair, timeInterval: '1w' });
        const { data: tickers1M } = await tickerAPI.tickerTimeInterval({ currencyPair, timeInterval: '1m' });
        this.setState({
            tickers: {
                '6h': tickers6H,
                '1d': tickers1D,
                '1w': tickers1W,
                '1m': tickers1M
            }
        });
    }

    handleClickFilter(label) {
        return () => {
            this.setState({ activeFilter: label });
        };
    }

    render() {
        const { handleClickFilter, state: { tickers, activeFilter } } = this;
        const data = [];
        tickers[activeFilter].forEach((ticker) => {
            data.push({ x: new Date(ticker.ticker.timestamp), y: ticker.ticker.last });
        });
        return (
            <div className={cx('currency-details-panel')}>
                <div className={cx('currency-details-filters')}>
                    {
                        labels.map((label) => {
                            return (
                                <div
                                    className={cx({
                                        'currency-details-filter-active': activeFilter === label
                                    })}
                                    onClick={handleClickFilter(label)}
                                    key={`currency-details-filter-${label}`}
                                >
                                    {labelToText[label]}
                                </div>
                            );
                        })
                    }
                </div>
                <div className={cx('currency-details-chart-wrapper')}>
                    <LineChart data={data} />
                </div>
            </div>
        );
    }
}

export default CurrencyDetailsPanel;