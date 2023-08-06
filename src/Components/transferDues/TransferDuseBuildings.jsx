import React, { useState, useRef,useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import api from "../../customApi";
import {Modal, Button} from 'react-bootstrap';

function TransferDues () {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [options, setOptions] = useState([]);
    useEffect(() => {
        const projects = async () => {
            await axios.get(`${api}/haramain/projects`).then((res) => {
                setOptions(res.data);
            });
        };
        projects();
    }, []);
    function Loading() {
        return <div className="spinner"/>
    }
    const ref = useRef(0);
    const [file, setFile] = useState();
    const [transferLoading, setTransferLoading] = useState(false) 
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [emp_no, setEmp_no] = useState(data?.emp_no);
    const [name, setName] = useState(data?.name);
    const [project, setProject] = useState("");
    const optionsFormat = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-US', optionsFormat).format(date);
    const [in_date, setIn_date] = useState(formattedDate);

    const fetchSearchResults = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await axios
            .get(`${api}/buildings/search/edit?q=${query}`)
            .then(async (res) => {
            setData(res.data);
        })
            .catch((err) => {
            if (err.response) {
                console.log(err.response.status);
            } else if (err.request) {
                console.log(err.request);
            } else {
                console.log("Error", err.message);
            }
        })
            .finally(() => setIsLoading(false));
    };

    const updateResults = async (e) => {
        if (project === '') {
            await Swal.fire({
                title: 'يلزم إختيار المشروع',
                icon: 'warning',
                customClass: {
                container: 'my-swal',
                popup: 'my-swal-popup',
                title: 'my-swal-title',
                icon: 'my-swal-icon',
                content: 'my-swal-content',
                confirmButton: 'my-swal-confirm-button',
                denyButton: 'my-swal-deny-button',
                cancelButton: 'my-swal-cancel-button',
                },
            });
            return;
        }
        e.preventDefault();
        setIsLoading(true);
        const item = {
        emp_no: data?.emp_no,
        name: data?.name,
        project,
        nationality: data?.nationality,
        iqama_no: data?.iqama_no,
        room_no: data?.room_no,
        coupon: data?.coupon,
        in_date,
        in_reason: data?.in_reason,
        housing: data?.housing,
        class: data?.class,
        profession: data?.profession,
        passport_no:data?.passport_no,
        };
        const id = data?.id
        const out_date = data?.out_date
        const out_reason = data?.out_reason
        const housing = data?.housing
        await axios
        .put(`${api}/buildings/transferdues?id=${id}&&value=${in_date}&&date=${out_date}&&reason=${out_reason}&&housing=${housing}`, item)
        .then(() => {
            setIn_date("")
            setProject("")
            // onSubmitProps.resetForm();
            Swal.fire({
            position: "center",
            icon: "success",
            customClass: "swal-wide",
            title: "تم تحديث البيانات بنجاح",
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
            } else if (error.request) {
            console.log(error.request);
            } else {
            console.log("Error", error.message);
            }
        })
        .finally(() => setIsLoading(false));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setTransferLoading(true);
        const formData = new FormData();
        formData.append("file", file);
        await axios
        .post(`${api}/buildings/transfergroup/uploadfile`, formData)
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
        .finally(() => setTransferLoading(false));
    };
    return (
        <div className="newContainer1">
            <div className="top">
                <h5>تحويل تكاليف</h5>
                <form onSubmit={fetchSearchResults}>
                    <div className="search">
                        <input
                        type="text"
                        required
                        placeholder="  بحث "
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                </form>
                <Button onClick={handleShow}
                    variant="success"
                    style={{
                        marginBottom: "1rem",
                        backgroundColor: "teal",
                        fontSize: "14px",
                    }}
                    >
                        تحويل تكاليف مجمع
                    </Button>
                <Modal show={show} onHide={handleClose} style={{fontSize:"14px"}}>
                <Modal.Header>
                <Modal.Title style={{fontSize:"14px"}}>قم بإختيار ملف إكسيل - تحويل تكاليف العمال</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div >
                    <div className="control">
                    <form onSubmit={handleSubmit}>
                    <input className="form-control" type="file" onChange={(e) => setFile(e.target.files[0])} required/>
                    <Button variant="success" type="submit" style={{marginTop:"30px"}}>
                    {transferLoading ? <Loading /> : "تأكيد"}
                    </Button>
                    </form>
                    </div>
                </div>
                </Modal.Body>
                </Modal> 
            </div>
            <>
        {isLoading ? (
            Loading()
        ) : data ? (
            <form encType="multipart/form-data">
                <div className="bottom" style={{display:"block"}}>
                    <div style={{display:"flex"}}>
                        <div className="right">
                            <label style={{ marginTop: "0rem" }} htmlFor="emp_no">
                            الرقم الوظيفي
                            </label>
                            <input
                            ref={ref}
                            autoComplete="off"
                            className="formInput"
                            type="text"
                            id="emp_no"
                            name="emp_no"
                            placeholder=""
                            defaultValue={data.emp_no}
                            onChange={(e) => setEmp_no(e.target.value)}
                            />
                            <label style={{ marginTop: "0rem" }} htmlFor="project">
                            المشروع{" "}
                            </label>
                            <select
                                required    
                                className="formInput"
                                id="project"
                                name="project"
                                value={project}
                                onChange={(e) => setProject(e.target.value)}
                                >
                                <option value="" >إختر المشروع</option>
                                {options.map((option, index) => (
                                    <option key={index} value={option.project}>
                                    {option.project}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="right">
                        <label style={{ marginTop: "0px", marginBottom:"0" }} htmlFor="name">
                            الإسم
                            </label>
                            <input
                            ref={ref}
                            autoComplete="off"
                            className="formInput"
                            type="text"
                            id="name"
                            name="name"
                            placeholder=""
                            defaultValue={data.name}
                            onChange={(e) => setName(e.target.value)}
                            />
                            <label style={{ marginTop: "0", marginBottom:"0" }} htmlFor="in_date">
                            تاريخ تحويل التكاليف
                            </label>
                            <input
                            autoComplete="off"
                            className="formInput"
                            type="date"
                            id="in_date"
                            name="in_date"
                            placeholder=""
                            defaultValue={in_date}
                            onChange={(e) => setIn_date(e.target.value)}
                            />
                        </div>
                    </div>
                        <div style={{display:"flex", justifyContent:"center", margin:"20px"}}>
                            <Button
                                type="submit" style={{backgroundColor:"teal", fontSize:"14px", padding:"5px 30px"}}
                                className="btn btn-primary"
                                onClick={updateResults}
                                >
                                تحديث
                            </Button>
                        </div>
                </div>
            </form>
        ) : (
            <p>قم بالبحث بالرقم الوظيفي</p>
        )}
            </>
        </div>
    )
}
export default TransferDues;