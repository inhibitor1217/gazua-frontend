import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TradeRegisterModal } from 'components';
import * as tradeActions from 'store/modules/trade';

class TradeRegisterModalContainer extends Component {
    constructor(props) {
        super(props);

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onRegisterAsk = this.onRegisterAsk.bind(this);
        this.onRegisterBid = this.onRegisterBid.bind(this);
    }

    onChangeInput(event) {
        const { TradeActions } = this.props;
        const { name, value } = event.target;
        TradeActions.changeInput({ name, value });
    }

    async onRegisterAsk() {
        const { TradeActions, form, currencyPair } = this.props;
        const { askPrice, askVolume } = form.toJS();

        if (askPrice === '') {
            TradeActions.setError({ name: 'ask', value: '거래 가격을 입력해 주세요.' });
            return;
        }

        if (askVolume === '') {
            TradeActions.setError({ name: 'ask', value: '거래량을 입력해 주세요.' });
            return;
        }

        const _askPrice = +askPrice;
        const _askVolume = +askVolume;
        if (isNaN(_askPrice) || isNaN(_askVolume)) {
            TradeActions.setError({ name: 'ask', value: '숫자만 입력 가능합니다.' });
            return;
        }

        try {
            await TradeActions.registerAsk({ currencyPair, price: _askPrice, volume: _askVolume });
        } catch (e) {
            if (e.response) {
                if (e.response.status === 400) {
                    if (e.response.data.message === 'invalid price') {
                        TradeActions.setError({ name: 'ask', value: '거래 가격이 형식에 맞지 않습니다.\n최소, 최대 거래 가격과 최소 거래 단위를 확인해 주세요.' });
                        return;
                    }
                    if (e.response.data.message === 'invalid volume') {
                        TradeActions.setError({ name: 'ask', value: '거래량이 형식에 맞지 않습니다.\n최소, 최대 거래량을 확인해 주세요.' });
                        return;
                    }
                }
            }
            console.log(e);
            TradeActions.setError({ name: 'ask', value: '서버 에러' });
        }
    }

    async onRegisterBid() {
        const { TradeActions, form, currencyPair } = this.props;
        const { bidPrice, bidVolume } = form.toJS();

        if (bidPrice === '') {
            TradeActions.setError({ name: 'bid', value: '거래 가격을 입력해 주세요.' });
            return;
        }

        if (bidVolume === '') {
            TradeActions.setError({ name: 'bid', value: '거래량을 입력해 주세요.' });
            return;
        }

        const _bidPrice = +bidPrice;
        const _bidVolume = +bidVolume;
        if (isNaN(_bidPrice) || isNaN(_bidVolume)) {
            TradeActions.setError({ name: 'bid', value: '숫자만 입력 가능합니다.' });
            return;
        }

        try {
            await TradeActions.registerBid({ currencyPair, price: _bidPrice, volume: _bidVolume });
        } catch (e) {
            if (e.response) {
                if (e.response.status === 400) {
                    if (e.response.data.message === 'invalid price') {
                        TradeActions.setError({ name: 'bid', value: '거래 가격이 형식에 맞지 않습니다.\n최소, 최대 거래 가격과 최소 거래 단위를 확인해 주세요.' });
                        return;
                    }
                    if (e.response.data.message === 'invalid volume') {
                        TradeActions.setError({ name: 'bid', value: '거래량이 형식에 맞지 않습니다.\n최소, 최대 거래량을 확인해 주세요.' });
                        return;
                    }
                }
            }
            console.log(e);
            TradeActions.setError({ name: 'bid', value: '서버 에러' });
        }
    }

    render() {
        const { form, error } = this.props;
        const { onChangeInput, onRegisterAsk, onRegisterBid } = this;
        return (
            <TradeRegisterModal
                form={form}
                error={error}
                onChangeInput={onChangeInput}
                onRegisterAsk={onRegisterAsk}
                onRegisterBid={onRegisterBid}
            />
        );
    }
}

export default connect(
    // mapStateToProps
    (state) => ({
        form: state.trade.get('form'),
        error: state.trade.get('error')
    }),
    // mapDispatchtoProps
    (dispatch) => ({
        TradeActions: bindActionCreators(tradeActions, dispatch)
    })
)(TradeRegisterModalContainer);