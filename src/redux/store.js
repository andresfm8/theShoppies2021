import { createStore, applyMiddleware } from "redux";
import persistStore from "redux-persist/es/persistStore";
import rootReducer from "./root-reducer";

const middlewares = [];

if(process.env.NODE_ENV === 'development') {
  middlewares.push();
}

const store = createStore(
  rootReducer, 
  applyMiddleware(...middlewares)
);

const persistor = persistStore(store);

export { store, persistor };