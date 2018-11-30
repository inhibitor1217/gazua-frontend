import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Block, GradientBar, Tabs } from 'components';

const cx = classNames.bind(style);

const DetailsPanel = () => {
    return (
        <div className={cx('details-panel')}>
            <Block shadow>
                <div className={cx('details-panel-wrapper')}>
                    <GradientBar warm />
                    <div className={cx('details-panel-header')}>
                        <div className={cx('details-panel-header-title')}>자세히 알아보기</div>
                    </div>
                    <Tabs>
                        <div label='History'>
                            History
                        </div>
                        <div label='Trades'>
                            Trades
                        </div>
                        <div label='Currencies'>
                            Currencies
                        </div>
                    </Tabs>
                </div>
            </Block>
        </div>
    );
};

export default DetailsPanel;