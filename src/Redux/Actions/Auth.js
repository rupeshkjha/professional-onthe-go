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
} from "../Type";
import {
  signIn,
  signUp,
  signOut,
  forgotPassword,
  resetPassword,
  tutorSignUp,
} from "../../Api/Auth";

export const signInAction = (username, password) => async (dispatch) => {
  dispatch({ type: GET_AUTH_SIGN_IN });
  const res = await signIn(username, password);
  if (res && res.data && res.data) {
    dispatch({ type: GET_AUTH_SIGN_IN_SUCCESS, payload: res.data });
  } else {
    dispatch({ type: GET_AUTH_SIGN_IN_FAIL, payload: res });
  }
};
export const signUpAction = (payload) => async (dispatch) => {
  dispatch({ type: GET_AUTH_SIGN_UP });
  const res = await signUp(payload);
  if (res && res.data && res.data.data) {
    dispatch({ type: GET_AUTH_SIGN_UP_SUCCESS, payload: res.data.data });
  } else {
    dispatch({ type: GET_AUTH_SIGN_UP_FAIL, payload: res });
  }
};
export const tutorSignUpAction = (payload) => async (dispatch) => {
  dispatch({ type: TUTOR_SIGN_UP });
  const res = await tutorSignUp(payload);
  if (res && res.data && res.data.data) {
    dispatch({ type: TUTOR_SIGN_UP_SUCCESS, payload: res.data.data });
  } else {
    dispatch({ type: TUTOR_SIGN_UP_FAIL, payload: res });
  }
};
export const signOutAction = () => async (dispatch) => {
  dispatch({ type: GET_AUTH_SIGN_OUT });
  const res = await signOut();
  if (res && res.data && res.data.data) {
    dispatch({ type: GET_AUTH_SIGN_OUT_SUCCESS, payload: res.data.data });
  } else {
    dispatch({ type: GET_AUTH_SIGN_OUT_FAIL, payload: null });
  }
};
export const forgotPasswordAction = (payload) => async (dispatch) => {
  dispatch({ type: GET_AUTH_FORGOT_PASSWORD });
  const res = await forgotPassword(payload);
  if (res && res.data && res.data.data) {
    dispatch({
      type: GET_AUTH_FORGOT_PASSWORD_SUCCESS,
      payload: res.data.data,
    });
  } else {
    dispatch({ type: GET_AUTH_FORGOT_PASSWORD_FAIL, payload: null });
  }
};
export const resetPasswordAction = (payload) => async (dispatch) => {
  dispatch({ type: GET_AUTH_RESET_PASSWORD });
  const res = await resetPassword(payload);
  if (res && res.data && res.data.data) {
    dispatch({
      type: GET_AUTH_RESET_PASSWORD_SUCCESS,
      payload: res.data.data,
    });
  } else {
    dispatch({ type: GET_AUTH_RESET_PASSWORD_FAIL, payload: null });
  }
};
