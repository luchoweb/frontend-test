import {combineReducers} from 'redux';
import {addFavoriteReducer} from "./favorites";
import {signUpReducer} from "./signUp";

export default combineReducers({ addFavoriteReducer, signUpReducer });
