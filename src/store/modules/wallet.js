import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as walletAPI from 'apis/wallet';

// action types
const SET_WALLET = 'wallet/SET_WALLET';
const LOGOUT = 'wallet/LOGOUT';

// action creator
export const setWallet = createAction(SET_WALLET, walletAPI.wallet);
export const logout = createAction(LOGOUT);

// initial state
const initialState = Map({
    krw: 'N/A',
    btc_krw: 'N/A',
    etc_krw: 'N/A',
    eth_krw: 'N/A',
    xrp_krw: 'N/A',
    bch_krw: 'N/A',
    ltc_krw: 'N/A',
    lastUpdated: null
});

// reducers
export default handleActions({
    ...pender({
        type: SET_WALLET,
        onPending: (state, action) => state,
        onSuccess: (state, action) => {
            const { wallet } = action.payload.data.userdata;
            let newState = state;
            for (let key in wallet) {
                newState = newState.set(key, wallet[key]);
            }
            return newState;
        },
        onFailure: (state, action) => state
    }),
    [LOGOUT]: (state, action) => initialState
}, initialState);