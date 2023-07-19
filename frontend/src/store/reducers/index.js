import localforage from 'localforage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

import UserReducer from './user';

const rootPersistConfig = {
	key: 'root',
	version: 1, //New version 0, default or previous version -1
	storage: localforage,
	stateReconciler: autoMergeLevel2,
	whitelist: ['session', 'test'],
};

const sessionPersistConfig = {
	key: 'session',
	storage: localforage,
	stateReconciler: autoMergeLevel2,
	whitelist: [],
};


const rootReducer = combineReducers({
	session: persistReducer(sessionPersistConfig, sessionReducer),
	UserReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);