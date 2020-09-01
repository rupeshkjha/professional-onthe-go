import {
  GET_AUTH_SIGN_IN,
  GET_AUTH_SIGN_IN_SUCCESS,
  GET_AUTH_SIGN_IN_FAIL,
  GET_AUTH_SIGN_OUT,
  GET_AUTH_SIGN_OUT_SUCCESS,
  GET_AUTH_SIGN_OUT_FAIL,
  GET_AUTH_SIGN_UP,
  GET_AUTH_SIGN_UP_SUCCESS,
  GET_AUTH_SIGN_UP_FAIL,
  GET_AUTH_FORGOT_PASSWORD,
  GET_AUTH_FORGOT_PASSWORD_SUCCESS,
  GET_AUTH_FORGOT_PASSWORD_FAIL,
  GET_AUTH_RESET_PASSWORD,
  GET_AUTH_RESET_PASSWORD_SUCCESS,
  GET_AUTH_RESET_PASSWORD_FAIL,
  TUTOR_SIGN_UP,
  TUTOR_SIGN_UP_SUCCESS,
  TUTOR_SIGN_UP_FAIL,
  INIT_APP,
} from "../Type";
const INITIAL = {
  signIn: null,
  signUp: null,
  signOut: null,
  tutorSignUp: null,
  forgotPassword: null,
  resetPassword: null,
  token: "",
  user: {},
  signErr: null
};
export default (state = INITIAL, action) => {
  switch (action.type) {
    case INIT_APP: {
      const user = sessionStorage.getItem("user");
      const token = sessionStorage.getItem("token");
      console.log("INIT APP", sessionStorage);
      return { ...state, user: user, token: token,signErr: null };
    }
    // SIGNIN
    case GET_AUTH_SIGN_IN:
      return { ...state, signIn: null };
    case GET_AUTH_SIGN_IN_SUCCESS: {
      const { token, user } = action.payload;
      console.log(action);
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", JSON.stringify(user));
      return { ...state, user: user, token: token };
    }
    case GET_AUTH_SIGN_IN_FAIL:
      const {error} = action.payload
      return { ...state, user: null ,token: null, signErr: error };

    // SIGNOUT
    case GET_AUTH_SIGN_OUT:
      sessionStorage.clear();
      return { ...state, signOut: null };
    case GET_AUTH_SIGN_OUT_SUCCESS:
      return { ...state, signOut: action.payload };
    case GET_AUTH_SIGN_OUT_FAIL:
      return { ...state, signOut: null };

    // SIGNUP
    case GET_AUTH_SIGN_UP:
      return { ...state, signUp: null };
    case GET_AUTH_SIGN_UP_SUCCESS: {
      const { token, user } = action.payload;
      sessionStorage.setItem("token", token);
      return { ...state, signUp: action.payload };
    }
    case GET_AUTH_SIGN_UP_FAIL:
      const {message} = action.payload
      return { ...state, signErr: message };

    // TUTORSIGNUP
    case TUTOR_SIGN_UP:
      return { ...state, tutorSignUp: null };
    case TUTOR_SIGN_UP_SUCCESS:
      const { token, user } = action.payload;
      sessionStorage.setItem("token", token);
      return { ...state, tutorSignUp: action.payload };
    case TUTOR_SIGN_UP_FAIL:
{      const {message} = action.payload
      console.log("msgerr",message)
      return { ...state, signErr: message };
}
    // FORGOTPASSWORD
    case GET_AUTH_FORGOT_PASSWORD:
      return { ...state, forgotPassword: null };
    case GET_AUTH_FORGOT_PASSWORD_SUCCESS:
      return { ...state, forgotPassword: action.payload };
    case GET_AUTH_FORGOT_PASSWORD_FAIL:
      return { ...state, forgotPassword: null };
    // RESETPASSWORD
    case GET_AUTH_RESET_PASSWORD:
      return { ...state, resetPassword: null };
    case GET_AUTH_RESET_PASSWORD_SUCCESS:
      return { ...state, resetPassword: action.payload };
    case GET_AUTH_RESET_PASSWORD_FAIL:
      return { ...state, resetPassword: null };

    default:
      return state;
  }
};
