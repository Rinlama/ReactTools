import axios from "axios";
import AuthService from "../../services/AuthService";
import ActionType from "./ActionType";

function AuthAction() {
  const Login = (email, password, history) => {
    return async (dispatch) => {
      try {
        const res = await AuthService().login(email, password);
        const { name, expires_at, jwttoken, authorities } = res.data;

        const payload = {
          isLoggedIn: true,
          user: {
            id: 1,
            token: jwttoken,
            name: name,
            expires_at: expires_at,
            roles: authorities,
          },
        };
        axios.defaults.headers.common["Authorization"] = `Bearer ${jwttoken}`;

        dispatch({
          type: ActionType.LOGIN_SUCCESS,
          payload,
        });

        localStorage.setItem("user", JSON.stringify(payload));
        history.push("/store");
      } catch (error) {
        alert(error);
        dispatch({ type: ActionType.LOGIN_FAIL, payload: "" });
      }
    };
  };

  const LogOut = (history) => {
    return async (dispatch) => {
      const res = await AuthService().logout();
      const { data } = res;
      if (
        data.hasOwnProperty("message") &&
        data.message != "Logout succesfully"
      ) {
        throw new Error(res.data);
      }
      const payload = {
        isLoggedIn: false,
        user: {},
      };
      dispatch({
        type: ActionType.LOGOUT,
        payload,
      });
      localStorage.removeItem("user");
      history.push("/");
    };
  };

  return { Login, LogOut };
}

export default AuthAction;
