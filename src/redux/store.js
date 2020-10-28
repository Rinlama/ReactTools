import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import restaurantReducer from "./reducers/RestaurantReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const RestaurantStore = createStore(
  restaurantReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default RestaurantStore;
