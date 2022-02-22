import { type } from "os";
import React from "react";
import "./styles.css";
import { ButtonProps } from "../../types";

function Button({ title, handleEdit, typ }: ButtonProps) {
  // const { title, handleEdit, type } = props;
  return (
    <button type={typ} className="button" onClick={handleEdit}>
      {title}
    </button>
  );
}

export default Button;
