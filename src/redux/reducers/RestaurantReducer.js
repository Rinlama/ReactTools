const restaurantState = {
  id: "",
  name: "",
  schedule: "",
  logo: "",
  banner: "",
};

const restaurantReducer = (state = restaurantState, action) => {
  switch (action.type) {
    case "get": {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
};

export default restaurantReducer;
