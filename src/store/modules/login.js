import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { Map, fromJS } from 'immutable';
import * as AuthAPI from 'apis/auth';

// action types
const CHANGE_INPUT = 'login/CHANGE_INPUT';
const LOCAL_LOGIN = 'login/LOCAL_LOGIN';
const SET_ERROR = 'login/SET_ERROR';
const INIT_FORM = 'login/INIT_FORM';

// action creator
export const changeInput = createAction(CHANGE_INPUT);
export const localLogin = createAction(LOCAL_LOGIN, AuthAPI.localLogin);
export const setError = createAction(SET_ERROR);
export const initForm = createAction(INIT_FORM);

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
    },
    [SET_ERROR]: (state, action) => {
        return state.set('error', fromJS(action.payload));
    },
    ...pender({
        type: LOCAL_LOGIN,
        onPending: (state, action) => state,
        onSuccess: (state, action) => {
            console.log(action.payload);
            const loginResult = action.payload.data;
            return state
                .set('loginResult', loginResult)
                .set('error', null);
        },
        onFailure: (state, action) => state.set('error', fromJS({ error: '서버 에러' }))
    }),
    [INIT_FORM]: (state, action) =>
        state.setIn(['form', 'email'], '')
            .setIn(['form', 'password'], '')
}, initialState);