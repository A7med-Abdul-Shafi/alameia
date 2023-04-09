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

const Login = () => {
  const userRef = useRef();
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [persist, setPersist] = usePersist();
  const [login, { isLoading }] = useLoginMutation();

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
      const { accessToken } = await login({ username, password }).unwrap();
      dispatch(setCredentials({ accessToken }));
    setUsername("");
    setPassword("");
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
  return (
    <div className="login">
      <Navbar2 />
      <form className="hero" onSubmit={handleSubmit}>
        <section>
          <div className="ahmed">
            <h2>تسجيل الدخول</h2>
          </div>
          <div className="row">
            <div className="name">
              <input
                autoComplete="off"
                type="text"
                ref={userRef}
                id="name"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="name" style={{ fontSize: "15px" }}>
                إسم المستخدم
              </label>
            </div>
            <div className="name">
              <input
                autoComplete="off"
                type="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password" style={{ fontSize: "15px" }}>
                كلمة المرور
              </label>
            </div>
            <div className="check">
              <input 
                type="checkbox" id="box" 
                onChange={handleToggle}
                checked={persist}
                />
              <p style={{ fontSize: "15px" }}>تذكرني</p>
            </div>
          </div>
          {error && <span>إسم المستخدم أو كلمة المرور خاطئة</span>}
          <button type="submit" style={{ fontSize: "18px" }}>
            {isLoading?(Loading()):"دخول"}
          </button>
          <div className="create">
            <Link to="/register">
              <button>تسجيل</button>
            </Link>
            <button>نسيت كلمة المرور</button>
          </div>
        </section>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
