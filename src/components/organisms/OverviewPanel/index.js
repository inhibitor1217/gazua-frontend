import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Block, AssetPanel } from 'components';

const cx = classNames.bind(style);

const OverviewPanel = () => {
    return (
        <div className={cx('overview-panel')}>
            <Block shadow>
                <div className={cx('overview-panel-wrapper')}>
                    <div className={cx('overview-panel-header')}>
                        <div className={cx('overview-panel-header-title')}>개요</div>
                        <div className={cx('overview-panel-header-username')}>[user_username]</div>
                    </div>
                    <div className={cx('overview-panel-content')}>
                        <div className={cx('overview-panel-content-box')}>
                            <AssetPanel />
                        </div>
                        <div className={cx('overview-panel-content-box')}>
                            차트
                        </div>
                        <div className={cx('overview-panel-content-box')}>
                            최근 거래 내역
                        </div>
                    </div>
                </div>
            </Block>
        </div>
    );
};

export default OverviewPanel;