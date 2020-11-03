import ActionType from "../actions/ActionType";
import axios from "axios";

const authState = {
  isLoggedIn: false,
  user: {
    id: "",
    token: "",
    name: "",
    expires_at: "",
    roles: [],
  },
};

const AuthReducer = (state = authState, action) => {
  if (!state.isLoggedIn) {
    state = jwtLocalStorage.isExpire();
  }
  switch (action.type) {
    case ActionType.LOGIN_SUCCESS:
      return { ...state, ...action.payload };
    case ActionType.LOGIN_FAIL:
      return state;
    case ActionType.LOGOUT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const jwtLocalStorage = {
  isExpire: () => {
    const user = localStorage.getItem("user");
    try {
      let auth = JSON.parse(user);
      const { expires_at, token } = auth.user;
      const currentDate = new Date();
      if (new Date(expires_at) > currentDate) {
        auth = { ...auth, ...{ isLoggedIn: true } };
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return auth;
      }
      auth = { isLoggedIn: false, user: {} };
      return auth;
    } catch (error) {
      console.error(error);
      return { isLoggedIn: false, user: {} };
    }
  },
};

export default AuthReducer;
