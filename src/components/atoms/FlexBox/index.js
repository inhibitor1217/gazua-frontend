import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const FlexBox = ({ horizontal, vertical, className, children, ...rest }) => {
    return (
        <div className={cx('flex-box', {
            horizontal,
            vertical
        }, className)} {...rest}>
            { children }
        </div>
    );
};

export default FlexBox;