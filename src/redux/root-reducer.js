import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import moviesReducer from './movies/movies.reducer';
import nomineeListReducer from './nominee-list/nominee-list.reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['movies', 'nomineeList']
}

const rootReducer = combineReducers({
  movies: moviesReducer,
  nomineeList: nomineeListReducer
});

export default persistReducer(persistConfig, rootReducer);