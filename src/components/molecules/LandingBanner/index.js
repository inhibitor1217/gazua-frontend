import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Block, Button } from 'components';
import storage from 'lib/storage';

const cx = classNames.bind(style);

const LandingBanner = () => {
    const link = storage.get('__USER__') ? '/dashboard' : '/login';
    return (
        <div className={cx('landing-banner')}>
            <Block shadow transparent>
                <h2>Bitcoin, Ethereum 투자하고 싶은데 망설여진다면?</h2>
                <h1>가상화폐 모의투자</h1>
                <Link to={link}>
                    <Button large shadow>
                        <div className={cx('landing-banner-button')}>지금 시작하기</div>
                    </Button>
                </Link>
                <h3>실제 가상화폐의 가격 변동에 따라 움직입니다.</h3>
            </Block>
        </div>
    );
};

export default LandingBanner;