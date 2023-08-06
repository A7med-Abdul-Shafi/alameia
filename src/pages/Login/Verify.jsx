import React, { useRef, useEffect, useState } from "react";
import "./Login.scss";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/footer/Footer";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Button from 'react-bootstrap/Button';
import api from "../../customApi";
import useAuth from '../../hooks/useAuth'

const Verify = () => {
    const { name, tel, emp_no } = useAuth()

const userRef = useRef();
const [error, setError] = useState(false);
const [user, setUser] = useState(null);
const [ loading, setLoading ] = useState(false)
// const [username, setUsername] = useState("");
const [code, setCode] = useState("");
const navigate = useNavigate();
useEffect(() => {
    userRef.current.focus();
}, []);
const refreshToken = async () => {
    try {
    const res = await axios.post("/refresh", { token: user.refreshToken });
    setUser({
        ...user,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
    });
    return res.data;
    } catch (err) {
    console.log(err);
    }
};
function Loading() {
    return <div className="spinner" />
}
const axiosJWT = axios.create();
axiosJWT.interceptors.request.use(
    async (config) => {
    let currentDate = new Date();
    const decodedToken = jwt_decode(user.accessToken);
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await refreshToken();
        config.headers["authorization"] = "Bearer " + data.accessToken;
    }
    return config;
    },
    (error) => {
    return Promise.reject(error);
    }
);
// Account SID: ACefca0d2f15279e98ff368aea94653563 Twilio
// Auth Token : 4927654a00ffd03b5eb59111af257a7f  Twilio
// Twilio phone number : +12176451638 
const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true) 
    await axios.post(`${api}/phone/verify?value=${emp_no}`, {
            code
        })
        .then(response => {
            setLoading(false)
            // Handle the response from the server
            console.log("response.data is:", response.data);
            if (response.data.message === "You're verified successfully") {
            // Login succeeded, navigate to dashboard
            navigate('/dashboard');
            } else if (response.data.error_message === "Incorrect credentials") {
                setError(true)
            }
        })
        .catch(error => {
            // Handle any errors that occur
            console.error(error);
        });
        };
return (
    <div className="login">
    <Navbar2 />
    <div className="ahmed">
        <section >
            <p>مرحباً {name}</p>
            <small style={{ marginBottom: "20px" }}>توثيق رقم الجوال</small>
            <form className='multipart/form-data' onSubmit={handleSubmit} action="/phone/verify" method="post">
                <label htmlFor='code' style={{ marginBottom: "30px", fontSize:"13px"}}>
                    تم إرسال كود التوثيق إلي رقم الجوال الخاص بك {tel} 
                </label>
                {error && <span>كود التوثيق غير صحيح</span>}
                <input
                    placeholder="أدخل الكود المرسل"
                    type='text'
                    name='code'
                    id='code'
                    ref={userRef} 
                    className='code'
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                />
                <Button type="submit" variant="success" style={{backgroundColor:"#343a40", width:"100%", fontSize:"14px",marginTop:"30px"}}>{loading? Loading():"توثيق"}</Button>
            </form>
        </section>
    </div>
    <Footer />
    </div>
);
};

export default Verify;
