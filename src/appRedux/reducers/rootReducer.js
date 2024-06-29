import { combineReducers } from "redux";
import imgUrlReducer from "./imgUrlReducer";

const rootReducer = combineReducers({
  imgBaseUrl: imgUrlReducer,
});
export default rootReducer;
