const restaurantActionType = {
  ADD: "ADD_Restaurant",
  DELETE: "DELETE_Restaurant",
};

const addRestaurantAction = (res) => {
  return { type: restaurantActionType.ADD, payload: res };
};

const deleteRestaurantAction = (index) => {
  return { type: restaurantActionType.DELETE, payload: index };
};

export { restaurantActionType, addRestaurantAction, deleteRestaurantAction };
