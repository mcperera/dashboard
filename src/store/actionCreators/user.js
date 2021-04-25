import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from "../actionTypes/user";
import { api_signIn } from "../../api/auth";

const signIn = (history, credentials) => {
  return (dispatch) => {
    api_signIn(credentials)
      .then((res) => {
        console.log("res-->", res);
        const token = res.data.token;
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: { user: { token, username: credentials.username } },
        });
        history.push("/");
      })
      .catch((error) => {
        console.log("err-->", error);
        alert("Please check your credentials and try again!");
      });
  };
};

const signOut = (history) => {
  return (dispatch) => {
    dispatch({ type: USER_LOGOUT_SUCCESS });
    history.push("/login");
  };
};

export { signIn, signOut };
