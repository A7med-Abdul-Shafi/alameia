import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import api from "../../customApi";

function Featured() {
  const [countA, setCountA] = useState(null);
  useEffect(() => {
    const countAlameia = async () => {
      await axios.get(`${api}/alameia/count`).then((response) => {
        setCountA(response.data.length);
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
  const [countE2, setCountE2] = useState(null);
  useEffect(() => {
    const countEwaab = async () => {
      await axios.get(`${api}/ewaab/count`).then((response) => {
        setCountE2(response.data.length);
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

  return (
    <div className="content">
      <div className="featured">
        <div className="top">
          <h1 className="title">العالمية</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar
              value={Math.floor((countA / 3248) * 100)}
              text={Math.floor((countA / 3248) * 100) + "%"}
              strokeWidth={5}
            />
          </div>
          <p className="title">نسبة التسكين</p>
          <p className="amount">الطاقة الإستيعابية : 3248</p>
          {/* <p className="desc">
              Previous transactions processing. Last payments may not be included.
            </p> */}
          <div className="summary">
            {/* <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult negative">
                  <KeyboardArrowDownIcon fontSize="small" />
                  <div className="resultAmount">$12.4k</div>
                </div>
              </div> */}
            <div className="item">
              <div className="itemTitle"> أعداد السكن</div>
              <div className="itemResult positive">
                {/* <KeyboardArrowUpOutlinedIcon fontSize="small" /> */}
                <div className="resultAmount">{countA}</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle"> عدد الفراغات</div>
              <div className="itemResult positive">
                {/* <KeyboardArrowUpOutlinedIcon fontSize="small" /> */}
                <div className="resultAmount">{3248 - countA}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured">
        <div className="top">
          <h1 className="title">الحرمين</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar
              value={Math.floor((countH / 8000) * 100)}
              text={Math.floor((countH / 8000) * 100) + "%"}
              strokeWidth={5}
            />
          </div>
          <p className="title">نسبة التسكين</p>
          <p className="amount">الطاقة الإستيعابية : 8000</p>
          {/* <p className="desc">
              Previous transactions processing. Last payments may not be included.
            </p> */}
          <div className="summary">
            {/* <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult negative">
                  <KeyboardArrowDownIcon fontSize="small" />
                  <div className="resultAmount">$12.4k</div>
                </div>
              </div> */}
            <div className="item">
              <div className="itemTitle"> أعداد السكن</div>
              <div className="itemResult positive">
                {/* <KeyboardArrowUpOutlinedIcon fontSize="small" /> */}
                <div className="resultAmount">{countH}</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle"> عدد الفراغات</div>
              <div className="itemResult positive">
                {/* <KeyboardArrowUpOutlinedIcon fontSize="small" /> */}
                <div className="resultAmount">{8000 - countH}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="contenet"></div>
      </div>
      <div className="featured">
        <div className="top">
          <h1 className="title">إيواء 1</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar
              value={Math.floor((countE1 / 2000) * 100)}
              text={Math.floor((countE1 / 2000) * 100) + "%"}
              strokeWidth={5}
            />
          </div>
          <p className="title">نسبة التسكين</p>
          <p className="amount">الطاقة الإستيعابية : 2000</p>
          {/* <p className="desc">
              Previous transactions processing. Last payments may not be included.
            </p> */}
          <div className="summary">
            {/* <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult negative">
                  <KeyboardArrowDownIcon fontSize="small" />
                  <div className="resultAmount">$12.4k</div>
                </div>
              </div> */}
            <div className="item">
              <div className="itemTitle"> أعداد السكن</div>
              <div className="itemResult positive">
                {/* <KeyboardArrowUpOutlinedIcon fontSize="small" /> */}
                <div className="resultAmount">{countE1}</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle"> عدد الفراغات</div>
              <div className="itemResult positive">
                {/* <KeyboardArrowUpOutlinedIcon fontSize="small" /> */}
                <div className="resultAmount">{2000 - countE1}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured">
        <div className="top">
          <h1 className="title">إيواء 2</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar
              value={Math.floor((countE2 / 2000) * 100)}
              text={Math.floor((countE2 / 2000) * 100) + "%"}
              strokeWidth={5}
            />
          </div>
          <p className="title">نسبة التسكين</p>
          <p className="amount">الطاقة الإستيعابية : 2000</p>
          {/* <p className="desc">
              Previous transactions processing. Last payments may not be included.
            </p> */}
          <div className="summary">
            {/* <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult negative">
                  <KeyboardArrowDownIcon fontSize="small" /> 
                  <div className="resultAmount">$12.4k</div>
                </div>
              </div> */}
            <div className="item">
              <div className="itemTitle"> أعداد السكن</div>
              <div className="itemResult positive">
                {/* <KeyboardArrowUpOutlinedIcon fontSize="small" /> */}
                <div className="resultAmount">{countE2}</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">عدد الفراغات</div>
              <div className="itemResult positive">
                {/* <KeyboardArrowUpOutlinedIcon fontSize="small" /> */}
                <div className="resultAmount">{2000 - countE2}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
