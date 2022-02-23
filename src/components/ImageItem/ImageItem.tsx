import React from "react";
import { Card } from "react-bootstrap";
import { ItemGridParametersType } from "../../types";
import { deleteImage, updateImage } from "../../api";
function ImageItem({ id, title, urlImage }: ItemGridParametersType) {
  function del() {
    deleteImage({ id: id }).then((res) => console.log(res));
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={urlImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <button onClick={del}>delete</button>
        <button onClick={(e) => console.log()}>update</button>
      </Card.Body>
    </Card>
  );
}
export default ImageItem;
