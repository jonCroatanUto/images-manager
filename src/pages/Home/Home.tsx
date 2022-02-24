import React, { useEffect, useState } from "react";
import UploadModal from "../../components/UploadModal";
import UpdateModal from "../../components/UpdateModal";
import DeleteModal from "../../components/DeleteModal";
import { getAllImages } from "../../api";
import { Container, Row, Col } from "react-bootstrap";
import ImageItem from "../../components/ImageItem";
import { ImageParametersType } from "../../types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers";
import {
  fetchuImageDataAction,
  reloadUImageDataAction,
} from "../../redux/imageDataReducer/actions";

function Home() {
  const dispatch = useDispatch();
  const {
    isUploadModalDisplayed,
    isDeleteConfirmModalDisplayed,
    isUpdateModalDisplayed,
  } = useSelector((state: RootState) => state.modalReducer);
  const { imagesData, reloadImageData } = useSelector(
    (state: RootState) => state.imageReducer
  );

  const [isDataSet, setisDataSet] = useState(false);

  useEffect(() => {
    if (!reloadImageData) {
      getAllImages().then((res) => {
        const { images } = res.data;

        dispatch(fetchuImageDataAction(images));
        setisDataSet(true);
        dispatch(reloadUImageDataAction(true));
      });
    }
  }, [reloadImageData]);

  return (
    <>
      <Container>
        <Row>
          {isDataSet ? (
            [...imagesData].map((image: ImageParametersType, index: number) => {
              const { _id, urlImage, title } = image;

              return (
                <Col key={index} xs={10} md={5} lg={3}>
                  <ImageItem
                    key={_id}
                    id={_id}
                    urlImage={urlImage}
                    title={title}
                  />
                </Col>
              );
            })
          ) : (
            <div>loading</div>
          )}
        </Row>
      </Container>
      {isUploadModalDisplayed ? <UploadModal /> : <div></div>}
      {isUpdateModalDisplayed ? <UpdateModal /> : <div></div>}
      {isDeleteConfirmModalDisplayed ? <DeleteModal /> : <div></div>}
    </>
  );
}
export default Home;
