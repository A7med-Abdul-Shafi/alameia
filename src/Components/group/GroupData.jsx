import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import api from "../../customApi";

function GroupData(props) {
function Loading() {
    return (
    <div className="spinner" style={{ padding: "0px", margin: "0px" }} />
    );
}
const [file, setFile] = useState();
const [isloading, setisLoading] = useState(false);
const [startLoading, setStartLoading] = useState(false);
const [deleteLoading, setDeleteLoading] = useState(false);
const [file2, setFile2] = useState();

const onSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    await axios
    .post(`${api}/${props.omsubmitEndpoint}`, formData)
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
const onSubmit2 = async (e) => {
    e.preventDefault();
    setStartLoading(true);
    const formData = new FormData();
    formData.append("file", file2);
    await axios
    .post(`${api}/${props.omsubmit2Endpoint}`, formData)
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
    .finally(() => setStartLoading(false));
};
const deleteAll = async () => {
    setDeleteLoading(true);
    await axios
        .delete(`${api}/${props.deleteEndpoint}`)
        .then(async (res) => {
        setDeleteLoading(false);
        await Swal.fire({
            position: "center",
            icon: "success",
            customClass: "swal-wide",
            title: "تم حذف البيانات بنجاح",
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
            title: "حدثت مشكلة ما",
            showConfirmButton: true,
            });
            console.log(error.response.data);
            console.log(error.response.status);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        }
        });
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
    <div className="row">
        <div
        className="col-sm-7"
        style={{
            backgroundcolor: "#e6fffa",
            padding: "10px",
            borderradius: "3px",
        }}
        >
        {/* <h3>تحميل ملف إكسل</h3> */}
        <form encType="multipart/form-data" onSubmit={onSubmit2}>
            <div className="form-group">
            <label className="control-label" htmlFor="fileupload">
                {props.labelText}:
            </label>
            <input
                type="file"
                name="file"
                className="form-control"
                id="fileupload"
                onChange={(e) => setFile2(e.target.files[0])}
                placeholder="Choose a upload file"
                required
            ></input>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <button
            type="submit"
            className="btn btn-danger"
            style={{
                marginTop: "10px",
                fontSize: "13px",
                backgroundColor: "teal",
                fontWeight: "bold",
            }}
            >
            {startLoading ? Loading() : `${props.buttonTextsubmitt}`}
            </button>
            <button type="button"
            onClick={deleteAll}
            className="btn btn-danger"
            style={{
                marginTop: "10px",
                fontSize: "13px",
                fontWeight: "bold",
            }}>
                {deleteLoading ? Loading() :`${props.buttonTextdelete}`} 
            </button>
            </div>
            
        </form>
        </div>
    </div>
    </div>
);
}

export default GroupData;
