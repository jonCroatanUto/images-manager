import React from "react";
import { Card } from "react-bootstrap";
import { ItemGridParametersType } from "../../types";
import { deleteImage, updateImage } from "../../api";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import {
  displayUpdateAction,
  displayDeleteAction,
} from "../../redux/modalReducer/actions";
import "./itemStyles.css";
function ImageItem({ id, title, urlImage }: ItemGridParametersType) {
  const dispatch = useDispatch();
  function displayConfirmDelete() {
    // deleteImage({ id: id }).then((res) => console.log(res));
    dispatch(displayDeleteAction());
  }
  function displayUpdate() {
    dispatch(displayUpdateAction());
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={urlImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <button className="itemButtons" onClick={displayConfirmDelete}>
          <DeleteIcon style={{ color: "red" }} />
        </button>
        <button className="itemButtons" onClick={displayUpdate}>
          <EditIcon style={{ color: "green" }} />
        </button>
      </Card.Body>
    </Card>
  );
}
export default ImageItem;
