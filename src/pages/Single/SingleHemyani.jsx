import "./Single.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../customApi";
const url = api;
const Single = () => {
  let { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get(`${url}/hemyani/${id}`, {
        cancelToken: cancelToken.token,
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("cancelled");
        } else {
        }
      });

    return () => {
      cancelToken.cancel();
    };
  }, [id]);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">تعديل</div>
            <h1 className="title">معلومات العامل</h1>
            <div className="item">
              <img
                src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{data.name}</h1>
                <div className="detailItem">
                  <span className="itemKey"> الرقم الوظيفي : </span>
                  <span className="itemValue">{data.emp_no}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">المشروع:</span>
                  <span className="itemValue">{data.project}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">رقم الإقامة:</span>
                  <span className="itemValue">{data.iqama_no}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">الجنسية:</span>
                  <span className="itemValue">{data.nationality}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">تاريخ التسكين:</span>
                  <span className="itemValue">{data.in_date}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">تاريخ الخروج:</span>
                  <span className="itemValue">{data.out_date}</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        </div>
        {/* <div className="bottom">
        <h1 className="title">Last Transactions</h1>
            <List/>
        </div> */}
      </div>
    </div>
  );
};

export default Single;
