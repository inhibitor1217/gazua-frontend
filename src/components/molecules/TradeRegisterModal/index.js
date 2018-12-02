import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Block } from 'components';

const cx = classNames.bind(style);

const TradeRegisterModal = () => {
    return (
        <div className={cx('trade-register-modal')}>
            <Block dark>
                <div className={cx('trade-register-modal-content')}>
                    Trade Panel
                </div>
            </Block>
        </div>
    );
};

export default TradeRegisterModal;