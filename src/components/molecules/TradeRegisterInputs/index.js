import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Input, InputError, MaterialIcon } from 'components';

const cx = classNames.bind(style);

const TradeRegisterInputs = ({ form, error, onChange, type }) => {
    const { askPrice, askVolume, bidPrice, bidVolume } = form.toJS();
    const { ask: askError, bid: bidError } = error ? error.toJS() : {};
    return (
        <div className={cx('trade-register-inputs')}>
            <Input
                name={type === 'ask' ? 'askPrice' : 'bidPrice'}
                value={type === 'ask' ? askPrice : bidPrice}
                onChange={onChange}
                fullWidth big dark
                placeholder="거래 가격"
            />
            <Input
                name={type === 'ask' ? 'askVolume' : 'bidVolume'}
                value={type === 'ask' ? askVolume : bidVolume}
                onChange={onChange}
                fullWidth big dark
                placeholder="거래량"
            />
            <InputError error={type === 'ask' ? askError : bidError} />
        </div>
    );
};

export default TradeRegisterInputs;