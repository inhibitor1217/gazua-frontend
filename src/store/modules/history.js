import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as historyAPI from 'apis/history';

// action types
const SET_LAST_HISTORY = 'history/SET_LAST_HISTORY';
const SET_YESTERDAY_HISTORY = 'history/SET_YESTERDAY_HISTORY';
const LOGOUT = 'history/LOGOUT';

// action creator
export const setLastHistory = createAction(SET_LAST_HISTORY, historyAPI.lastHistory);
export const setYesterdayHistory = createAction(SET_YESTERDAY_HISTORY, historyAPI.yesterdayHistory);
export const logout = createAction(LOGOUT);

// initial state
const initialState = Map({
    wallet: Map({
        last: null,
        yesterday: null
    })
});

// reducers
export default handleActions({
    ...pender({
        type: SET_LAST_HISTORY,
        onPending: (state, action) => state,
        onSuccess: (state, action) => {
            const { userHistory } = action.payload.data;
            return state.setIn(['wallet', 'last'], userHistory);
        },
        onFailure: (state, action) => state
    }),
    ...pender({
        type: SET_YESTERDAY_HISTORY,
        onPending: (state, action) => state,
        onSuccess: (state, action) => {
            const { userHistory } = action.payload.data;
            return state.setIn(['wallet', 'yesterday'], userHistory);
        },
        onFailure: (state, action) => state
    }),
    [LOGOUT]: (state, action) => initialState
}, initialState);