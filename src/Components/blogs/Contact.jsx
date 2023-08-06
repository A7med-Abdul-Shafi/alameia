import React, { useState } from "react";
import './style.css';
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import api from "../../customApi";

const Contact = () => {
    const [formData, setFormData] = useState({
        subject: '',
        content: '',
        file: null
        });
    const [isLoadingStart, setIsLoadingStart] = useState(false);
    function Loading() {
        return (
            <div className="spinner" />
            );
        }
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
            const { subject, content, file } = formData;
            const formDataWithFile = new FormData();
            formDataWithFile.append('subject', subject);
            formDataWithFile.append('content', content);
            if (file) {
                formDataWithFile.append('file', file);
            }
            await axios
                .post(`${api}/messages/create`, formDataWithFile)
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
        <section className="container" style={{marginTop:"30px", fontSize:"14px"}} >
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <label htmlFor="subject" style={{color:"#8cd87c"}}>العنوان :</label>
            <input
                style={{backgroundColor:"#333", color:"#fff"}}
                required
                name="subject"
                id="subject"
                type="text"
                value={formData.subject}
                onChange={handleInputChange}
            />
            <br />
            <label htmlFor="content" style={{color:"#8cd87c"}}>المحتوي :</label>
            <textarea
                style={{backgroundColor:"#333", color:"#fff"}}
                required
                name="content"
                id="content"
                value={formData.content}
                onChange={handleInputChange}
            />
            <br />
            <div className="form-group">
                <label htmlFor="file" className="control-label" style={{color:"#8cd87c"}}>مرفق :</label>
                <input type="file" name="file" id="file" className="form-control" style={{color:"#fff", backgroundColor:"#333"}} onChange={handleFileInputChange}/>
            </div>
            <br />
            <div style={{display:"flex", justifyContent:"center"}}>
            <Button type="submit" variant="success" style={{backgroundColor:"#343a40", width:"20%", fontSize:"14px"}} > {isLoadingStart ? Loading() :"إرسال"}</Button>
            </div>
            </form>
        </section>
    )
}

export default Contact;