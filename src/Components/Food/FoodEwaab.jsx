import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading";
import Swal from "sweetalert2";
import api from "../../customApi";

function FoodEwaab() {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const projects = async () => {
      await axios.get(`${api}/ewaab/projects`).then((res) => {
        setOptions(res.data);
      });
    };
    projects();
  }, []);
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [project, setProject] = useState("");
  const [isLoading, setIsLoadin] = useState(false);
  const data = { date, number, project };
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoadin(true);
    await axios
      .post(`${api}/foodewaab`, data)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          customClass: "swal-wide",
          title: `تم إضافة المدخل بنجاح`,
          showConfirmButton: false,
          timer: 1700,
        });
      })
      .catch((err) => {
        console.log(err.code);
      })
      .finally(() => setIsLoadin(false));
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container">
      <h1 style={{ margin: "15px 0px" }}>
        تسجيل الوجبات الإضافية - سكن إيواء 2
      </h1>
      <form style={{ marginTop: "30px" }} onSubmit={onSubmit}>
        <div className="form-row">
          <div className="form-group col-md-5">
            <label htmlFor="date" style={{ marginBottom: "20px" }}>
              التاريخ :
            </label>
            <input
              type="date"
              name="date"
              className="form-control"
              id="date"
              required
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group col-md-5">
            <label htmlFor="inputPassword4" style={{ marginBottom: "20px" }}>
              عدد الوجبات :
            </label>
            <input
              type="number"
              name="number"
              className="form-control"
              id="inputPassword4"
              required
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="project ">المشروع :</label>
          <select
            name="project"
            id="project"
            onChange={(e) => setProject(e.target.value)}
            className="form-control col-md-5"
            style={{ fontSize: "13px" }}
            required
          >
            <option value="">إختر المشروع</option>
            {options.map((option, index) => (
              <option key={index} value={option.project}>
                {option.project}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          إضافة
        </button>
      </form>
    </div>
  );
}

export default FoodEwaab;
