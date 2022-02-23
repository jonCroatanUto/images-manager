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

//typing events
export interface InputEventUploadFileInterface extends Event {
  target: HTMLInputElement & EventTarget & { files: FileList };
}
export interface InputEventInputTextInterface extends Event {
  target: HTMLInputElement & EventTarget & { name: string; value: string };
}
