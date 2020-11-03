import { applyMiddleware, compose, createStore } from "redux";
import AuthReducer from "./reducer/AuthReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const AuthStore = createStore(
  AuthReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default AuthStore;
