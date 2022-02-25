import React from "react";
import ModalHoc from "../../hocs/ModalHoc/ModalHoc";
import { Button, Container, Row, Col } from "react-bootstrap";
import { deleteImage } from "../../api";
import { reloadUImageDataAction } from "../../redux/imageDataReducer/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { hideAllModalsAction } from "../../redux/modalReducer/actions";

function DeleteModal() {
  const dispatch = useDispatch();
  const { isDeleteConfirmModalDisplayed } = useSelector(
    (state: RootState) => state.modalReducer
  );
  const { id } = isDeleteConfirmModalDisplayed;
  function deleteImageComfirmed() {
    deleteImage({ id: id }).then(() => {
      dispatch(reloadUImageDataAction(false));
      dispatch(hideAllModalsAction());
    });
  }
  return (
    <Container>
      <Row>
        <h1>Are you sure to Delete</h1>
      </Row>
      <Row>
        <Col>
          <Button
            onClick={deleteImageComfirmed}
            variant="outline-danger"
            type="button"
          >
            CONFIRM
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => dispatch(hideAllModalsAction())}
            variant="outline-warning"
            type="button"
          >
            CANCEL
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default ModalHoc(DeleteModal);
