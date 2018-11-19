import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const WallpaperBackground = ({ children, background }) => {
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