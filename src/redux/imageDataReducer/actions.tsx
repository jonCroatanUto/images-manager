import { FETCH_DATA_IMAGE, RELOAD_IMAGE_DATA } from "./type";
import { ImageParametersType } from "../../types";
export const fetchuImageDataAction = (value: ImageParametersType[]) => ({
  type: FETCH_DATA_IMAGE,
  payload: value,
});
export const reloadUImageDataAction = (value: boolean) => ({
  type: RELOAD_IMAGE_DATA,
  payload: value,
});
