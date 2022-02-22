import React, { useEffect, useState } from "react";
import axios from "axios";
import InputText from "../InputText";
import Select from "react-select";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  InputEventUploadFileInterface,
  InputEventInputTextInterface,
} from "../../types";
// import {
//   unDisplayUploadAction,
//   realoadHomeAction,
// } from "../../redux/displaysReducer/action";
// import { uploadGif } from "../../services/serverCalls/index";
import Spinner from "../../components/Spinner";
import FileInput from "../FileInput";
function UploadModal() {
  // const dispatch = useDispatch();
  // const { data } = useSelector((state) => state.userReducer);
  const [isCharged, setIsCharged] = useState(false);
  const [isCharging, setIsCharging] = useState(false);

  const [ownerData, setOwnerData] = useState();

  const [fileData, setFileData] = useState({
    owner: "data.data._id",
    title: "",
    author: "",
    genre: "",
    urlGif: "",
  });
  // const [file, setFile] = useState("");
  function send(e: React.FormEvent) {
    e.preventDefault();
    setIsCharging(true);
    // uploadGif(fileData).then((res) => {
    //   dispatch(realoadHomeAction(true));
    //   setIsCharging(false);
    //   dispatch(unDisplayUploadAction());
    // });
  }
  function handleChange(e: InputEventInputTextInterface) {
    setFileData({
      ...fileData,
      [e.target.name]: e.target.value,
    });
  }
  // function handleChangeSelect(e) {
  //   setFileData({
  //     ...fileData,
  //     genre: e.value,
  //   });
  // }

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

        setFileData({
          ...fileData,
          urlGif: data.url,
        });
        setIsCharging(false);
        setIsCharged(true);
        console.log("reponse", fileData);
      });
  }
  // const options = [
  //   { value: "Humor", label: "Humor" },
  //   { value: "Films", label: "Films" },
  //   { value: "Party", label: "Party" },
  //   { value: "Drama", label: "Drama" },
  // ];
  // const customStyles = {
  //   option: (provided: any) => ({
  //     ...provided,
  //     borderBottom: "1px dotted pink",
  //     color: "green",
  //     padding: 20,
  //   }),
  // };

  return (
    <>
      <div onClick={() => null} className="modal-background"></div>

      <div className="track-upload">
        <form onSubmit={send}>
          <Container>
            <Row className="justify-content-center">
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
            </Row>

            <Row className="justify-content-center">
              <Col className="text-center">
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
                      src={fileData.urlGif}
                      alt="uploaded"
                      className="existing-image"
                    />
                  </>
                ) : (
                  <>
                    <h5 className="titleUpdate">Upload Gif:</h5>
                    <Container>
                      <Row className="justify-content-center">
                        <Col xs={5} md={5} lg={5}></Col>
                        <Col xs={4} md={4} lg={4} className="auto">
                          <FileInput
                            type="file"
                            name="file"
                            handleChange={(e) => handleGifUploadChange}
                          />
                        </Col>
                        <Col xs={3} md={3} lg={3}></Col>
                      </Row>
                    </Container>
                  </>
                )}
              </Col>
            </Row>
            <Row className="justify-content-center">
              {isCharged ? (
                <>
                  <Col className="text-center">
                    <button type="submit">submit</button>
                  </Col>
                  <Col className="text-center">
                    {/* <Button
                      handleEdit={() => null}
                      title="CANCEL"
                      type="button"
                    /> */}
                  </Col>
                </>
              ) : (
                <Col className="text-center"></Col>
              )}
            </Row>
          </Container>
        </form>
      </div>
    </>
  );
}

export default UploadModal;