import React, { useState, useRef } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import api from "../../../customApi";

function EditMorganNaseem() {
  function Loading() {
    return <div className="spinner" />;
  }
  const validation = yup.object().shape({
    emp_no: yup.number().required("أدخل الرقم الوظيفي"),
    name: yup.string().required("أدخل الإسم "),
    project: yup.string().required("أدخل المشروع "),
    nationality: yup.string().required("أدخل الجنسية "),
    iqama_no: yup.number().required("أدخل رقم الإقامة"),
    room_no: yup.string().required("أدخل رقم الغرفة "),
    coupon: yup.string().required("أدخل حالة البون"),
    in_date: yup.date().required("أدخل  تاريخ التسكين"),
    in_reason: yup.string().required("أدخل  سبب التسكين"),
    out_date: yup.date(),
  });

  const ref = useRef(0);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [emp_no, setEmp_no] = useState(data[0]?.emp_no);
  const [name, setName] = useState(data[0]?.name);
  const [project, setProject] = useState(data[0]?.project);
  const [nationality, setNationality] = useState(data[0]?.nationality);
  const [iqama_no, setIqama_no] = useState(data[0]?.iqama_no);
  const [room_no, setRoom_no] = useState(data[0]?.room_no);
  const [coupon, setCoupon] = useState(data[0]?.coupon);
  const [in_date, setIn_date] = useState(data[0]?.in_date);
  const [in_reason, setIn_reason] = useState(data[0]?.in_reason);
  const [out_date, setOut_date] = useState(data[0]?.in_date);

  const fetchSearchResults = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await axios
      .get(`${api}/morgan1naseem/search/edit?q=${query}`)
      .then(async (res) => {
        setData(res.data);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.status);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("Error", err.message);
        }
      })
      .finally(() => setIsLoading(false));
  };

  const updateResults = async (e, req) => {
    e.preventDefault();
    const id = data[0].id;
    setIsLoading(true);
    const item = {
      emp_no,
      name,
      project,
      nationality,
      iqama_no,
      room_no,
      coupon,
      in_date,
      in_reason,
      out_date,
    };
    await axios
      .put(`${api}/morgan1naseem/update/` + id, item)
      .then((response) => {
        console.log(item);
        // onSubmitProps.resetForm();
        Swal.fire({
          position: "center",
          icon: "success",
          customClass: "swal-wide",
          title: "تم تحديث البيانات بنجاح",
          showConfirmButton: false,
          timer: 1700,
        });
      })
      .catch((error) => {
        if (error.response) {
          Swal.fire({
            position: "center",
            icon: "error",
            customClass: "swal-wide",
            title: "حدثت مشكلة ما",
            showConfirmButton: true,
          });
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <>
      <div className="newContainer1">
        <div className="top">
          <h5>تعديل بيانات</h5>
          <form onSubmit={fetchSearchResults}>
            <div className="search">
              <input
                type="text"
                required
                placeholder="  بحث "
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </form>
        </div>
        <>
          {isLoading ? (
            Loading()
          ) : data && data.length > 0 ? (
            <Formik validationSchema={validation} enableReinitialize={true}>
              <Form encType="multipart/form-data">
                <div className="bottom">
                  <div className="right">
                    <label style={{ marginTop: "0rem" }} htmlFor="emp_no">
                      الرقم الوظيفي
                    </label>
                    <input
                      ref={ref}
                      autoComplete="off"
                      className="formInput"
                      type="number"
                      id="emp_no"
                      name="emp_no"
                      placeholder=""
                      defaultValue={data[0].emp_no}
                      onChange={(e) => setEmp_no(e.target.value)}
                    />
                    <label style={{ marginTop: "0rem" }} htmlFor="name">
                      الإسم
                    </label>
                    <input
                      ref={ref}
                      autoComplete="off"
                      className="formInput"
                      type="text"
                      id="name"
                      name="name"
                      placeholder=""
                      defaultValue={data[0].name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label style={{ marginTop: "0rem" }} htmlFor="project">
                      المشروع{" "}
                    </label>
                    <input
                      className="formInput"
                      type="text"
                      id="project"
                      name="project"
                      defaultValue={data[0].project}
                      onChange={(e) => setProject(e.target.value)}
                    />
                    <label style={{ marginTop: "0rem" }} htmlFor="nationality">
                      الجنسية{" "}
                    </label>
                    <input
                      autoComplete="off"
                      className="formInput"
                      type="text"
                      id="nationality"
                      name="nationality"
                      placeholder=""
                      defaultValue={data[0].nationality}
                      onChange={(e) => setNationality(e.target.value)}
                    />
                  </div>
                  <div className="center">
                    <div className="room" style={{ marginTop: "0rem" }}>
                      <div>
                        <label htmlFor="room">رقم الغرفة</label>
                        <input
                          className="formInput"
                          data-live-search="true"
                          id="room_no"
                          name="room_no"
                          placeholder=""
                          defaultValue={data[0].room_no}
                          onChange={(e) => setRoom_no(e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="coupon">البون</label>
                        <select
                          className="formInput"
                          type="text"
                          id="coupon"
                          name="coupon"
                          placeholder=""
                          defaultValue={data[0].coupon}
                          onChange={(e) => setCoupon(e.target.value)}
                        >
                          <option value="0">إختر بون الطعام</option>
                          <option value="نعم">نعم</option>
                          <option value="لا">لا</option>
                        </select>
                      </div>
                    </div>
                    <label style={{ marginTop: "0rem" }} htmlFor="in_date">
                      تاريخ التسكين
                    </label>
                    <input
                      autoComplete="off"
                      className="formInput"
                      type="date"
                      id="in_date"
                      name="in_date"
                      placeholder=""
                      defaultValue={data[0].in_date}
                      onChange={(e) => setIn_date(e.target.value)}
                    />
                    <label style={{ marginTop: "0rem" }} htmlFor="iqama_no">
                      رقم الإقامة{" "}
                    </label>
                    <input
                      autoComplete="off"
                      className="formInput"
                      type="number"
                      id="iqama_no"
                      name="iqama_no"
                      placeholder=""
                      defaultValue={data[0].iqama_no}
                      onChange={(e) => setIqama_no(e.target.value)}
                    />
                    <label style={{ marginTop: "0rem" }} htmlFor="in_reason">
                      تاريخ الخروج
                    </label>
                    <input
                      className="formInput"
                      type="date"
                      id="out_date"
                      name="out_date"
                      defaultValue={data[0].out_date}
                      onChange={(e) => setOut_date(e.target.valueAsDate)}
                    />
                  </div>
                </div>
                <button
                  style={{
                    backgroundColor: "teal",
                    width: "12%",
                    alignSelf: "center",
                  }}
                  type="button"
                  className="btn btn-danger"
                  onClick={updateResults}
                >
                  تحديث
                </button>
              </Form>
            </Formik>
          ) : (
            <Formik>
              <Form encType="multipart/form-data">
                <div className="bottom">
                  <div className="right">
                    <label style={{ marginTop: "0rem" }} htmlFor="emp_no">
                      الرقم الوظيفي
                    </label>
                    <input
                      autoComplete="off"
                      className="formInput"
                      type="number"
                      id="emp_no"
                      name="emp_no"
                      placeholder=""
                    />
                    <label style={{ marginTop: "0rem" }} htmlFor="name">
                      الإسم
                    </label>
                    <input
                      autoComplete="off"
                      className="formInput"
                      type="text"
                      id="name"
                      name="name"
                      placeholder=""
                    />
                    <label style={{ marginTop: "0rem" }} htmlFor="project">
                      المشروع{" "}
                    </label>
                    <input
                      as="select"
                      className="formInput"
                      id="project"
                      name="project"
                      defaultValue=""
                    />

                    <label style={{ marginTop: "0rem" }} htmlFor="nationality">
                      الجنسية{" "}
                    </label>
                    <input
                      autoComplete="off"
                      className="formInput"
                      type="text"
                      id="nationality"
                      name="nationality"
                      placeholder=""
                    />
                  </div>
                  <div className="center">
                    <div className="room" style={{ marginTop: "0rem" }}>
                      <div>
                        <label style={{ marginTop: "0rem" }} htmlFor="room_no">
                          رقم الغرفة
                        </label>
                        <input
                          as="select"
                          autoComplete="off"
                          className="formInput"
                          type="text"
                          id="room_no"
                          name="room_no"
                          placeholder=""
                        ></input>
                      </div>
                      <div>
                        <label style={{ marginTop: "0rem" }} htmlFor="coupon">
                          البون{" "}
                        </label>
                        <input
                          as="select"
                          className="formInput"
                          id="coupon"
                          name="coupon"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div style={{ display: "block", width: "100%" }}>
                      <div>
                        <label style={{ marginTop: "0rem" }} htmlFor="in_date">
                          تاريخ التسكين
                        </label>
                        <input
                          autoComplete="off"
                          className="formInput"
                          type="date"
                          id="in_date"
                          name="in_date"
                          placeholder=""
                        />
                      </div>
                      <div>
                        <label style={{ marginTop: "0rem" }} htmlFor="iqama_no">
                          رقم الإقامة{" "}
                        </label>
                        <input
                          autoComplete="off"
                          className="formInput"
                          type="number"
                          id="iqama_no"
                          name="iqama_no"
                          placeholder=""
                        />
                      </div>
                      <div>
                        <label
                          style={{ marginTop: "0rem" }}
                          htmlFor="in_reason"
                        >
                          تاريخ الخروج
                        </label>
                        <input
                          type="date"
                          className="formInput"
                          id="out_date"
                          name="out_date"
                          defaultValue=""
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  style={{
                    backgroundColor: "teal",
                    width: "12%",
                    alignSelf: "center",
                  }}
                  type="button"
                  className="btn btn-danger"
                  onClick={updateResults}
                >
                  تحديث
                </button>
              </Form>
            </Formik>
          )}
        </>
      </div>
    </>
  );
}

export default EditMorganNaseem;
