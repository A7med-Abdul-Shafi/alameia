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
import api from "../../customApi"
const Login = () => {
  const errRef = useRef();
  const userRef = useRef();
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [success, setSuccess] = useState(false);
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
        setError("No Server Response");
      } else if (err.status === 400) {
        setError("Missing Username or Password");
      } else if (err.status === 401) {
        setError("Unauthorized");
      } else {
        setError(err.data?.message);
      }
      // errRef.current.focus();
    }
  };

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //         const res = await axios.post(`${api}/auth`, { username, password });
  //         navigate('/dashboard')
  //         setUser(res.data);
  //     } catch (err) {
  //         setError(true);
  //         console.log(err);
  //     }
  // };
  const handleDelete = async (id) => {
    setSuccess(false);
    setError(false);
    try {
      await axiosJWT.delete("/users/" + id, {
        headers: { authorization: "Bearer " + user.accessToken },
      });
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
  };
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
              <input type="checkbox" id="box" />
              <p style={{ fontSize: "15px" }}>تذكرني</p>
            </div>
          </div>
          {error && <span>إسم المستخدم أو كلمة المرور خاطئة</span>}
          <button type="submit" style={{ fontSize: "18px" }}>
            دخول
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
