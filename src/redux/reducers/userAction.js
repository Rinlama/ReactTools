import axios from "axios";

const userActionType = {
  GET: "GET_USER",
};

const GetUserAction = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const { data } = res;
      dispatch({ type: userActionType.GET, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
};

export { GetUserAction, userActionType };
