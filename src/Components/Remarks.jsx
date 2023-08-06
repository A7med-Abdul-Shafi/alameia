import { useParams } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import api from "../customApi";
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button';
import useAuth from '../hooks/useAuth'
import { useQuery } from "@tanstack/react-query";

const Remarks = () => {
    let { id } = useParams();
    const { name } = useAuth()
    const [isLoadingStart, setIsLoadingStart] = useState(false);
    
    function Loading() {
        return (
            <div className="spinner" />
            );
        }
    const { data } = useQuery(["remarksname"], async () => {
        const response =
        await fetch(`${api}/user/name/${id}`)
        const data = await response.json();
        return data;
        });
        
    const [formData, setFormData] = useState({
        username: name,
        subject: '',
        content: '',
        file: null
        });
        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
            };
        
            const handleFileInputChange = (event) => {
            setFormData(prevFormData => ({
                ...prevFormData,
                file: event.target.files[0]
            }));
            };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoadingStart(true);
        const { username, name, subject, content, file } = formData;
        const formDataWithFile = new FormData();
        formDataWithFile.append('username', username);
        formDataWithFile.append('name', name);
        formDataWithFile.append('subject', subject);
        formDataWithFile.append('content', content);
        if (file) {
            formDataWithFile.append('file', file);
        }
        await axios
            .post(`${api}/remarks/create?value=${data}`, formDataWithFile) 
            .then(() => {
            setFormData({
                subject: '',
                content: '',
                file: null
                });
            Swal.fire({
            position: "center",
            icon: "success",
            customClass: "swal-wide",
            title: `تم إرسال رسالة بنجاح`,
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
        .finally(() => setIsLoadingStart(false));
        };
    return (
        <div>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <label htmlFor="subject">العنوان:</label>
            <input
                required
                name="subject"
                id="subject"
                type="text"
                value={formData.subject}
                onChange={handleInputChange}
            />
            <br />
            <label htmlFor="content">المحتوي:</label>
            <textarea
                required
                name="content"
                id="content"
                value={formData.content}
                onChange={handleInputChange}
            />
            <br />
            <div className="form-group">
                <label htmlFor="file" className="control-label">مرفق :</label>
                <input type="file" name="file" id="file" className="form-control" onChange={handleFileInputChange}/>
            </div>
            <br />
            <div style={{display:"flex", justifyContent:"center"}}>
            <Button type="submit" variant="danger" style={{backgroundColor:"teal", width:"15%"}} > {isLoadingStart ? Loading() :"إرسال"}</Button>
            </div>
            </form>
        </div>
    )
}

export default Remarks