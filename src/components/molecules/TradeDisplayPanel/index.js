import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Block, MaterialIcon, Chart, PageShifter } from 'components';
import { currencyPairs, currencyPairToAbbr } from 'lib/constants';

const cx = classNames.bind(style);

const TradeDisplayPanel = ({ label, subLabel }) => {
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
                    <div className={cx('trade-display-panel-filter')}>
                        <button className={cx('trade-display-panel-filter-dropdown-button')}>
                            <div>필터</div>
                            <MaterialIcon md18>arrow_drop_down</MaterialIcon>
                        </button>
                        <div className={cx('trade-display-panel-filter-dropdown-content')}>
                            <div>상태</div>
                            <div className={cx('dropdown-element-transition')}>처리 중</div>
                            <div className={cx('dropdown-element-transition')}>완료</div>
                            <div className={cx('dropdown-element-transition')}>취소됨</div>
                            <div>화폐</div>
                            {
                                currencyPairs.map((pair) => {
                                    return (
                                        <div className={cx('dropdown-element-transition')} key={`filter-dropdown-${pair}`}>
                                            {currencyPairToAbbr[pair]}
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className={cx('trade-display-panel-content')}>
                        <Chart
                            labels={[
                                '화폐', '가격', '수량', '미체결잔량', '상태', '시간'
                            ]}
                            data={[[], [], [], [], [], []]}
                        />
                    </div>
                    <PageShifter numPages={1} currentPage={1}/>
                </div>
            </div>
        </Block>
    );
};

export default TradeDisplayPanel;