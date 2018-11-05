import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const ContentDivisor = ({ leftChild, rightChild, separateByBar, shade }) => {
    return (
        <div className={cx('content-divisor')}>
            <div className={cx('content-divisor-left-child', { 'shade': shade === 'left' })}>
                { leftChild }
            </div>
            <div className={cx({ 'content-divisor-separate-by-bar': separateByBar })}>
            </div>
            <div className={cx('content-divisor-right-child', { 'shade': shade === 'right' })}>
                { rightChild }
            </div>
        </div>
    );
};

export default ContentDivisor;