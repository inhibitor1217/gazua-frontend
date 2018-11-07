import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import penderMiddleware from 'redux-pender';

const configureStore = initialState => createStore(
    modules, initialState, applyMiddleware(penderMiddleware())
);

export default configureStore;