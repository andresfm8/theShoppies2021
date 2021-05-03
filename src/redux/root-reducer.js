import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import moviesReducer from './movies/movies.reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: 'movies'
}

const rootReducer = combineReducers({
  movies: moviesReducer
});

export default persistReducer(persistConfig, rootReducer);