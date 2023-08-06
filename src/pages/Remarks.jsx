import React, {useEffect, useState} from 'react'
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import RemarksForm from "../Components/Remarks";
import axios from "axios";
import api from "../customApi";
import { useParams } from "react-router-dom";

const Remarks = () => {
    const handleSubmitRemarks = (remarks) => {
        // Do something with the remarks (e.g. send them to a server)
        console.log(remarks);
        };
        let { id } = useParams();
        const [data, setData] = useState({});
        useEffect(() => {
            axios
                .get(`${api}/users/${id}`)
                .then((response) => {
                setData(response.data);
                console.log(response.data);
                })
            }, [id]);
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <div className="featured" style={{display: "block"}}>
                <p>إرسال رسالة إلي المستخدم : {data?.name}</p>
                <RemarksForm onSubmit={handleSubmitRemarks} />
                </div>
            </div>
        </div>
    )
}

export default Remarks