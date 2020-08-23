import isLoggedReducers from "./isLogged";
import { combineReducers } from "redux";
import counterReducers from "./counter";

const AddAllReducers = combineReducers({
  counter: counterReducers,
  isLogged: isLoggedReducers,
});

export default AddAllReducers;
