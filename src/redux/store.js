import { applyMiddleware, compose, createStore } from "redux";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  userReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
