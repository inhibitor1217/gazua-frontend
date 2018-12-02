import React, { Component } from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { LineChart, TradeRegisterModal } from 'components';
import * as tickerAPI from 'apis/ticker';
import { formatString, roundToTick } from 'lib/utils';
import { orderCondition } from 'lib/constants';

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
        const {
            handleClickFilter,
            props: { ticker, currencyPair },
            state: { tickers, activeFilter }
        } = this;

        const data = [];
        tickers[activeFilter].forEach((ticker) => {
            data.push({
                x: new Date(ticker.ticker.timestamp),
                y: ticker.ticker.last
            });
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
                <div className={cx('currency-details-prices')}>
                    <div className={cx('currency-details-prices-item')}>
                        <div className={cx('currency-details-font-small')}>현재가</div>
                        <div className={cx('currency-details-font-large')}>{formatString(ticker.last)}</div>
                    </div>
                    <div className={cx('currency-details-prices-item')}>
                        <div className={cx('currency-details-font-small')}>저가 (최근 24시간)</div>
                        <div className={cx('currency-details-font-large')}>{formatString(ticker.low)}</div>
                    </div>
                    <div className={cx('currency-details-prices-item')}>
                        <div className={cx('currency-details-font-small')}>고가 (최근 24시간)</div>
                        <div className={cx('currency-details-font-large')}>{formatString(ticker.high)}</div>
                    </div>
                    <div className={cx('currency-details-prices-item')}>
                        <div className={cx('currency-details-font-small')}>거래량 (최근 24시간)</div>
                        <div className={cx('currency-details-font-large')}>{
                            formatString(roundToTick(ticker.volume.toFixed(5), orderCondition[currencyPair].order_min_size))
                        }</div>
                    </div>
                </div>
                <TradeRegisterModal />
            </div>
        );
    }
}

export default CurrencyDetailsPanel;