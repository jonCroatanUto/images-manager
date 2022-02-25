import initialState from "./state";
import { FETCH_DATA_IMAGE, RELOAD_IMAGE_DATA } from "./type";
import { ImageParametersType } from "../../types";
interface Action {
  payload: ImageParametersType[];
  type: string;
}

const imageReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_DATA_IMAGE:
      return { ...state, imagesData: action.payload };
    case RELOAD_IMAGE_DATA:
      return { ...state, reloadImageData: action.payload };

    default:
      return state;
  }
};

export default imageReducer;
