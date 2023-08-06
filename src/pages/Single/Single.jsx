import "./Single.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import api from "../../customApi";
import html2pdf from "html2pdf.js";
import header from "./sbg.png";
import logo from "./r.jpeg";
const Single = () => {
  const elementRef = useRef();
  const element = elementRef.current;
  const handlePdf = () => {
    const opt = {
      margin: [0, 0.2, 0, 0.2],
      filename: `${emp_no}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      // pagebreak: { mode: 'avoid-all', before: '.page-break' },
    };
    html2pdf().set(opt).from(element).save();
  };

  let { emp_no } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(`${api}/data/searchall?value=${emp_no}`).then((response) => {
      setData(response.data);
    });
  }, [emp_no]);
  const content = (
    <div
      className="left"
      ref={elementRef}
      style={{ direction: "rtl", fontWeight: "bold" }}
    >
      <div
        style={{
          display: "flex",
          height: "60px",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "5px",
        }}
      >
        <img src={header} alt="logo" />
        <dd style={{ fontFamily: "Arial" }}>معلومات العامل</dd>
        <img src={logo} alt="logo" style={{ width: "130px", height: "58px" }} />
      </div>
      <div
        style={{ height: "1px", backgroundColor: "black", margin: "0px 10px" }}
      ></div>
      <br />
      <div>
        <span style={{ margin: "0px 10px 10px 10px", float: "left" }}>
          التاريخ {":"} {new Date().toLocaleDateString()}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          fontSize: "16px",
          justifyContent: "space-between",
          direction: "rtl",
          letterSpacing: 0,
        }}
      >
        <div>
          <dd style={{ float: "right", fontFamily: "Arial" }}>
            الإسم {":"} {data[0]?.name}
          </dd>
          <br />
          <br />
          <dl
            style={{
              display: "flex",
              gap: "60px",
              justifyContent: "space-between",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            <dl>
              <dd
                style={{
                  marginBottom: "20px",
                  fontFamily: "Arial",
                  direction: "rtl",
                }}
              >
                الرقم الوظيفي {":"}
                {data[0]?.emp_no}
              </dd>
              <dd
                style={{
                  marginBottom: "20px",
                  fontFamily: "Arial",
                  direction: "rtl",
                }}
              >
                المشروع {":"}
                {data[0]?.project}
              </dd>
              <dd
                style={{
                  marginBottom: "20px",
                  fontFamily: "Arial",
                  direction: "rtl",
                }}
              >
                رقم الإقامة {":"}
                {data[0]?.iqama_no}
              </dd>
              <dd
                style={{
                  marginBottom: "20px",
                  fontFamily: "Arial",
                  direction: "rtl",
                }}
              >
                الجنسية {":"}
                {data[0]?.nationality}
              </dd>
              <dd
                style={{
                  marginBottom: "20px",
                  fontFamily: "Arial",
                  direction: "rtl",
                }}
              >
                تاريخ التسكين {":"}
                {data[0]?.in_date}
              </dd>
              <dd
                style={{
                  marginBottom: "20px",
                  fontFamily: "Arial",
                  direction: "rtl",
                }}
              >
                تاريخ الخروج {":"}
                {data[0]?.out_date === null
                  ? "لا يوجد إخلاء طرف"
                  : data[0]?.out_date}
              </dd>
              <dd
                style={{
                  marginBottom: "20px",
                  fontFamily: "Arial",
                  direction: "rtl",
                }}
              >
                السكن {":"}
                {data[0]?.housing}
              </dd>
            </dl>
            <dl>
              <dd style={{ marginBottom: "20px", fontFamily: "Arial" }}>
                الحالة {":"}
                {data[0]?.out_reason === null
                  ? "علي رأس العمل"
                  : data[0]?.out_reason}
              </dd>
              <dd style={{ marginBottom: "20px", fontFamily: "Arial" }}>
                جوال {":"}
                {data[0]?.mobile}
              </dd>
              <dd style={{ marginBottom: "20px", fontFamily: "Arial" }}>
                رقم الجواز {":"}
                {data[0]?.passport_no === null
                  ? "لا يوجد"
                  : data[0]?.passport_no}
              </dd>
              <dd
                style={{
                  marginBottom: "20px",
                  fontFamily: "Arial",
                  direction: "rtl",
                }}
              >
                المهنة {":"}
                {data[0]?.profession}
              </dd>
              <dd style={{ marginBottom: "20px", fontFamily: "Arial" }}>
                الفئة {":"}
                {data[0]?.class}
              </dd>
              <dd style={{ marginBottom: "20px", fontFamily: "Arial" }}>
                خصم بون الطعام {":"}
                {data[0]?.coupon}
              </dd>
            </dl>
          </dl>
        </div>
        <img
          style={{ maxWidth: "150px", height: "150px", borderRadius: "20px" }}
          src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          alt=""
        />
      </div>
    </div>
  );
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top" style={{ display: "block" }}>
          <div
            onClick={handlePdf}
            style={{
              margin: "5px 50px",
              adding: "5px",
              fontSize: "13px",
              color: "rgb(7, 156, 64)",
              backgroundColor: "#7c64d446",
              textAlign: "center",
              borderRadius: "0px 5px 0px 5px",
              cursor: "pointer",
            }}
          >
            طباعة
          </div>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Single;
