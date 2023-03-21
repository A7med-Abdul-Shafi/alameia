import "./widget.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import api from "../../customApi";
const Widget = () => {
  const [countA, setCountA] = useState(null);
  useEffect(() => {
    const countAlameia = async () => {
      await axios.get(`${api}/alameia/count`).then((response) => {
        setCountA(response.data.length);
      });
    };
    countAlameia();
  }, []);
  const [countAclear, setCountAclear] = useState(null);
  useEffect(() => {
    const countAlameia = async () => {
      await axios.get(`${api}/alameia/count/clear`).then((response) => {
        setCountAclear(response.data.length);
      });
    };
    countAlameia();
  }, []);
  const [countE1, setCountE1] = useState(null);
  useEffect(() => {
    const countEwaaa = async () => {
      await axios.get(`${api}/ewaaa/count`).then((response) => {
        setCountE1(response.data.length);
      });
    };
    countEwaaa();
  }, []);
  const [countE1clear, setCountE1clear] = useState(null);
  useEffect(() => {
    const countEwaaa = async () => {
      await axios.get(`${api}/ewaaa/count/clear`).then((response) => {
        setCountE1clear(response.data.length);
      });
    };
    countEwaaa();
  }, []);
  const [countE2, setCountE2] = useState(null);
  useEffect(() => {
    const countEwaab = async () => {
      await axios.get(`${api}/ewaab/count`).then((response) => {
        setCountE2(response.data.length);
      });
    };
    countEwaab();
  }, []);
  const [countE2clear, setCountE2clear] = useState(null);
  useEffect(() => {
    const countEwaab = async () => {
      await axios.get(`${api}/ewaab/count/clear`).then((response) => {
        setCountE2clear(response.data.length);
      });
    };
    countEwaab();
  }, []);
  const [countH, setCountH] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/haramain/count`).then((response) => {
        setCountH(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countHclear, setCountHclear] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/haramain/count/clear`).then((response) => {
        setCountHclear(response.data.length);
      });
    };
    countHaramain();
  }, []);
  return (
    <>
      <div className="widget">
        <div className="left">
          <span className="title">العالمية</span>
          <span className="counter">{countA}</span>
          <span className="link">عرض التفاصيل</span>
        </div>
        <div className="right">
          {countAclear > 0 ? (
            <>
              <div className="percentage positive" style={{ color: "crimson" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </svg>
                إخلاءات
              </div>
              <span
                className="counter"
                style={{ display: "flex", justifyContent: "left" }}
              >
                {countAclear}
              </span>
            </>
          ) : (
            <>
              <div className="percentage positive" style={{ color: "green" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                إخلاءات
              </div>
              <span
                className="counter"
                style={{ display: "flex", justifyContent: "left" }}
              >
                {countAclear}
              </span>
            </>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          </svg>
        </div>
      </div>
      <div className="widget">
        <div className="left">
          <span className="title">الحرمين</span>
          <span className="counter">{countH}</span>
          <span className="link">عرض التفاصيل</span>
        </div>
        <div className="right">
          {countHclear > 0 ? (
            <>
              <div className="percentage positive" style={{ color: "crimson" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </svg>
                إخلاءات
              </div>
              <span
                className="counter"
                style={{ display: "flex", justifyContent: "left" }}
              >
                {countHclear}
              </span>
            </>
          ) : (
            <>
              <div className="percentage positive" style={{ color: "green" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                إخلاءات
              </div>
              <span
                className="counter"
                style={{ display: "flex", justifyContent: "left" }}
              >
                {countHclear}
              </span>
            </>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          </svg>
        </div>
      </div>
      <div className="widget">
        <div className="left">
          <span className="title">إيواء 1</span>
          <span className="counter">{countE1}</span>
          <span className="link">عرض التفاصيل</span>
        </div>
        <div className="right">
          {countE1clear > 0 ? (
            <>
              <div className="percentage positive" style={{ color: "crimson" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </svg>
                إخلاءات
              </div>
              <span
                className="counter"
                style={{ display: "flex", justifyContent: "left" }}
              >
                {countE1clear}
              </span>
            </>
          ) : (
            <>
              <div className="percentage positive" style={{ color: "green" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                إخلاءات
              </div>
              <span
                className="counter"
                style={{ display: "flex", justifyContent: "left" }}
              >
                {countE1clear}
              </span>
            </>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          </svg>
        </div>
      </div>
      <div className="widget">
        <div className="left">
          <span className="title">إيواء 2</span>
          <span className="counter">{countE2}</span>
          <span className="link">عرض التفاصيل</span>
        </div>
        <div className="right">
          {countE2clear > 0 ? (
            <>
              <div className="percentage positive" style={{ color: "crimson" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                  />
                </svg>
                إخلاءات
              </div>
              <span
                className="counter"
                style={{ display: "flex", justifyContent: "left" }}
              >
                {countE2clear}
              </span>
            </>
          ) : (
            <>
              <div className="percentage positive" style={{ color: "green" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                إخلاءات
              </div>
              <span
                className="counter"
                style={{ display: "flex", justifyContent: "left" }}
              >
                {countE2clear}
              </span>
            </>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Widget;
