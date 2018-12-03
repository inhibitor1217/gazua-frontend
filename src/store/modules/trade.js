import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { Map, fromJS } from 'immutable';
import * as tradeAPI from 'apis/trade';

// action types
const CHANGE_INPUT = 'trade/CHANGE_INPUT';
const REGISTER_ASK = 'trade/REGISTER_ASK';
const REGISTER_BID = 'trade/REGISTER_BID';
const SET_ERROR = 'trade/SET_ERROR';
const INIT_FORM = 'trade/INIT_FORM';
const SET_UPDATE_ASK = 'trade/UPDATE_ASK';
const SET_UPDATE_BID = 'trade/UPDATE_BID';

// action creator
export const changeInput = createAction(CHANGE_INPUT);
export const registerAsk = createAction(REGISTER_ASK, tradeAPI.registerAsk);
export const registerBid = createAction(REGISTER_BID, tradeAPI.registerBid);
export const setError = createAction(SET_ERROR);
export const initForm = createAction(INIT_FORM);
export const setUpdateAsk = createAction(SET_UPDATE_ASK);
export const setUpdateBid = createAction(SET_UPDATE_BID);

// initial state
const initialState = Map({
    form: Map({
        askPrice: '',
        askVolume: '',
        bidPrice: '',
        bidVolume: ''
    }),
    error: Map({
        ask: null,
        bid: null
    }),
    updateAsk: false,
    updateBid: false
});

// reducers
export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        const { name, value } = action.payload;
        return state.setIn(['form', name], value);
    },
    [SET_ERROR]: (state, action) => {
        const { name, value } = action.payload;
        return state.setIn(['error', name], value);
    },
    ...pender({
        type: REGISTER_ASK,
        onSuccess: (state, action) => initialState.set('updateAsk', true),
        onFailure: (state, action) => {
            const { name } = action.payload;
            return state.setIn(['error', name], '서버 에러');
        }
    }),
    ...pender({
        type: REGISTER_BID,
        onSuccess: (state, action) => initialState.set('updateBid', true),
        onFailure: (state, action) => {
            const { name } = action.payload;
            return state.setIn(['error', name], '서버 에러');
        }
    }),
    [INIT_FORM]: (state, action) => initialState,
    [SET_UPDATE_ASK]: (state, action) => state.set('updateAsk', action.payload),
    [SET_UPDATE_BID]: (state, action) => state.set('updateBid', action.payload)
}, initialState);