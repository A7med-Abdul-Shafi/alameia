import React, {useState} from 'react'
import axios from "axios";
import api from "../customApi";
import Swal from "sweetalert2";
import useAuth from '../hooks/useAuth'
import { useQuery } from "@tanstack/react-query";
import useTitle from '../hooks/useTitle'
import Button from 'react-bootstrap/Button';
import './messages.css'
const RemarksList = () => {
    const { name } = useAuth()
    const [actionLoading, setIsActionLoading] = useState(false);
    const [deleteLoading, setIsDeleteLoading] = useState(false);

    function Loading() {
        return (
            <div className="spinner" />
            );
        }

    const { data, isLoading, refetch } = useQuery(["remarks"], async () => {
        const response =
        await fetch(`${api}/remarks/getall?value=${name}`)             
        const data = await response.json(); 
        return data;
        });
        const length = data?.length
        useTitle(` Messages (${length})`)

    const handleAddRequest = async (id) => {
        setIsActionLoading(true);
        await axios
        .patch(`${api}/remarks/update/${id}`) 
        .then(async (req, res) => {
            refetch()
            Swal.fire({
                position: "center",
                icon: "success",
                customClass: "swal-wide",
                title: "تم تسجيل الإجراء",
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
        })
        .finally(() => setIsActionLoading(false));
    };
    const [status, setStatus] = useState("");
    const handleDownload = (url) => {
        const downloadUrl = `${api}/remarks/download/${encodeURIComponent(
            url
        )}`;
        fetch(downloadUrl)
            .then(async (response) => {
            const contentType = response.headers.get("Content-Type");
            return response.blob().then((blob) => ({ contentType, blob }));
            })
            .then(({ contentType, blob }) => {
            const url = window.URL.createObjectURL(
                new Blob([blob], { type: contentType })
            );
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "file");
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
            })
            .catch((error) => console.error(error));
        };
    
        const handleFileDownload = (event, row) => {
        event.preventDefault();
        handleDownload(row?.fileUrl);
        };
    const deleteAll = async () => {
        setIsDeleteLoading(true);
        await axios
            .delete(`${api}/remarks/deleteall`)
            .then(async (res) => {
            refetch();
            setIsDeleteLoading(false);
            await Swal.fire({
                position: "center",
                icon: "success",
                customClass: "swal-wide",
                title: "تم حذف الرسائل",
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
        function formatDate(dateStr) {
            const [month, day, year] = dateStr.split('/');
            let formattedDate = `${year}-${month}`;
            if (day) {
                formattedDate += `-${day}`;
                }
                return formattedDate;
            }
    return (
        <div className="messages">
        <div className="dataTableHome">
        <div
            style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop:"30px"
            }}
        >
            <p>الرسائل :</p>
            {data?.length > 0 ? (
            <button
                className="btn btn-danger"
                onClick={deleteAll}
                style={{ fontSize: "13px", padding: "5px" }}
            >
                {deleteLoading ? <Loading /> : "حذف الكل"} 
            </button>
            ) : (
            ""
            )}
        </div>
        {isLoading ? (
            <Loading />
        ) : (
            data?.length > 0 ?
            <table className='table'>
                <thead>
                    <tr>
                    <th>المرسل</th>
                    <th>العنوان</th>
                    <th>المحتوي</th>
                    <th>التاريخ</th>
                    <th>المرفقات</th>
                    <th>حالة الطلب</th>
                    <th>إجراء</th>
                    </tr>
                </thead>
            <tbody>
                {data.map((row) => (
                <tr key={row.id} >
                    <td>{row.username}</td>
                    <td>{row.subject}</td>
                    <td>{row.content}</td>
                    <td>{formatDate(new Date(row.createdAt).toLocaleDateString())}</td>
                    <td>
                    {row.fileUrl ? (
                        <Button
                        onClick={(event) => handleFileDownload(event, row)}
                        className="btn btn-success"
                        style={{ fontSize: "12px" }}
                        >
                        تحميل المرفق
                        </Button>
                    ) : (
                        "لا يوجد مرفقات"
                    )}
                    </td>
                    <td>
                        <select
                            style={{fontSize:"13px"}}
                            className="form-select form-select-sm"
                            required
                            type="text"
                            name="status"
                            id="status"
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="0">إختر</option>
                            <option >تم معالجة الطلب</option>
                        </select>
                    </td>
                    <td>
                    <div className="viewButton">
                    {actionLoading ? Loading():
                <svg
                    onClick={() => {
                    handleAddRequest(row.id);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                    <polyline points="17 21 17 13 7 13 7 21"></polyline>
                    <polyline points="7 3 7 8 15 8"></polyline>
                </svg>
                    }
            </div>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
            :"لا يوجد رسائل جديدة"
        )}
    </div>
    </div>
    )
}

export default RemarksList