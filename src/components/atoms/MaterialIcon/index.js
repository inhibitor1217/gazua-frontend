import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const MaterialIcon = ({ children, md18, md24, md36, md48, dark, light, ...rest }) => {
    return (
        <i className={cx('material-icon', {
            'md-18': md18,
            'md-24': md24,
            'md-36': md36,
            'md-48': md48,
            'md-dark': dark,
            'md-light': light
        })} { ...rest }>
            {children}
        </i>
    );
};

export default MaterialIcon;