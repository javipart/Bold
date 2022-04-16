import { combineReducers } from "redux";
import accountStatus from "./accountStatusReducer";
const reducers = {
  accountStatus,
};

const reducerMix = combineReducers(reducers);

export default reducerMix;