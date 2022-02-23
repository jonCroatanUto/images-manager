import axios from "axios";
import {
  createImageApiCallType,
  idParamApiCallType,
  updateApiCallType,
} from "../types";
const { REACT_APP_SERVER_DEVELOPMENT, REACT_APP_SERVER_PRODUCTION } =
  process.env;

export async function getAllImages() {
  return axios({
    method: "GET",
    url: `${REACT_APP_SERVER_DEVELOPMENT}image/`,
  });
}
export async function uploadImage({
  //owner,
  author,
  title,
  urlImage,
}: createImageApiCallType) {
  return axios({
    method: "POST",
    url: `${REACT_APP_SERVER_DEVELOPMENT}image/newImage`,
    data: {
      //owner: owner,
      author: author,
      title: title,
      urlImage: urlImage,
    },
  });
}
export async function deleteImage({
  //owner,
  id,
}: idParamApiCallType) {
  return axios({
    method: "DELETE",
    url: `${REACT_APP_SERVER_DEVELOPMENT}image/deleteImage/${id}`,
  });
}
export async function updateImage({
  //owner,
  id,
  author,
  title,
}: updateApiCallType) {
  return axios({
    method: "PATCH",
    url: `${REACT_APP_SERVER_DEVELOPMENT}image/updateImage/${id}`,
    data: {
      author: author,
      title: title,
    },
  });
}
