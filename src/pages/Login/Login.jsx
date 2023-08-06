import React, { useRef, useEffect, useState } from "react";
import "./Login.scss";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../../Components/footer/Footer";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../auth/authSlice";
import { useLoginMutation } from "../../auth/authApiSlice";
import usePersist from "../../hooks/usePersist";
import Button from 'react-bootstrap/Button';

const Login = () => {
  const userRef = useRef();
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [persist, setPersist] = usePersist();
  const [login, { isLoading }] = useLoginMutation();
  const [code, setCode] = useState("");
  const dispatch = useDispatch();

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await login({ username, password, roles: "الحرمين" }).unwrap();
      dispatch(setCredentials({ accessToken }));
      setUsername("");
      setPassword("");
      // navigate("/phone/verify");
      navigate("/dashboard");
      } catch (err) {
        if (!err.status) {
          setError('لا يوجد إتصال بالسيرفر');
        } else if (err.status === 400) {
          setError('إسم المستخدم أو كلمة المرور غير صحيحة');
        } else if (err.status === 401) {
          setError('المستخدم غير مصرح');
        } else {
          setError(err.data?.message);
        }
      }
    };
  const handleToggle = () => setPersist(prev => !prev)
  const content = (
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
    <label htmlFor="name" style={{fontSize:"14px"}}>إسم المستخدم :</label>
    <input
      placeholder=""
      autoComplete="off"
      type="text"
      ref={userRef}
      id="name"
      required
      onChange={(e) => setUsername(e.target.value)}
    />
    <br />
    <label htmlFor="password" style={{fontSize:"14px"}}>كلمة المرور :</label>
    <input
      placeholder=""
      autoComplete="off"
      type="password"
      id="password"
      required
      onChange={(e) => setPassword(e.target.value)}
    />
    <br />
    <div className="form-check">
        <input 
          placeholder=""
          type="checkbox" id="box" 
          onChange={handleToggle}
          checked={persist}
          className="form-check-input" 
          />
        <label className="form-check-label" htmlFor="flexCheckDefault">تذكرني</label>
      </div>
      {error && <span>إسم المستخدم أو كلمة المرور خاطئة</span>}
    <Button type="submit" variant="success" style={{backgroundColor:"#343a40", fontSize:"14px", marginBottom:"40px"}} > {isLoading?Loading():"دخول"}</Button>

    <div style={{display:"flex", justifyContent:"space-between", gap:"20px"}}>
    <Link to="/register" style={{width:"100%"}}>
    <Button type="button" variant="success" style={{backgroundColor:"#343a40", width:"100%", fontSize:"14px"}} >تسجيل</Button>
    </Link>
    <Button type="button" variant="success" style={{backgroundColor:"#343a40", width:"100%", fontSize:"14px"}} >نسيت كلمة المرور</Button>
    </div>
    </form>
  )
const verify = (
  <>
<small style={{ marginBottom: "20px" }}>توثيق رقم التليفون</small>
<form className='multipart/form-data' onSubmit={handleSubmit}>
    <label htmlFor='code' style={{ marginBottom: "30px", fontSize:"14px"}}>
        تم إرسال كود التوثيق إلي رقم الجوال الخاص بك
    </label>
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
    <Button type="submit" variant="success" style={{backgroundColor:"#343a40", width:"100%", fontSize:"14px",marginTop:"30px"}}>توثيق</Button>
</form>
</>
)
  return (
    <div className="login">
      <Navbar2 />
      <div className="ahmed">
      <section >
        <p>تسجيل الدخول</p>
        {content}
        {/* {verify} */}
        </section>
      </div>
  

      <Footer />
    </div>
  );
};

export default Login;
