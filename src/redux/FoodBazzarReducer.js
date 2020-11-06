import { foodBazzarActionType } from "./FoodBazzarAction";

const foodBazzarState = [];

const foodBazzarReducer = (state = foodBazzarState, action) => {
  switch (action.type) {
    case foodBazzarActionType.ADD:
      state.push(action.payload);
      return [...state];

    case foodBazzarActionType.DELETE:
      state.splice(action.payload, 1);
      return [...state];
    default:
      return state;
  }
};

export default foodBazzarReducer;
