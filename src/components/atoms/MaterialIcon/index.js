import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const MaterialIcon = ({ children, ...rest }) => {
    const {
        'md-18': md18,
        'md-24': md24,
        'md-36': md36,
        'md-48': md48,
        'md-dark': mdDark,
        'md-light': mdLight
    } = rest;
    return (
        <i className={cx('material-icon', {
            'md-18': md18,
            'md-24': md24,
            'md-36': md36,
            'md-48': md48,
            'md-dark': mdDark,
            'md-light': mdLight
        })} { ...rest }>
            {children}
        </i>
    );
};

export default MaterialIcon;