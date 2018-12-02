import React, { Component } from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Block, MaterialIcon, Chart, PageShifter } from 'components';
import { currencyPairs, currencyPairToAbbr, stateToStateText } from 'lib/constants';
import { formatString } from 'lib/utils';
import * as tradeAPI from 'apis/trade';

const cx = classNames.bind(style);

class TradeDisplayPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeFilter: {
                states: ['pending', 'completed', 'withdrawn'],
                currencyPairs
            },
            data: [[], [], [], [], [], []]
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.retrieveData = this.retrieveData.bind(this);
        this.processData = this.processData.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    componentWillMount() {
        const { retrieveData } = this;
        retrieveData();
    }

    handleSearch() {
        const { retrieveData } = this;
        retrieveData();
    }

    async retrieveData() {
        const { api } = this.props;
        const { processData } = this;
        const { states, currencyPairs } = this.state.activeFilter;
        if (api === 'ask') {
            const { data } = await tradeAPI.ask({ states, currencyPairs });
            this.setState({
                data: processData(data)
            });
        } else if (api === 'bid') {
            const { data } = await tradeAPI.bid({ states, currencyPairs });
            this.setState({
                data: processData(data)
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
        const { label, subLabel, pageLimit, currentPage = 1, verbose } = this.props;
        const { data, activeFilter } = this.state;
        const { handleToggle, handleSearch } = this;
        const numData = Math.max.apply(null, data.map((column) => column.length));
        const numPages = Math.min(Math.ceil(numData / pageLimit), 1);
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
                                            <div
                                                className={cx('dropdown-element-transition', {
                                                    'dropdown-element-active': activeFilter.states.includes('pending')
                                                })}
                                                onClick={handleToggle('states', 'pending')}
                                            >처리 중</div>
                                            <div
                                                className={cx('dropdown-element-transition', {
                                                    'dropdown-element-active': activeFilter.states.includes('completed')
                                                })}
                                                onClick={handleToggle('states', 'completed')}
                                            >완료</div>
                                            <div
                                                className={cx('dropdown-element-transition', {
                                                    'dropdown-element-active': activeFilter.states.includes('withdrawn')
                                                })}
                                                onClick={handleToggle('states', 'withdrawn')}
                                            >취소됨</div>
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
                                data={data}
                            />
                        </div>
                        {
                            verbose
                                ? <PageShifter numPages={numPages} currentPage={currentPage}/>
                                : null
                        }
                    </div>
                </div>
            </Block>
        );
    }
}

export default TradeDisplayPanel;