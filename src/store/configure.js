import { createStore } from 'redux';
import modules from './modules';

const configureStore = initialState => createStore(modules, initialState);

export default configureStore;