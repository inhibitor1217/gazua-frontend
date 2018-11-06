import { combineReducers } from 'redux';

const req = require.context('.', true, /^(?!.\/index).*.js$/);

const modules = {};

req.keys().forEach((key) => {
    const regex = /.\/(.*?).js$/;
    const moduleName = regex.test(key) && key.match(regex)[1];
    modules[moduleName] = req(key).default;
});

export default combineReducers(modules);