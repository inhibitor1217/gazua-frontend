import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import background from 'styles/static/images/background.jpg';

const cx = classNames.bind(style);

const WallpaperBackground = ({ children }) => {
    return (
        <div className={cx('wallpaper-background')}>
            <img src={background} className={cx('wallpaper-background-image')} />
            <div className={cx('wallpaper-background-children')}>
                {children}
            </div>
        </div>
    );
};

export default WallpaperBackground;