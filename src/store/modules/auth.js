import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as AuthAPI from 'apis/auth';

// action types
const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const LOCAL_LOGIN = 'auth/LOCAL_LOGIN';

// action creator
export const changeInput = createAction(CHANGE_INPUT);
export const localLogin = createAction(LOCAL_LOGIN, AuthAPI.localLogin);

// initial state
const initialState = Map({
    form: Map({
        email: '',
        password: ''
    }),
    error: null,
    loginResult: null
});

// reducers
export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        const { name, value } = action.payload;
        return state.setIn(['form', name], value);
    }
}, initialState);