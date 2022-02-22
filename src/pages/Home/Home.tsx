import React, { useEffect } from "react";
import UploadModal from "../../components/UploadModal";
import { getAllImages, deleteImage, updateImage } from "../../api";
function Home() {
  useEffect(() => {
    getAllImages().then((res) => console.log(res));
  }, []);
  function del() {
    console.log("hols");
    deleteImage({ id: "621508bd58a2bc07feb7e973" }).then((res) =>
      console.log(res)
    );
  }
  return (
    <>
      <button onClick={del}>delete</button>
      {/* <UploadModal /> */}
    </>
  );
}
export default Home;
