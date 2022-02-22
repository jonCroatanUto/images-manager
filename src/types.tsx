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
export interface InputEventUploadFileInterface extends Event {
  target: HTMLInputElement & EventTarget & { files: FileList };
}
export interface InputEventInputTextInterface extends Event {
  target: HTMLInputElement & EventTarget & { name: string; value: string };
}
