import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const GradientBackground = ({ children }) => {
    return (
        <div className={cx('gradient-background')}>
            <div className={cx('gradient-background-children')}>
                {children}
            </div>
        </div>
    );
};

export default GradientBackground;