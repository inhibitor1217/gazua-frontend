import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const PageTemplate = ({ header, background, children, responsive }) => {
    return (
        <div className={cx('wrapper')}>
            <header>
                {header}
            </header>
            <div className={cx('background')}>
                {background}
            </div>
            <div className={cx('content', {
                'has-header': header,
                responsive
            })}>
                {children}
            </div>
        </div>
    );
};

export default PageTemplate;