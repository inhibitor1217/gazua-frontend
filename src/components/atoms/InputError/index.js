import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const InputError = ({ error }) => {
    if (!error) {
        return null;
    }
    return (
        <div className={cx('input-error')}>
            {error}
        </div>
    );
};

export default InputError;