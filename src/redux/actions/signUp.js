import { SIGN_UP, SHOW_SIGN_UP_MODAL } from "../../constants";

export const signUp = (userInfo) => {
  return {
    type: SIGN_UP,
    payload: userInfo,
  }
};


export const showSignUpModal = (showUp = false) => {
  return {
    type: SHOW_SIGN_UP_MODAL,
    payload: showUp,
  }
};
