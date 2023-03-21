import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import api from "../../customApi";
function EwaaaAddRooms() {
  function Loading() {
    return (
      <div className="spinner" style={{ padding: "0px", margin: "0px" }} />
    );
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState([]);
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    await axios
      .post(`${api}/vacantewaaa/uploadfile`, formData)
      .then((response) => {
        e.preventDefault();
        setData(response.data);
        setShow(false);
        Swal.fire({
          position: "center",
          icon: "success",
          customClass: "swal-wide",
          title: "تم إضافة المدخل بنجاح",
          showConfirmButton: false,
          timer: 1700,
        });
      })
      .catch((error) => {
        if (error.response) {
          Swal.fire({
            position: "center",
            icon: "error",
            customClass: "swal-wide",
            title: " حدثت مشكلة ما",
            showConfirmButton: true,
            // timer: 1700
          });
          console.log(error.response.status);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      })
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <Button
        variant="secondary"
        onClick={handleShow}
        className="btn btn-danger"
        style={{ fontSize: "13px", backgroundColor: "teal" }}
      >
        إضافة غرف السكن
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>قم بتحميل الملف</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>تحميل ملف إكسل</h3>
          <form encType="multipart/form-data">
            <div className="form-group">
              <label className="control-label" htmlFor="uploadfile2">
                إختيار ملف:
              </label>
              <input
                type="file"
                name="file"
                className="form-control"
                id="uploadfile2"
                onChange={(e) => setFile(e.target.files[0])}
                placeholder="Choose a upload file"
                required
              ></input>
            </div>
            <button
              type="button"
              onClick={onSubmit}
              className="btn btn-danger"
              style={{
                marginTop: "10px",
                fontSize: "15px",
                backgroundColor: "teal",
                width: "70px",
                fontWeight: "bold",
              }}
            >
              إضافة
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {loading ? Loading() : "خروج"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EwaaaAddRooms;
