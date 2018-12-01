import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Block, GradientBar, Tabs, AbbrInfoBox, CurrencyDetailsPanel } from 'components';

const cx = classNames.bind(style);

const currencyPairs = ['btc_krw', 'etc_krw', 'eth_krw', 'xrp_krw', 'bch_krw', 'ltc_krw'];
const currencyPairToAbbr = {
    'btc_krw': 'BTC',
    'etc_krw': 'ETC',
    'eth_krw': 'ETH',
    'xrp_krw': 'XRP',
    'bch_krw': 'BCH',
    'ltc_krw': 'LTC'
};

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
                                                {<CurrencyDetailsPanel currencyPair={currencyPair} />}
                                            </div>
                                        );
                                    })
                                }
                            </Tabs>
                        </div>
                        <div label='거래 내역'>
                            Trades
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