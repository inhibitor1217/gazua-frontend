import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

// action types
const SET_PHASE = 'register/SET_PHASE';

// action creator
export const setPhase = createAction(SET_PHASE);

// initial state
const initialState = Map({
    phase: 1
});

// reducers
export default handleActions({
    [SET_PHASE]: (state, action) => {
        return state.set('phase', fromJS(action.payload));
    }
}, initialState);