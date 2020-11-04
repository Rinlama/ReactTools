const restaurantActionType = {
  ADD: "Add",
  DELETE: "Delete",
};

const addRestaurant = (restaurant) => {
  return (dispatch) => {
    dispatch({
      type: restaurantActionType.ADD,
      payload: restaurant,
    });
  };
};

export { restaurantActionType, addRestaurant };
