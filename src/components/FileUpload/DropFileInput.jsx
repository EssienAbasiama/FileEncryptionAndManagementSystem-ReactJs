import axios from "axios";
import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./FileUpload.css";
import { ImageConfig } from "../../config/ImageConfig";
import uploadImg from "../../assets/cloud-upload-regular-240.png";

const DropFileInput = (props) => {
  const wrapperRef = useRef(null);
  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  // const onFileDrop = (e) => {
  //   const newFile = e.target.files[0];
  //   if (newFile) {
  //     const updatedList = [...fileList, newFile];
  //     setFileList(updatedList);
  //     props.onFileChange(updatedList);
  //   }
  // };

  // const fileRemove = (file) => {
  //   const updatedList = fileList.filter((item) => item !== file);
  //   setFileList(updatedList);
  //   props.onFileChange(updatedList);
  // };

  const onFileDrop = async (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
      try {
        const formData = new FormData();
        formData.append("file", newFile);

        // Assuming you have an endpoint for file upload in your Java backend
        await axios.post("http://127.0.0.1:8002/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("File uploaded successfully");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const fileRemove = async (file) => {
    const updatedList = fileList.filter((item) => item !== file);
    setFileList(updatedList);
    props.onFileChange(updatedList);

    try {
      // Assuming you have an endpoint for file deletion in your Java backend
      await axios.delete(`http://127.0.0.1:8002/file/${file.name}`);

      console.log("File deleted successfully");
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  return (
    <div className="fileupload_container">
      <div className="fileupload_body">
        <div
          ref={wrapperRef}
          className="drop-file-input"
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className="drop-file-input__label">
            <img src={uploadImg} alt="" />
            <p>Drag & Drop your files here</p>
          </div>
          <input type="file" onChange={onFileDrop} />
        </div>
        {fileList.length > 0 && (
          <div className="drop-file-preview">
            <p className="drop-file-preview__title">Ready to upload</p>
            {fileList.map((item, index) => (
              <div key={index} className="drop-file-preview__item">
                <img
                  src={
                    ImageConfig[item.type.split("/")[1]] ||
                    ImageConfig["default"]
                  }
                  alt=""
                />
                <div className="drop-file-preview__item__info">
                  <p>{item.name}</p>
                  <p>{item.size}B</p>
                </div>
                <span
                  className="drop-file-preview__item__del"
                  onClick={() => fileRemove(item)}
                >
                  x
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func.isRequired,
};

export default DropFileInput;
