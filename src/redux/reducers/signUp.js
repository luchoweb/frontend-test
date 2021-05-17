import {SHOW_SIGN_UP_MODAL, SIGN_UP} from "../../constants";

const signUpStore = sessionStorage.getItem("signUp");

const initialState = {
  signUpSession: JSON.parse(signUpStore) || {}
};

export const signUpReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SIGN_UP:
      sessionStorage.setItem("signUp", JSON.stringify(payload));
      return {
        ...state,
        signUpSession: payload
      }
    case SHOW_SIGN_UP_MODAL:
      return {
        ...state,
        showSignUp: payload
      }
    default:
      return state
  }
}
