import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as tickerAPI from 'apis/ticker';

// action types
const SET_TICKER = 'ticker/SET_TICKER';
const SET_HIGHLIGHT = 'ticker/SET_HIGHLIGHT';

// action creator
export const setTicker = createAction(SET_TICKER, tickerAPI.ticker);
export const setHighlight = createAction(SET_HIGHLIGHT);

// initial state
const initialState = Map({
    tickers: Map({
        btc_krw: Map({}),
        etc_krw: Map({}),
        eth_krw: Map({}),
        xrp_krw: Map({}),
        bch_krw: Map({}),
        ltc_krw: Map({})
    }),
    highlights: Map({
        btc_krw: false,
        etc_krw: false,
        eth_krw: false,
        xrp_krw: false,
        bch_krw: false,
        ltc_krw: false
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
    }),
    [SET_HIGHLIGHT]: (state, action) => {
        const { currencyPair, value } = action.payload;
        return state.setIn(['highlights', currencyPair], value);
    }
}, initialState);