import initialState from "./state";
import {
  DISPLAY_UPLOAD,
  DISPLAY_UPDATE,
  DISPLAY_DELETE,
  HIDE_ALL_MODALS,
} from "./type";
import { typeStateModalsReducer } from "../../types";
interface Action {
  payload: typeStateModalsReducer;
  type: string;
}
const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case DISPLAY_UPLOAD:
      return { ...state, isUploadModalDisplayed: true };
    case DISPLAY_UPDATE:
      return { ...state, isUpdateModalDisplayed: action.payload };
    case DISPLAY_DELETE:
      return { ...state, isDeleteConfirmModalDisplayed: action.payload };
    case HIDE_ALL_MODALS:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
