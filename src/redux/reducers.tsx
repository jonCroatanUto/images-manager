import { combineReducers } from "redux";
import imageReducer from "./imageDataReducer/reducer";
import modalReducer from "./modalReducer/reducer";

export const reducers = combineReducers({
  imageReducer: imageReducer,
  modalReducer: modalReducer,
});
export type RootState = ReturnType<typeof reducers>;
