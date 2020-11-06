const restaurantActionType = {
  ADD: "ADD",
  DELETE: "DELETE",
};

const addRestaurantAction = (res) => {
  return { type: restaurantActionType.ADD, payload: res };
};

const deleteRestaurantAction = (index) => {
  return { type: restaurantActionType.DELETE, payload: index };
};

export { restaurantActionType, addRestaurantAction, deleteRestaurantAction };
