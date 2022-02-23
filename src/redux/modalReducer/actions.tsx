import {
  DISPLAY_UPLOAD,
  DISPLAY_UPDATE,
  DISPLAY_DELETE,
  HIDE_ALL_MODALS,
} from "./type";

export const displayUploadAction = () => ({
  type: DISPLAY_UPLOAD,
});
export const displayUpdateAction = () => ({
  type: DISPLAY_UPDATE,
});
export const displayDeleteAction = () => ({
  type: DISPLAY_DELETE,
});
export const hideAllModasAction = () => ({
  type: HIDE_ALL_MODALS,
});
