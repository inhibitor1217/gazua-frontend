import React, { Component } from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Block, MaterialIcon, Chart, PageShifter } from 'components';
import { currencyPairs, currencyPairToAbbr } from 'lib/constants';
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

        this.retrieveData = this.retrieveData.bind(this);
        this.processData = this.processData.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    componentWillMount() {

    }

    async retrieveData() {
        const { api } = this.props;
    }

    processData() {

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
        const { handleToggle } = this;
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
                                ? <div className={cx('trade-display-panel-filter')}>
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
                                : null
                        }
                        <div className={cx('trade-display-panel-content')}>
                            <Chart
                                labels={[
                                    '화폐', '가격', '수량', '미체결잔량', '상태', '시간'
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