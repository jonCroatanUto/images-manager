import React, { useState } from "react";
import ModalHoc from "../../hocs/ModalHoc/ModalHoc";
import InputText from "../InputText";
import { InputEventInputTextInterface } from "../../types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers";
import { Button } from "react-bootstrap";
import { updateImage } from "../../api";
import { hideAllModalsAction } from "../../redux/modalReducer/actions";
import { reloadUImageDataAction } from "../../redux/imageDataReducer/actions";

function UpdateModal() {
  const dispatch = useDispatch();
  const { isUpdateModalDisplayed } = useSelector(
    (state: RootState) => state.modalReducer
  );
  const { id, title } = isUpdateModalDisplayed;
  const [updateData, setUpdateData] = useState({
    id: id,
    title: title,
  });
  function handleChange(e: InputEventInputTextInterface) {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  }
  function updateDataSend(e: React.FormEvent) {
    e.preventDefault();
    const { id, title } = updateData;
    updateImage({ id, title }).then((res) => {
      dispatch(reloadUImageDataAction(false));
      dispatch(hideAllModalsAction());
    });
  }
  return (
    <form onSubmit={updateDataSend}>
      <InputText
        type="text"
        id="title"
        label="Title "
        value={updateData.title}
        placeholder="Type title"
        handleChange={handleChange}
      />

      <Button type="submit">Update</Button>
    </form>
  );
}
export default ModalHoc(UpdateModal);
