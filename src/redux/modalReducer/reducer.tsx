import initialState from "./state";
import {
  DISPLAY_UPLOAD,
  DISPLAY_UPDATE,
  DISPLAY_DELETE,
  HIDE_ALL_MODALS,
} from "./type";
import { typeStateModalsReducer } from "../../types";

const userReducer = (state = initialState, action: typeStateModalsReducer) => {
  switch (action.type) {
    case DISPLAY_UPLOAD:
      return { ...state, isUploadModalDisplayed: true };
    case DISPLAY_UPDATE:
      return { ...state, isDeleteConfirmModalDisplayed: true };
    case DISPLAY_DELETE:
      return { ...state, isUpdateModalDisplayed: true };
    case HIDE_ALL_MODALS:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
