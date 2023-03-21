import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import api from "../../customApi";

function Groupharamain() {
  function Loading() {
    return (
      <div className="spinner" style={{ padding: "0px", margin: "0px" }} />
    );
  }
  const [file, setFile] = useState();
  const [isloading, setisLoading] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    await axios
      .post(`${api}/haramain/uploadfile`, formData)
      .then(() => {
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
          console.log(error.response.status);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      })
      .finally(() => setisLoading(false));
  };
  return (
    <div className="containe">
      <div className="row">
        <div
          className="col-sm-7"
          style={{
            backgroundcolor: "#e6fffa",
            padding: "10px",
            borderradius: "3px",
          }}
        >
          <h3>تحميل ملف إكسل</h3>
          <form encType="multipart/form-data" onSubmit={onSubmit}>
            <div className="form-group">
              <label className="control-label" htmlFor="uploadfile">
                إختيار ملف:
              </label>
              <input
                type="file"
                name="file"
                className="form-control"
                id="uploadfile"
                onChange={(e) => setFile(e.target.files[0])}
                placeholder="Choose a upload file"
                required
              ></input>
            </div>
            <button
              type="submit"
              className="btn btn-danger"
              style={{
                marginTop: "10px",
                fontSize: "15px",
                backgroundColor: "teal",
                width: "70px",
                fontWeight: "bold",
              }}
            >
              {isloading ? Loading() : "تسكين"}
            </button>
          </form>
          <div id="response" style={{ display: "none" }}></div>
        </div>
      </div>
      <hr />
      <div id="downloadfiles" className="row">
        <div className="col-sm-7">
          <a
            href={`${api}/haramain/api/file`}
            className="btn btn-info"
            role="button"
          >
            تصدير البيانات ملف إكسل
          </a>
        </div>
      </div>
    </div>
  );
}

export default Groupharamain;
