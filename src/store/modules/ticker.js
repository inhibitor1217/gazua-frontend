import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as tickerAPI from 'apis/ticker';

// action types
const SET_TICKER = 'ticker/SET_TICKER';

// action creator
export const setTicker = createAction(SET_TICKER, tickerAPI.ticker);

// initial state
const initialState = Map({
    tickers: Map({
        btc_krw: Map({}),
        etc_krw: Map({}),
        eth_krw: Map({}),
        xrp_krw: Map({}),
        bch_krw: Map({}),
        ltc_krw: Map({})
    })
});

// reducers
export default handleActions({
    ...pender({
        type: SET_TICKER,
        onPending: (state, action) => state,
        onSuccess: (state, action) => {
            const { currencyPair, ticker } = action.payload.data[0];
            return state.setIn(['tickers', currencyPair], ticker);
        },
        onFailure: (state, action) => state
    })
}, initialState);