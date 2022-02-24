import {
  DISPLAY_UPLOAD,
  DISPLAY_UPDATE,
  DISPLAY_DELETE,
  HIDE_ALL_MODALS,
} from "./type";
import { deleteTypes, updateTypes } from "../../types";
export const displayUploadAction = () => ({
  type: DISPLAY_UPLOAD,
});
export const displayUpdateAction = (value: updateTypes) => ({
  type: DISPLAY_UPDATE,
  payload: value,
});
export const displayDeleteAction = (value: deleteTypes) => ({
  type: DISPLAY_DELETE,
  payload: value,
});
export const hideAllModalsAction = () => ({
  type: HIDE_ALL_MODALS,
});
