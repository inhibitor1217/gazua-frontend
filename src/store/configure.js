import { createStore, applyMiddleware, compose } from 'redux';
import modules from './modules';
import penderMiddleware from 'redux-pender';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = initialState => createStore(
    modules, initialState, composeEnhancers(applyMiddleware(penderMiddleware()))
);

export default configureStore;