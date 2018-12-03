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

// action creator
export const changeInput = createAction(CHANGE_INPUT);
export const registerAsk = createAction(REGISTER_ASK, tradeAPI.registerAsk);
export const registerBid = createAction(REGISTER_BID, tradeAPI.registerBid);
export const setError = createAction(SET_ERROR);
export const initForm = createAction(INIT_FORM);

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
    })
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
        onSuccess: (state, action) => initialState,
        onFailure: (state, action) => {
            const { name } = action.payload;
            return state.setIn(['error', name], '서버 에러');
        }
    }),
    ...pender({
        type: REGISTER_BID,
        onSuccess: (state, action) => initialState,
        onFailure: (state, action) => {
            const { name } = action.payload;
            return state.setIn(['error', name], '서버 에러');
        }
    }),
    [INIT_FORM]: (state, action) => initialState
}, initialState);