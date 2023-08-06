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
  return (
    <>
      <div className="widget">
        <div className="left">
          <span className="title">العالمية</span>
          <span className="counter">{countA}</span>
            <p className="link">عرض التفاصيل</p>
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
    </>
  );
};

export default Widget;
