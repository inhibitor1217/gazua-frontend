import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Button = ({ children, className, roundCorner }) => {
    return (
        <div className={cx('button', {
            'round-corner': roundCorner
        }, className)}>
            {children}
        </div>
    );
};

export default Button;