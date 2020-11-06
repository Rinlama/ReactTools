import { combineReducers, createStore } from "redux";
import foodBazzarReducer from "./FoodBazzarReducer";
import restaurantReducer from "./RestaurantReducer";

const rootReducer = {
  restaurant: restaurantReducer,
  foodBazzar: foodBazzarReducer,
};

const store = createStore(
  combineReducers(rootReducer),
  { restaurant: [1, 2], foodBazzar: [4.4] },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
