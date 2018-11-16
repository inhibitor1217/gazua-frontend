import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Button = (
    {
        children,
        className,
        transparent,
        roundCorner,
        shadow,
        large,
        flex,
        flexChild,
        onClick
    }
) => {
    return (
        <div
            className={cx('button', {
                'button-round-corner': roundCorner,
                'button-transparent': transparent,
                'button-shadow': shadow,
                'button-large': large,
                'button-flex': flex,
                'button-flex-child': flexChild
            }, className)}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Button;