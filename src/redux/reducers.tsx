import { combineReducers } from "redux";
import userReducer from "./userReducer/reducer";
import modalReducer from "./modalReducer/reducer";

export const reducers = combineReducers({
  userReducer: userReducer,
  modalReducer: modalReducer,
});
export type RootState = ReturnType<typeof reducers>;
