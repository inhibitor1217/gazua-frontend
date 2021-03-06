import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import { Map, fromJS } from 'immutable';
import * as AuthAPI from 'apis/auth';

// action types
const SET_PHASE = 'register/SET_PHASE';
const SET_ERROR = 'register/SET_ERROR';
const CHANGE_INPUT = 'register/CHANGE_INPUT';
const CHECK_EMAIL = 'register/CHECK_EMAIL';
const LOCAL_REGISTER = 'register/LOCAL_REGISTER';
const INIT_FORM = 'register/INIT_FORM';

// action creator
export const setPhase = createAction(SET_PHASE);
export const setError = createAction(SET_ERROR);
export const changeInput = createAction(CHANGE_INPUT);
export const checkEmail = createAction(CHECK_EMAIL, AuthAPI.checkEmail);
export const localRegister = createAction(LOCAL_REGISTER, AuthAPI.localRegister);
export const initForm = createAction(INIT_FORM);

// initial state
const initialState = Map({
    phase: 1,
    error: null,
    form: Map({
        email: '',
        password: '',
        confirmPassword: '',
        username: ''
    })
});

// reducers
export default handleActions({
    [SET_PHASE]: (state, action) => state.set('phase', fromJS(action.payload)),
    [SET_ERROR]: (state, action) => state.set('error', fromJS(action.payload)),
    [CHANGE_INPUT]: (state, action) => {
        const { name, value } = action.payload;
        return state.setIn(['form', name], value);
    },
    ...pender({
        type: CHECK_EMAIL,
        onPending: (state, action) => state,
        onSuccess: (state, action) => state,
        onFailure: (state, action) => state.set('error', fromJS('서버 에러'))
    }),
    ...pender({
        type: LOCAL_REGISTER,
        onPending: (state, action) => state,
        onSuccess: (state, action) => state,
        onFailure: (state, action) => state.set('error', fromJS('서버 에러'))
    }),
    [INIT_FORM]: (state, action) => initialState
}, initialState);