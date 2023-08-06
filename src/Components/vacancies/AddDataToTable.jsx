import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import api from "../../customApi";

function AddDataToTable(props) {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [data, setData] = useState([]);
const [file, setFile] = useState();
const [loading, setLoading] = useState(false);

const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    await axios
    .post(`${api}/${props.tableName}/uploadfile`, formData)
    .then((response) => {
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
        {props.buttonText}
    </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header >
        <Modal.Title style={{fontSize:"16px"}}>{props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={onSubmit}>
            <input className="form-control" type="file" onChange={(e) => setFile(e.target.files[0])} required/>
            <Button variant="success" type="submit" style={{marginTop:"30px"}}>
            {loading ? <Loading /> : props.submitButtonText}
            </Button>
        </form>
        </Modal.Body>
    </Modal>
    </div>
);
}

function Loading() {
return <div className="spinner" style={{ padding: "0px", margin: "0px" }} />;
}

export default AddDataToTable;
