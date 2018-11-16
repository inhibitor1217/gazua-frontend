import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

// action types
const SET_USER = 'user/SET_USER';

// action creator
export const setUser = createAction(SET_USER);

// initial state
const intialState = Map({
    user: null
});

// reducers
export default handleActions({
    [SET_USER]: (state, action) => {
        const user = action.payload;
        return state.set('user', fromJS(user));
    }
}, intialState);