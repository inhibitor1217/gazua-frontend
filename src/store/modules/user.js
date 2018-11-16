import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as AuthAPI from 'apis/auth';

// action types
const SET_USER = 'user/SET_USER';
const SET_VALIDATED = 'user/SET_VALIDATED';
const CHECK_STATUS = 'user/CHECK_STATUS';

// action creator
export const setUser = createAction(SET_USER);
export const setValidated = createAction(SET_VALIDATED);
export const checkStatus = createAction(CHECK_STATUS, AuthAPI.checkStatus);

// initial state
const initialState = Map({
    user: null,
    logged: false, // is this client logged in?
    validated: false // is this login info validated by server?
});

// reducers
export default handleActions({
    [SET_USER]: (state, action) => state.set('user', fromJS(action.payload)).set('logged', true),
    [SET_VALIDATED]: (state, action) => state.set('validated', action.payload),
    ...pender({
        type: CHECK_STATUS,
        onPending: (state, action) => state,
        onSuccess: (state, action) => {
            return state.set('user', fromJS(action.payload.data.user)).set('validated', true);
        },
        onFailure: (state, action) => initialState
    })
}, initialState);