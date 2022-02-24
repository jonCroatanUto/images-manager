//typing custom components
export interface inputTextTypeProps {
  type: string;
  id: string;
  placeholder: string;
  value: string;
  handleChange: (e: any) => void;
  label: string;
}
export interface inputFileTypeProps {
  type: string;
  name: string;
  handleChange: (e: React.ChangeEvent) => void;
}
export interface ButtonProps {
  handleEdit: () => void;
  typ: "button" | "submit" | "reset" | undefined;
  title: string;
}
//typing server calls
export interface createImageApiCallType {
  // owner: string;
  author: string;
  title: string;
  urlImage: string;
}
export interface idParamApiCallType {
  // owner: string;
  id: string;
}
export interface updateApiCallType {
  // owner: string;
  id: string;
  author: string;
  title: string;
}
export interface ItemGridParametersType {
  id: string;
  title: string;
  urlImage: string;
}
export interface ImageParametersType {
  author: string;
  createdAt: string;
  genre: string;
  title: string;
  totalLikes: never[];
  updatedAt: string;
  urlImage: string;
  __v: number;
  _id: string;
}
//typing reducers
export interface typeStateModalsReducer {
  isUploadModalDisplayed: boolean;
  isDeleteConfirmModalDisplayed: { isDispalyDelete: boolean; id: string };
  isUpdateModalDisplayed: {
    isDispalyUpdate: boolean;
    id: string;
    title: string;
  };
  type: string;
}
export interface updateTypes {
  isDispalyUpdate: boolean;
  id: string;
  title: string;
}
export interface deleteTypes {
  isDispalyDelete: boolean;
  id: string;
}

//typing events
export interface InputEventUploadFileInterface extends Event {
  target: HTMLInputElement & EventTarget & { files: FileList };
}
export interface InputEventInputTextInterface extends Event {
  target: HTMLInputElement & EventTarget & { name: string; value: string };
}
