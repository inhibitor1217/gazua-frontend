import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { Block, ContentDivisor, GradientBar, TradeRegisterInputs, Button } from 'components';

const cx = classNames.bind(style);

const TradeRegisterModal = ({
    form,
    error,
    onChangeInput,
    onRegisterAsk,
    onRegisterBid
}) => {
    return (
        <div>
            <Block dark shadow>
                <div className={cx('trade-register-modal')}>
                    <GradientBar dark/>
                    <div className={cx('trade-register-modal-title')}>
                        거래하기
                    </div>
                    <ContentDivisor
                        separateByBar
                        leftChild={
                            <div className={cx('trade-register-modal-content')}>
                                <div className={cx('trade-register-modal-text-large')}>매도</div>
                                <TradeRegisterInputs form={form} error={error} type='bid' onChange={onChangeInput}/>
                                <Button large shadow onClick={onRegisterBid}>주문 추가</Button>
                            </div>
                        }
                        rightChild={
                            <div className={cx('trade-register-modal-content')}>
                                <div className={cx('trade-register-modal-text-large')}>매수</div>
                                <TradeRegisterInputs form={form} error={error} type='ask' onChange={onChangeInput}/>
                                <Button large shadow onClick={onRegisterAsk}>주문 추가</Button>
                            </div>
                        }
                    />
                </div>
            </Block>
        </div>
    );
};

export default TradeRegisterModal;