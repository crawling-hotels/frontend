import React from "react";
import { useState, useEffect } from "react";
import "./image.css";
import { AiOutlineCamera } from "react-icons/ai";

export default function ImageUpload() {
  let inputRef;
  const [image, setImage] = useState({
    image_file: "",
    preview_URL:
      "https://cdn.icon-icons.com/icons2/2490/PNG/512/hotel_icon_150155.png",
  });

  const saveImage = (event) => {
    event.preventDefault();
    const fileReader = new FileReader();

    if (event.target.files[0]) {
      fileReader.readAsDataURL(event.target.files[0]);
    }

    fileReader.onload = () => {
      setImage({
        image_file: event.target.files[0],
        preview_URL: fileReader.result,
      });
    };
  };
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image.preview_URL);
    };
  }, []);

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        id="fileUpload"
        onChange={saveImage}
        onClick={(e) => (e.target.value = null)}
        ref={(refParam) => (inputRef = refParam)}
        style={{ display: "none", width: "20px", height: "30px" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <img
          src={image.preview_URL}
          style={{
            margin: "25px",
            width: "200px",
            height: "200px",
            borderWidth: "1px",
            borderRadius: "7px",
            borderStyle: "solid",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              width: "150px",
              height: "50px",
              margin: "25px",
              border: "bolid",
              borderColor: "gray",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
            type="primary"
            variant="contained"
            onClick={() => inputRef.click()}
          >
            사진 등록
          </button>
          <button
            style={{ width: "150px", height: "50px" }}
            type="primary"
            variant="contained"
            onClick={() => inputRef.click()}
          >
            수정하기
          </button>
        </div>
      </div>
    </div>
  );
}