import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Block, GradientBar, Tabs, AbbrInfoBox, CurrencyDetailsPanel, TradeDisplayPanel } from 'components';
import { currencyPairs, currencyPairToAbbr } from 'lib/constants';

const cx = classNames.bind(style);

const DetailsPanel = ({ data }) => {
    for (let currencyPair in currencyPairToAbbr) {
        data[currencyPair].currencyAbbr = currencyPairToAbbr[currencyPair];
    }
    return (
        <div className={cx('details-panel')}>
            <Block shadow>
                <div className={cx('details-panel-wrapper')}>
                    <GradientBar warm />
                    <div className={cx('details-panel-header')}>
                        <div className={cx('details-panel-header-title')}>자세히 알아보기</div>
                    </div>
                    <Tabs>
                        <div label='가상화폐 정보'>
                            <Tabs vertical customPadding>
                                {
                                    currencyPairs.map((currencyPair) => {
                                        return (
                                            <div label={currencyPairToAbbr[currencyPair]} tabcomponent={
                                                <Block transparent customMargin>
                                                    <AbbrInfoBox data={data[currencyPair]}/>
                                                </Block>
                                            }>
                                                {<CurrencyDetailsPanel currencyPair={currencyPair} ticker={data[currencyPair]}/>}
                                            </div>
                                        );
                                    })
                                }
                            </Tabs>
                        </div>
                        <div label='거래 내역'>
                            <TradeDisplayPanel
                                label='매수'
                                subLabel='Bids'
                            />
                            <TradeDisplayPanel
                                label='매도'
                                subLabel='Asks'
                            />
                        </div>
                        <div label='내 자산'>
                            History
                        </div>
                    </Tabs>
                </div>
            </Block>
        </div>
    );
};

export default DetailsPanel;