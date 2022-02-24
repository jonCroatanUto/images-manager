import React, { useEffect, useState } from "react";
import axios from "axios";
import InputText from "../InputText";
import ModalHoc from "../../hocs/ModalHoc/ModalHoc";
//import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  InputEventUploadFileInterface,
  InputEventInputTextInterface,
} from "../../types";
import { uploadImage } from "../../api";
import { hideAllModalsAction } from "../../redux/modalReducer/actions";
import { reloadUImageDataAction } from "../../redux/imageDataReducer/actions";
import Spinner from "../../components/Spinner";
import FileInput from "../FileInput";
function UploadModal() {
  const dispatch = useDispatch();
  // const { data } = useSelector((state) => state.userReducer);
  const [isCharged, setIsCharged] = useState(false);
  const [isCharging, setIsCharging] = useState(false);

  const [ownerData, setOwnerData] = useState();

  const [fileData, setFileData] = useState({
    // owner:"id"
    title: "",
    author: "",
    // genre: "",
    urlImage: "",
  });
  // const [file, setFile] = useState("");
  function send(e: React.FormEvent) {
    e.preventDefault();
    setIsCharging(true);
    console.log(fileData);
    uploadImage(fileData).then((res) => {
      console.log(res);
      // dispatch(realoadHomeAction(true));
      setIsCharging(false);
      dispatch(reloadUImageDataAction(false));
      dispatch(hideAllModalsAction());
    });
  }
  function handleChange(e: InputEventInputTextInterface) {
    setFileData({
      ...fileData,
      [e.target.name]: e.target.value,
    });
  }

  function handleGifUploadChange(e: InputEventUploadFileInterface) {
    //e.preventDefault();
    setIsCharging(true);

    console.log("traget->", e.target.files[0]);
    const form = new FormData();

    form.append("file", e.target.files[0]);
    form.append("upload_preset", "ml_default");
    form.append("folder", "imageManager");

    axios
      .post(`https://api.cloudinary.com/v1_1/daiejrif5/image/upload/`, form)
      .then((res: any) => {
        const { data } = res;
        console.log(data);
        setFileData({
          ...fileData,
          urlImage: data.url,
        });
        setIsCharging(false);
        setIsCharged(true);
        console.log("reponse", fileData);
      });
  }

  return (
    <form onSubmit={send}>
      <Container>
        <Row className="justify-content-center">
          <Col></Col>
          <Col className="text-center">
            <h2 className="titleUpdate">Upload track</h2>
            <InputText
              type="text"
              id="title"
              label="Title "
              value={fileData.title}
              placeholder="Type title"
              handleChange={handleChange}
            />
            <InputText
              type="text"
              id="author"
              label="Author "
              value={fileData.author}
              placeholder="Type author"
              handleChange={handleChange}
            />
          </Col>
          <Col></Col>
        </Row>

        <Row className="justify-content-center">
          <Col className="text-center">
            <div style={{ marginTop: "40px" }}>
              {isCharging ? (
                <div className="spinnerWrapper">
                  <Spinner />
                </div>
              ) : isCharged ? (
                <>
                  <h3 className="titleUpdateShort">
                    File ready click SEND to confirm
                  </h3>
                  <img
                    src={fileData.urlImage}
                    alt="uploaded"
                    className="existing-image"
                  />
                </>
              ) : (
                <>
                  <Container>
                    <Row className="justify-content-center">
                      <Col></Col>
                      <Col>
                        <h5 className="titleUpdate">Upload Gif:</h5>
                      </Col>
                      <Col className="text-center">
                        <FileInput
                          type="file"
                          name="file"
                          handleChange={(e: any) => handleGifUploadChange(e)}
                        />
                      </Col>
                      <Col></Col>
                    </Row>
                  </Container>
                </>
              )}
            </div>
          </Col>
        </Row>
        <div style={{ marginTop: "50px" }}>
          <Container>
            <Row className="justify-content-center">
              {isCharged ? (
                <>
                  <Col className="text-center">
                    <Button type="submit">SEND</Button>
                  </Col>
                  <Col className="text-center">
                    <Button
                      type="button"
                      onClick={() => dispatch(hideAllModalsAction())}
                    >
                      CANCEL
                    </Button>
                  </Col>
                </>
              ) : (
                <Col className="text-center"></Col>
              )}
            </Row>
          </Container>
        </div>
      </Container>
    </form>
  );
}

export default ModalHoc(UploadModal);
