import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Block, MaterialIcon, Chart, PageShifter } from 'components';
import { currencyPairs, currencyPairToAbbr, stateToStateText, states } from 'lib/constants';
import { formatString } from 'lib/utils';
import * as tradeAPI from 'apis/trade';
import * as tradeActions from 'store/modules/trade';

const cx = classNames.bind(style);

class TradeDisplayPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeFilter: {
                states,
                currencyPairs
            },
            data: [[], [], [], [], [], []],
            numPages: 1,
            currentPage: 1
        };

        this.handleNextPage = this.handleNextPage.bind(this);
        this.handlePreviousPage = this.handlePreviousPage.bind(this);
        this.handleFirstPage = this.handleFirstPage.bind(this);
        this.handleLastPage = this.handleLastPage.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.retrieveData = this.retrieveData.bind(this);
        this.processData = this.processData.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    componentWillMount() {
        const { retrieveData } = this;
        retrieveData();
    }

    async componentWillReceiveProps(nextProps) {
        const { api, TradeActions } = this.props;
        const { updateAsk, updateBid } = nextProps;
        const { retrieveData } = this;
        if (updateAsk && api === 'ask') {
            await retrieveData();
            TradeActions.setUpdateAsk(false);
        } else if (updateBid && api === 'bid') {
            await retrieveData();
            TradeActions.setUpdateBid(false);
        }
    }

    handleNextPage() {
        const { currentPage, numPages } = this.state;
        this.setState({
            currentPage: currentPage < numPages ? currentPage + 1 : currentPage
        });
    }

    handlePreviousPage() {
        const { currentPage, numPages } = this.state;
        this.setState({
            currentPage: currentPage > 1 ? currentPage - 1 : currentPage
        });
    }

    handleFirstPage() {
        this.setState({
            currentPage: 1
        });
    }

    handleLastPage() {
        this.setState({
            currentPage: this.state.numPages
        });
    }

    handleSearch() {
        const { retrieveData } = this;
        retrieveData();
    }

    async retrieveData() {
        const { api, pageLimit = 10 } = this.props;
        const { processData } = this;
        const { states, currencyPairs } = this.state.activeFilter;
        if (api === 'ask') {
            const { data } = await tradeAPI.ask({ states, currencyPairs });
            const _data = processData(data);
            const numData = Math.max.apply(null, _data.map((column) => column.length));
            const numPages = Math.max(Math.ceil(numData / pageLimit), 1);
            this.setState({
                data: _data,
                numPages
            });
        } else if (api === 'bid') {
            const { data } = await tradeAPI.bid({ states, currencyPairs });
            const _data = processData(data);
            const numData = Math.max.apply(null, _data.map((column) => column.length));
            const numPages = Math.max(Math.ceil(numData / pageLimit), 1);
            this.setState({
                data: _data,
                numPages
            });
        } else {
            return [];
        }
    }

    processData(data) {
        const keys = ['currencyPair', 'price', 'volume', 'completedVolume', 'state'];
        return keys.map((key) => data.map((el) => {
            if (key === 'currencyPair') {
                return currencyPairToAbbr[el[key]];
            } else if (key === 'price') {
                return formatString(el[key]);
            } else if (key === 'completedVolume') {
                return el['volume'] - el[key];
            } else if (key === 'state') {
                return stateToStateText[el[key]];
            } else {
                return el[key];
            }
        }));
    }

    handleToggle(type, name) {
        if (type === 'states') {
            if (this.state.activeFilter.states.includes(name)) {
                return () => this.setState({
                    activeFilter: {
                        states: this.state.activeFilter.states.filter(x => x !== name),
                        currencyPairs: this.state.activeFilter.currencyPairs
                    }
                });
            } else {
                return () => this.setState({
                    activeFilter: {
                        states: this.state.activeFilter.states.concat(name),
                        currencyPairs: this.state.activeFilter.currencyPairs
                    }
                });
            }
        } else if (type === 'currencyPairs') {
            if (this.state.activeFilter.currencyPairs.includes(name)) {
                return () => this.setState({
                    activeFilter: {
                        states: this.state.activeFilter.states,
                        currencyPairs: this.state.activeFilter.currencyPairs.filter(x => x !== name)
                    }
                });
            } else {
                return () => this.setState({
                    activeFilter: {
                        states: this.state.activeFilter.states,
                        currencyPairs: this.state.activeFilter.currencyPairs.concat(name)
                    }
                });
            }
        }
    }

    render() {
        const { label, subLabel, pageLimit = 10, verbose, maxLimit, key } = this.props;
        const { data, activeFilter, currentPage, numPages } = this.state;
        const { handleToggle, handleSearch, handleFirstPage, handleLastPage, handleNextPage, handlePreviousPage } = this;
        const trimmedData = data.map(
            (column) => maxLimit
                ? column.slice(0, maxLimit)
                : column.slice(pageLimit * (currentPage - 1), pageLimit * currentPage)
        );
        return (
            <Block shadow>
                <div className={cx('trade-display-wrapper')}>
                    <div className={cx('trade-display-panel')}>
                        <div className={cx('trade-display-header')}>
                            <div className={cx('trade-display-header-title')}>
                                {label}
                            </div>
                            <div className={cx('trade-display-header-username')}>
                                {subLabel}
                            </div>
                        </div>
                        {
                            verbose
                                ? <div className={cx('trade-display-panel-utils')}>
                                    <div className={cx('trade-display-panel-filter')}>
                                        <button className={cx('trade-display-panel-filter-dropdown-button')}>
                                            <div>필터</div>
                                            <MaterialIcon md18>arrow_drop_down</MaterialIcon>
                                        </button>
                                        <div className={cx('trade-display-panel-filter-dropdown-content')}>
                                            <div>상태</div>
                                            {
                                                states.map((state) => {
                                                    return (
                                                        <div
                                                            className={cx('dropdown-element-transition', {
                                                                'dropdown-element-active': activeFilter.states.includes(state)
                                                            })}
                                                            onClick={handleToggle('states', state)}
                                                            key={`${key}-${state}`}
                                                        >
                                                            {stateToStateText[state]}
                                                        </div>
                                                    );
                                                })
                                            }
                                            <div>화폐</div>
                                            {
                                                currencyPairs.map((pair) => {
                                                    return (
                                                        <div
                                                            className={cx('dropdown-element-transition', {
                                                                'dropdown-element-active': activeFilter.currencyPairs.includes(pair)
                                                            })}
                                                            key={`filter-dropdown-${pair}`}
                                                            onClick={handleToggle('currencyPairs', pair)}
                                                        >
                                                            {currencyPairToAbbr[pair]}
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className={cx('trade-display-panel-filter-search-wrapper')}>
                                        <button className={cx('trade-display-panel-filter-search-button')}
                                            onClick={handleSearch}>
                                            <div>검색</div>
                                            <MaterialIcon md18>search</MaterialIcon>
                                        </button>
                                    </div>
                                </div>
                                : null
                        }
                        <div className={cx('trade-display-panel-content')}>
                            <Chart
                                labels={[
                                    '화폐', '가격', '수량', '미체결잔량', '상태'
                                ]}
                                data={trimmedData}
                            />
                        </div>
                        {
                            verbose
                                ? <PageShifter
                                    numPages={numPages} currentPage={currentPage}
                                    handleFirstPage={handleFirstPage}
                                    handleLastPage={handleLastPage}
                                    handleNextPage={handleNextPage}
                                    handlePreviousPage={handlePreviousPage}
                                />
                                : null
                        }
                    </div>
                </div>
            </Block>
        );
    }
}

export default connect(
    (store) => ({
        updateAsk: store.trade.get('updateAsk'),
        updateBid: store.trade.get('updateBid')
    }),
    (dispatch) => ({
        TradeActions: bindActionCreators(tradeActions, dispatch)
    })
)(TradeDisplayPanel);