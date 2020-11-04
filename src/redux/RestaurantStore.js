import { createStore } from "redux";
import restaurantReducer from "./reducers/RestaurantReducer";

const RestaurantStore = createStore(
  restaurantReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default RestaurantStore;
