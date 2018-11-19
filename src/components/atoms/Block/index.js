import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Block = ({ children, roundCorner, shadow, transparent }) => {
    return (
        <div className={cx('block-wrapper', {
            'block-round-corner': roundCorner,
            'block-shadow': shadow,
            'block-transparent': transparent
        })}>
            <div className={cx('block', {
                'block-transparent': transparent
            })}>
                {children}
            </div>
        </div>
    );
};

export default Block;