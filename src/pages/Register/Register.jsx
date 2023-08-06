import React from "react";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import "./register.css";
import Footer from "../../Components/footer/Footer";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import api from "../../customApi";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  function Loading() {
    return <div className="spinner" />
  }
  const passwordRef = useRef();
  const userRef = useRef();
  const errRef = useRef();
  const successRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [ isLoading, setIsLoading ] = useState(false)
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e, data) => {
    e.preventDefault();
    setIsLoading(true)
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      await axios.post(
        `${api}/register`,
        JSON.stringify({ username: user, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setIsLoading(false)
      setUser("");
      setPwd("");
      setMatchPwd("");
      setSuccessMsg("تم تسجيل مستخدم بنجاح");
      successRef.current.focus();
    } catch (err) {
      if (!err?.response) {
        setErrMsg(" يوجد مشكلة في السيرفر");
      } else if (err.response?.status === 409) {
        setErrMsg(" إسم المستخدم مسجل من قبل");
      } else {
        setErrMsg("فشل التسجيل ");
      }
      setIsLoading(false)
      errRef.current.focus();
    }
  };
  return (
    <div className="contain">
      <Navbar2 />
      <div className="register">
        <section>
          <>
            {successMsg ? (
              <p
                ref={successRef}
                className={successMsg ? "successmsg" : "offscreen"}
                aria-live="assertive"
              >
                {successMsg}
              </p>
            ) : errMsg ? (
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
            ) : (
              ""
            )}
          </>
          <h3 style={{color:"#8cd87c", fontSize:"20px"}}>تسجيل</h3>
          <form onSubmit={handleSubmit}>
            <div style={{marginTop: "1rem",display:"flex", alignItems:"center", color:"#8cd87c",fontSize:"14px"}}>
            <label htmlFor="username" >
              إسم المستخدم : 
            </label>
            <div className={validName ? "valid" : "hide"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              </svg>
            </div>
            <div className={validName || !user ? "hide" : "invalid"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </div>
            </div>
            <input
              type="text"
              id="username"
              name="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? "instructions" : "offscreen"
              }
            >
              <div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
              4 إلي 24 رمز- يجب أن يبدأ بحرف.
              <br />
              الحروف والأرقام والواصلة والشرطة السفلية مسموح بها.
            </p>
            <div style={{display:"flex", alignItems:"center"}}>
            <label style={{ marginTop: "1rem", color:"#8cd87c",fontSize:"14px" }} htmlFor="password">
              كلمة المرور :
            </label>
            <div className={validPwd ? "valid" : "hide"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
              </svg>
            </div>
              <div className={validPwd || !pwd ? "hide" : "invalid"}>
              <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
              </div>
              
            </div>
            
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="off"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              InputRef={passwordRef}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
              8 إلي 24 حرف - يجب أن يتضمن حرف كبير وحرف صغير ورقم ورمز خاص.
              <br />
              الرموز الخاصة مسموح بها:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
            <div style={{display:"flex", alignItems:"center"}}>
              <label style={{ marginTop: "1rem", color:"#8cd87c",fontSize:"14px" }} htmlFor="confirm_pwd">
                تأكيد كلمة المرور :
              </label>
              <div className={validMatch && matchPwd ? "valid" : "hide"}>
                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                </svg>
              </div>
              <div className={validMatch || !matchPwd ? "hide" : "invalid"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
              </div>
            </div>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
              يجب تطابق كلمة المرور.
            </p>
            <button
              className="btn btn-success"
              style={{ marginTop: "2rem",backgroundColor:"#343a40", fontSize:"14px" }}
              disabled={!validName || !validPwd || !validMatch ? true : false}
            >
              {isLoading ? Loading(): "تسجيل"}
            </button>
          </form>
          <small>
            مسجل بالفعل ؟
            <br />
            <span className="line1">
              <a href="/login" style={{color:"#8cd87c"}}> تسجيل الدخول</a>
            </span>
          </small>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default Register;
