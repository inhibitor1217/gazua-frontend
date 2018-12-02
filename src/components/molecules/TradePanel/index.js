import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Block } from 'components';

const cx = classNames.bind(style);

const TradePanel = () => {
    return (
        <div className={cx('trade-panel')}>
            <Block dark>
                <div className={cx('trade-panel-content')}>
                    Trade Panel
                </div>
            </Block>
        </div>
    );
};

export default TradePanel;