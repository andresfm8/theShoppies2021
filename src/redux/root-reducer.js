import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
//callreducers
});

export default persistReducer(persistConfig, rootReducer);