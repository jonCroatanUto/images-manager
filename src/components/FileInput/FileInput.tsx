import React from "react";
import "./fileInput.css";
import { inputFileTypeProps } from "../../types";

function FileInput({ type, name, handleChange }: inputFileTypeProps) {
  return (
    <div className="inputWrepper">
      <input
        type={type}
        name={name}
        onChange={(e: React.ChangeEvent) => handleChange(e)}
        className="custom-file-input"
      />
    </div>
  );
}
export default FileInput;
