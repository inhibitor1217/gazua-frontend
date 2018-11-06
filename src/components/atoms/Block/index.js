import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Block = ({ children, roundCorner, shadow }) => {
    return (
        <div className={cx('block-wrapper', {
            'block-round-corner': roundCorner,
            'block-shadow': shadow
        })}>
            <div className={cx('block')}>
                {children}
            </div>
        </div>
    );
};

export default Block;