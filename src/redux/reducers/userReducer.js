import { userActionType } from "./userAction";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case userActionType.GET:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
