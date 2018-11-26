import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Block = ({ children, roundCorner, shadow, transparent, dark, customMargin }) => {
    return (
        <div className={cx('block-wrapper', {
            'block-round-corner': roundCorner,
            'block-shadow': shadow,
            'block-transparent': transparent,
            'block-dark': dark,
            'block-custom-margin': customMargin
        })}>
            <div className={cx('block', {
                'block-transparent': transparent,
                'block-dark': dark
            })}>
                {children}
            </div>
        </div>
    );
};

export default Block;