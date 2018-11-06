import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import ReduxThunk from 'redux-thunk';

const configureStore = initialState => createStore(modules, initialState, applyMiddleware(ReduxThunk));

export default configureStore;