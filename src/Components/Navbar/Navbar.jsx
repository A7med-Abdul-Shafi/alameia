import "./Navbar.scss";
import useAuth from '../../hooks/useAuth'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import api from "../../customApi";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Button } from "react-bootstrap";

const Navbar = () => {
  function Loading() {
    return <div className="spinner" />
  }
  const { name, id, userPhoto } = useAuth()

const [loading, setLoading] = useState(false)
const handleFileUpload = async () => {
  const formData = new FormData();
  formData.append('file', file);
  setLoading(true)
  try {
  const response = await axios.post(`${api}/upload`, formData);
  setLoading(false)
  const photoUrl = response.data.photoUrl;
  await axios.put(`${api}/usersphoto/${id}`, { photoUrl })
  setFile(null);
  } catch (error) {
    console.error(error);
  }
}

  const [file, setFile] = useState(null);

  const { data } = useQuery(["remarks"], async () => {
      return await axios.get(`${api}/remarks/getall?value=${name}`).then((res) => res.data);
    }
  );
  const dataLength = data?.length;
  const { data: data2 } = useQuery(["messages"], async () => {
    const response =
    await fetch(`${api}/messages/getall`)
    const data = await response.json();
    return data;
    });
  return (
    <div
      className="navbar fixed-top navbar-dark "
      id="navbarSupportedContent"
      style={{backgroundColor:"#198754"}}
    >
      <div className="wrapper">
        <div className="top">
          <span className="logo">المجمعات السكنية بمكة المكرمة</span>
        </div>
        <div className="items">
          <div className="item">
          </div>
          <div className="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-fullscreen-exit"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z" />
            </svg>
          </div>
          <Link to="/dashboard/remarkslist">
          <div className="item">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chat-left-fill" viewBox="0 0 16 16">
              <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            </svg>
              <div className={dataLength < 1 ? "counter":"counter2"}>{dataLength === 0?"": dataLength}</div>
          </div>
            </Link>
          <h5>{name}</h5>
          <div className="item" >
          <label style={{ marginTop: "0rem" }} htmlFor="file">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </label>
          <input 
              name="file"
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <img
              className="avatar"
              src={
                userPhoto || "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="img"
            />
            {file && <Button type="button" variant="primary" onClick={handleFileUpload}>{loading? Loading():"إضافة"}</Button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
