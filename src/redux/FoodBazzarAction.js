const foodBazzarActionType = {
  ADD: "ADD_FoodBazzar",
  DELETE: "DELETE_FoodBazzar",
};

const addFoodBazzarAction = (res) => {
  return { type: foodBazzarActionType.ADD, payload: res };
};

const deleteFoodBazzarAction = (index) => {
  return { type: foodBazzarActionType.DELETE, payload: index };
};

export { foodBazzarActionType, addFoodBazzarAction, deleteFoodBazzarAction };
