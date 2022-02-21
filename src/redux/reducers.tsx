import { combineReducers } from "redux";
import userReducer from "./userReducer/reducer";

// import tvShowsReducer from "./tvShowsReducer/reducer";
// import switchReducer from "./modalReducer/reducer";

export const reducers = combineReducers({
  userReducer: userReducer,
});
export type RootState = ReturnType<typeof reducers>;
