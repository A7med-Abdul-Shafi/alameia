import React, { useState, useRef } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import api from "../../../customApi";

function EditMorganBathaa() {
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
      .get(`${api}/morgan2bathaa/search/edit?q=${query}`)
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
      .put(`${api}/morgan2bathaa/update/` + id, item)
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
    <div className="searchNew">
      <div className="top">
        <h5>تعديل بيانات</h5>
        <form onSubmit={fetchSearchResults}>
          <div className="searchInput">
            <input
              type="text"
              required
              placeholder="بحث"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="result">
        {isLoading ? (
          Loading()
        ) : data && data.length > 0 ? (
          <div style={{ marginTop: "0.5rem" }}>
            <Formik
              // initialValues={data[0] || '' }
              validationSchema={validation}
              enableReinitialize={true}
              // validateOnChange={true}
              // onSubmit={updateResults}
            >
              {(formik) => {
                return (
                  <form encType="multipart/form-data" id="my-form">
                    <div className="bottom">
                      <div className="right">
                        <label htmlFor="emp_no">الرقم الوظيفي</label>
                        <input
                          ref={ref}
                          control="input"
                          style={{ fontSize: "16px" }}
                          type="number"
                          name="emp_no"
                          id="emp_no"
                          onBlur={formik.handleBlur}
                          defaultValue={data[0].emp_no}
                          onChange={(e) => setEmp_no(e.target.value)}
                        />
                        <label htmlFor="name">الإسم</label>
                        <input
                          ref={ref}
                          control="input"
                          style={{ fontSize: "14px" }}
                          type="text"
                          name="name"
                          id="name"
                          onBlur={formik.handleBlur}
                          defaultValue={data[0].name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="project"> المشروع</label>
                        <input
                          control="input"
                          style={{ fontSize: "14px" }}
                          type="text"
                          name="project"
                          id="project"
                          onBlur={formik.handleBlur}
                          defaultValue={data[0].project}
                          onChange={(e) => setProject(e.target.value)}
                        />
                        <label htmlFor="nationality">الجنسية </label>
                        <input
                          control="input"
                          style={{ fontSize: "14px" }}
                          type="text"
                          name="nationality"
                          id="nationality"
                          onBlur={formik.handleBlur}
                          defaultValue={data[0].nationality}
                          onChange={(e) => setNationality(e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={updateResults}
                          className="btn btn-danger"
                          // disabled={!canSave}
                        >
                          تحديث
                        </button>
                      </div>
                      <div className="left">
                        <div className="room">
                          <label htmlFor="room_no">رقم الغرفة</label>
                          <input
                            control="input"
                            style={{ fontSize: "16px" }}
                            autoComplete="off"
                            className="formInput"
                            type="text"
                            id="room_no"
                            name="room_no"
                            placeholder=""
                            onBlur={formik.handleBlur}
                            defaultValue={data[0].room_no}
                            onChange={(e) => setRoom_no(e.target.value)}
                          />
                          <label htmlFor="coupon">بون الطعام</label>
                          <input
                            control="input"
                            style={{ fontSize: "16px" }}
                            autoComplete="off"
                            className="formInput"
                            type="text"
                            id="coupon"
                            name="coupon"
                            placeholder=""
                            onBlur={formik.handleBlur}
                            defaultValue={data[0].coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                          />
                        </div>
                        <label htmlFor="in_date">تاريخ التسكين</label>
                        <input
                          control="input"
                          style={{ fontSize: "16px" }}
                          type="date"
                          name="in_date"
                          id="in_date"
                          onBlur={formik.handleBlur}
                          defaultValue={data[0].in_date}
                          onChange={(e) => setIn_date(e.target.value)}
                        />
                        <label htmlFor="iqama_no">رقم الإقامة </label>
                        <input
                          control="input"
                          style={{ fontSize: "16px" }}
                          type="number"
                          name="iqama_no"
                          id="iqama_no"
                          onBlur={formik.handleBlur}
                          defaultValue={data[0].iqama_no}
                          onChange={(e) => setIqama_no(e.target.value)}
                        />
                        <label htmlFor="in_reason">سبب التسكين</label>
                        <input
                          control="input"
                          style={{ fontSize: "14px" }}
                          type="text"
                          name="in_reason"
                          id="in_reason"
                          onBlur={formik.handleBlur}
                          defaultValue={data[0].in_reason}
                          onChange={(e) => setIn_reason(e.target.value)}
                        />
                        <label htmlFor="out_date">تاريخ الخروج</label>
                        <input
                          control="input"
                          style={{ fontSize: "16px" }}
                          type="date"
                          name="out_date"
                          id="out_date"
                          onBlur={formik.handleBlur}
                          defaultValue={data[0].out_date}
                          onChange={(e) => setOut_date(e.target.valueAsDate)}
                        />
                      </div>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
        ) : (
          <div className="searchNew" style={{ marginTop: "0.5rem" }}>
            <div className="result">
              {/* <Formik
                                initialValues={data}
                                validationSchema={validation}
                                enableReinitialize
                            > */}
              {/* {(formik) => { */}
              {/* return ( */}
              <div style={{ display: "block" }}>
                <form>
                  <div className="bottom">
                    <div className="right">
                      <label htmlFor="emp_no">الرقم الوظيفي</label>
                      <input type="number" name="emp_no" id="emp_no" />
                      <label htmlFor="name">الإسم</label>
                      <input type="text" name="name" id="name" />
                      <label htmlFor="project">المشروع </label>
                      <input type="text" name="project" id="project" />
                      <label htmlFor="nationality">الجنسية </label>
                      <input type="text" name="nationality" id="nationality" />
                      <button type="submit" className="btn btn-danger">
                        تحديث
                      </button>
                    </div>
                    <div className="left">
                      <div style={{ display: "flex" }}>
                        <label htmlFor="room_no">رقم الغرفة</label>
                        <input
                          autoComplete="off"
                          className="formInput"
                          type="text"
                          id="room_no"
                          name="room_no"
                          placeholder=""
                        />
                        <label htmlFor="coupon">بون الطعام</label>
                        <input
                          autoComplete="off"
                          className="formInput"
                          type="text"
                          id="coupon"
                          name="coupon"
                          placeholder=""
                        />
                      </div>

                      <label htmlFor="in_date">تاريخ التسكين</label>
                      <input type="date" name="in_date" id="in_date" />
                      <label htmlFor="iqama_no">رقم الإقامة </label>
                      <input type="number" name="iqama_no" id="iqama_no" />
                      <label htmlFor="in_reason">سبب التسكين</label>
                      <input type="text" name="in_reason" id="in_reason" />
                      <label htmlFor="out_date">تاريخ الخروج</label>
                      <input type="date" name="out_date" id="out_date" />
                    </div>
                  </div>
                </form>
              </div>
              {/* ); */}
              {/* }} */}
              {/* </Formik> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditMorganBathaa;
