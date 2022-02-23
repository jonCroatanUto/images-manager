import React, { useEffect, useState } from "react";
import UploadModal from "../../components/UploadModal";
import { getAllImages } from "../../api";
import { Container, Row, Col } from "react-bootstrap";
import ImageItem from "../../components/ImageItem";
import { ImageParametersType } from "../../types";

function Home() {
  const [imagesData, setImagesData] = useState<ImageParametersType[]>([]);
  const [isDataSet, setisDataSet] = useState(false);
  useEffect(() => {
    getAllImages().then((res) => {
      const { images } = res.data;
      setImagesData(images);
      setisDataSet(true);
    });
  }, []);
  function debug() {
    console.log(imagesData);
  }

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
    </>
  );
}
export default Home;
