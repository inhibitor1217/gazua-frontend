import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Block, GradientBar, Tabs, AbbrInfoBox } from 'components';

const cx = classNames.bind(style);

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
                                <div label='BTC' tabcomponent={
                                    <Block transparent customMargin>
                                        <AbbrInfoBox data={data['btc_krw']}/>
                                    </Block>
                                }>
                                    BTC
                                </div>
                                <div label='ETC' tabcomponent={
                                    <Block transparent customMargin>
                                        <AbbrInfoBox data={data['etc_krw']}/>
                                    </Block>
                                }>
                                    ETC
                                </div>
                                <div label='ETH' tabcomponent={
                                    <Block transparent customMargin>
                                        <AbbrInfoBox data={data['eth_krw']}/>
                                    </Block>
                                }>
                                    ETH
                                </div>
                                <div label='XRP' tabcomponent={
                                    <Block transparent customMargin>
                                        <AbbrInfoBox data={data['xrp_krw']}/>
                                    </Block>
                                }>
                                    XRP
                                </div>
                                <div label='BCH' tabcomponent={
                                    <Block transparent customMargin>
                                        <AbbrInfoBox data={data['bch_krw']}/>
                                    </Block>
                                }>
                                    BCH
                                </div>
                                <div label='LTC' tabcomponent={
                                    <Block transparent customMargin>
                                        <AbbrInfoBox data={data['ltc_krw']}/>
                                    </Block>
                                }>
                                    LTC
                                </div>
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