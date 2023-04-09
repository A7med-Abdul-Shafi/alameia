import "./new.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import api from "../../customApi";

function NewAlameia() {
  function Loading() {
    return (
      <div className="spinner" style={{ padding: "0px", margin: "0px" }} />
    );
  }
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];
  const FILE_SIZE = File.size / 1024 / 1024;

  const validationSchema = yup.object().shape({
    emp_no: yup.string().required("أدخل الرقم الوظيفي"),
    name: yup.string().required("أدخل الإسم "),
    project: yup.string().required("أدخل المشروع "),
    nationality: yup.string().required("أدخل الجنسية "),
    iqama_no: yup.number().required("أدخل رقم الإقامة"),
    room_no: yup.string().required("أدخل رقم الغرفة "),
    coupon: yup.string(),
    in_date: yup.date().required("أدخل  تاريخ التسكين"),
    in_reason: yup.string().required("أدخل  سبب التسكين"),
    out_date: yup.date(),
    emp_photo: yup
      .mixed()
      .nullable()
      .notRequired()
      .test(
        "FILE_SIZE",
        "Uploaded file is too big.",
        (value) => !value || (value && value.size <= FILE_SIZE)
      )
      .test(
        "FILE_FORMAT",
        "Uploaded file has unsupported format.",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
      ),
    iqama_photo: yup
      .mixed()
      .nullable()
      .notRequired()
      .test(
        "FILE_SIZE",
        "Uploaded file is too big.",
        (value) => !value || (value && value.size <= FILE_SIZE)
      )
      .test(
        "FILE_FORMAT",
        "Uploaded file has unsupported format.",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
      ),
  });
  const initalValues = {
    emp_no: "",
    name: "",
    project: "",
    nationality: "",
    iqama_no: "",
    room_no: "",
    coupon: "",
    in_date: new Date().toLocaleDateString(),
    in_reason: "",
    emp_photo: null,
    iqama_photo: null,
  };
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const projects = async () => {
      await axios.get(`${api}/alameia/projects`).then((res) => {
        setOptions(res.data);
      });
    };
    projects();
  }, []);
  const [options2, setOptions2] = useState([]);
  useEffect(() => {
    const projects = async () => {
      await axios.get(`${api}/alameia/in_reason`).then((res) => {
        setOptions2(res.data);
      });
    };
    projects();
  }, []);
  const [listofalameia, setListofalameia] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoadingStart, setIsLoadingStart] = useState(false);
  const [fetchData, setFetchData] = useState([]);
  const [emp_no, setEmp_no] = useState(fetchData[0]?.emp_no);
  const [name, setName] = useState(fetchData[0]?.name);
  const [project, setProject] = useState(fetchData[0]?.project);
  const [nationality, setNationality] = useState(fetchData[0]?.nationality);
  const [iqama_no, setIqama_no] = useState(fetchData[0]?.iqama_no);
  const [room_no, setRoom_no] = useState("");
  const [coupon, setCoupon] = useState("");
  const [in_date, setIn_date] = useState("");
  const [in_reason, setIn_reason] = useState("");
  const [out_date, setOut_date] = useState("");
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const addedData = {
    emp_no: fetchData[0]?.emp_no,
    name: fetchData[0]?.name,
    project: fetchData[0]?.project,
    nationality: fetchData[0]?.nationality,
    iqama_no: fetchData[0]?.iqama_no,
    room_no: room_no,
    coupon: coupon,
    in_date: in_date,
    in_reason: in_reason,
    out_date: out_date,
  };
  const fetchSearchResults = async (e) => {
    e.preventDefault();
    setIsLoadingStart(true);
    await axios
      .get(`${api}/customer/search/edit?q=${query}`)
      .then(async (res) => {
        setFetchData(res.data);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log("Error", err.message);
        }
      })
      .finally(() => setIsLoadingStart(false));
  };

  const updateResults = async (e, req) => {
    e.preventDefault();
    const id = fetchData[0].id;
    setIsLoadingStart(true);
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
      .put(`${api}/customer/update/` + id, item)
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          customClass: "swal-wide",
          title: `تم تحديث ${fetchData[0].emp_no} بنجاح`,
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
          console.log(error.response.data);
          console.log(error.response.status);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      })
      .finally(() => setIsLoadingStart(false));
  };
  const addResults = async (e) => {
    e.preventDefault();
    setIsLoadingStart(true);
    await axios
      .post(`${api}/alameia`, addedData)
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          customClass: "swal-wide",
          title: `تم إضافة ${addedData.emp_no} بنجاح`,
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
          console.log(error.response.data);
          console.log(error.response.status);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      })
      .finally(() => setIsLoadingStart(false));
  };
  const onSubmit = async (data, onSubmitProps) => {
    setIsLoadingStart(true);
    await axios
      .post(`${api}/alameia`, data)
      .then((response) => {
        setListofalameia(response.data);
        onSubmitProps.resetForm();
        Swal.fire({
          position: "center",
          icon: "success",
          customClass: "swal-wide",
          title: `تم إضافة ${data.emp_no} بنجاح`,
          showConfirmButton: false,
          timer: 1700,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      })
      .finally(() => setIsLoadingStart(false));
  };
  const [vacant, setVacant] = useState([]);
  const [alameiaRoomsList, setAlameiaRoomsList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  function getRoomCapacity(object, row) {
    return object[row];
  }
  //////////////////////////////////////////////////////////
  useEffect(() => {
    const vacantList = async () => {
      setIsLoadingStart(true);
      await axios.get(`${api}/alameia/vacant`).then(async (res) => {
        setVacant(res.data);
        setIsLoadingStart(false);
      });
    };
    vacantList();
  }, []);

  /////////////////////////////////////////////////////////////
  useEffect(() => {
    const filterList = async () => {
      setIsLoadingStart(true);
      await axios.get(`${api}/alameia/filter`).then(async (res) => {
        setFiltered(res.data);
        setIsLoadingStart(false);
      });
    };
    filterList();
  }, []);
  const filterVacancies = [
    ...new Set(filtered.map((person) => person.room_no)),
  ];
  ////////////////////////////////////////// alameiaRoomsList
  useEffect(() => {
    setIsLoadingStart(true);
    const alameiaRoomList = async () => {
      await axios.get(`${api}/alameiarooms/list`).then(async (res) => {
        setAlameiaRoomsList(res.data);
        setIsLoadingStart(false);
      });
    };
    alameiaRoomList();
  }, []);
  const roomsCapacity = alameiaRoomsList.reduce(function (map, obj) {
    map[obj.room] = obj.capacity;
    return map;
  }, {});
  const filterListOfRooms = alameiaRoomsList.map((person) => person.room);
  const emptyRooms = filterListOfRooms.filter(
    (room) => filterVacancies.indexOf(room) === -1
  );
  const vacancies = vacant.filter((person) => {
    return person.count < getRoomCapacity(roomsCapacity, person.room_no)
      ? person.count
      : null;
  });
  ////////////////////////////////////////// alameiaRoomsList
  const inputFilteredRooms = emptyRooms.concat(
    vacancies.map((item) => item.room_no)
  );
  return (
    <>
      <div className="newContainer1">
        <div className="top">
          <h1>تسكين جديد</h1>
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
          <button className="btn btn-danger" onClick={updateResults}>
            تحديث البيانات
          </button>
        </div>
        <>
          {isLoadingStart ? (
            Loading()
          ) : fetchData && fetchData.length > 0 ? (
            <Formik
              initialValues={initalValues}
              validationSchema={validationSchema}
              enableReinitialize={true}
            >
              <Form encType="multipart/form-data">
                <div className="bottom">
                  <div className="right">
                    <label style={{ marginTop: "0rem" }} htmlFor="emp_no">
                      الرقم الوظيفي
                    </label>
                    <ErrorMessage name="emp_no" component="span" />
                    <input
                      autoComplete="off"
                      className="formInput"
                      type="text"
                      id="emp_no"
                      name="emp_no"
                      placeholder=""
                      defaultValue={fetchData[0].emp_no}
                      onChange={(e) => setEmp_no(e.target.value)}
                    />
                    <label style={{ marginTop: "0rem" }} htmlFor="name">
                      الإسم
                    </label>
                    <ErrorMessage name="name" component="span" />
                    <input
                      autoComplete="off"
                      className="formInput"
                      type="text"
                      id="name"
                      name="name"
                      placeholder=""
                      defaultValue={fetchData[0].name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label style={{ marginTop: "0rem" }} htmlFor="project">
                      المشروع{" "}
                    </label>
                    <ErrorMessage name="project" component="span" />
                    <select
                      className="formInput"
                      type="text"
                      id="project"
                      name="project"
                      defaultValue={fetchData[0].project}
                      onChange={(e) => setProject(e.target.value)}
                    >
                      <option value="0">{fetchData[0].project}</option>
                      {options.map((option, index) => (
                        <option key={index} value={option.project}>
                          {option.project}
                        </option>
                      ))}
                    </select>
                    <label style={{ marginTop: "0rem" }} htmlFor="nationality">
                      الجنسية{" "}
                    </label>
                    <ErrorMessage name="nationality" component="span" />
                    <input
                      autoComplete="off"
                      className="formInput"
                      type="text"
                      id="nationality"
                      name="nationality"
                      placeholder=""
                      defaultValue={fetchData[0].nationality}
                      onChange={(e) => setNationality(e.target.value)}
                    />
                  </div>
                  <div className="center">
                    <div className="room" style={{ marginTop: "0rem" }}>
                      <div>
                        <label htmlFor="room">رقم الغرفة</label>
                        <ErrorMessage name="room_no" component="span" />
                        <select
                          className="formInput"
                          data-live-search="true"
                          id="room_no"
                          name="room_no"
                          placeholder=""
                          onChange={(e) => setRoom_no(e.target.value)}
                        >
                          <option value="0">
                            إختر رقم الغرفة ..................
                          </option>
                          {inputFilteredRooms.map((rooms, index) => (
                            <option key={index} data-tokens={rooms}>
                              {rooms}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="coupon">البون</label>
                        {/* <ErrorMessage name="zoon_no" component="span" /> */}
                        <select
                          className="formInput"
                          type="text"
                          id="coupon"
                          name="coupon"
                          placeholder=""
                          onChange={(e) => setCoupon(e.target.value)}
                        >
                          <option value="0">
                            إختر بون الطعام ..............
                          </option>
                          <option value="نعم">نعم</option>
                          <option value="لا">لا</option>
                        </select>
                      </div>
                    </div>
                    <label style={{ marginTop: "0rem" }} htmlFor="in_date">
                      تاريخ التسكين
                    </label>
                    <ErrorMessage name="in_date" component="span" />
                    <input
                      autoComplete="off"
                      className="formInput"
                      // value={new Date().toISOString().substring(0, 10)}
                      type="date"
                      id="in_date"
                      name="in_date"
                      placeholder=""
                      onChange={(e) => setIn_date(e.target.value)}
                    />
                    <label style={{ marginTop: "0rem" }} htmlFor="iqama_no">
                      رقم الإقامة{" "}
                    </label>
                    <ErrorMessage name="iqama_no" component="span" />
                    <input
                      autoComplete="off"
                      className="formInput"
                      type="number"
                      id="iqama_no"
                      name="iqama_no"
                      placeholder=""
                      defaultValue={fetchData[0].iqama_no}
                      onChange={(e) => setIqama_no(e.target.value)}
                    />
                    <label style={{ marginTop: "0rem" }} htmlFor="in_reason">
                      سبب التسكين
                    </label>
                    <ErrorMessage name="in_reason" component="span" />
                    <select
                      className="formInput"
                      type="text"
                      id="in_reason"
                      name="in_reason"
                      defaultValue={fetchData[0].in_reason}
                      onChange={(e) => setIn_reason(e.target.value)}
                    >
                      <option value="0">{fetchData[0].in_reason}</option>
                      {options2.map((option2, index) => (
                        <option key={index} value={option2.in_reason}>
                          {option2.in_reason}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={addResults}
                    >
                      تسكين
                    </button>
                  </div>
                  <div className="left">
                    <label style={{ marginTop: "0rem" }} htmlFor="file">
                      صورة شخصية:{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        class="bi bi-cloud-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                      </svg>
                    </label>
                    <input
                      name="emp_photo"
                      type="file"
                      id="file"
                      // defaultValue={fetchData[0].emp_photo}
                      onChange={(e) => setFile(e.target.files[0])}
                      style={{ display: "none" }}
                    />
                    <img
                      src={
                        file
                          ? api.createObjectapi(file)
                          : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                      }
                      alt=""
                    />
                    <div>
                      <label style={{ marginTop: "0rem" }} htmlFor="file2">
                        صورة الإقـامـة :{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          class="bi bi-cloud-plus"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"
                          />
                          <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                        </svg>
                      </label>
                      <input
                        name="iqama_photo"
                        type="file"
                        id="file2"
                        // defaultValue={fetchData[0].iqama_photo}
                        onChange={(e) => setFile2(e.target.files[0])}
                        style={{ display: "none" }}
                      />
                      <img
                        src={
                          file2
                            ? api.createObjectapi(file2)
                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
          ) : (
            <Formik
              initialValues={initalValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              enableReinitialize={true}
            >
              <Form encType="multipart/form-data">
                <div className="bottom">
                  <div className="right">
                    <label style={{ marginTop: "0rem" }} htmlFor="emp_no">
                      الرقم الوظيفي
                    </label>
                    <ErrorMessage name="emp_no" component="span" />
                    <Field
                      autoComplete="off"
                      className="formInput"
                      type="text"
                      id="emp_no"
                      name="emp_no"
                      placeholder=""
                    />
                    <label style={{ marginTop: "0rem" }} htmlFor="name">
                      الإسم
                    </label>
                    <ErrorMessage name="name" component="span" />
                    <Field
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
                    <ErrorMessage name="project" component="span" />
                    <Field
                      as="select"
                      className="formInput"
                      id="project"
                      name="project"
                      defaultValue=""
                    >
                      <option value="0">إختر المشروع</option>
                      {options.map((option, index) => (
                        <option key={index} value={option.project}>
                          {option.project}
                        </option>
                      ))}
                    </Field>
                    <label style={{ marginTop: "0rem" }} htmlFor="nationality">
                      الجنسية{" "}
                    </label>
                    <ErrorMessage name="nationality" component="span" />
                    <Field
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
                        <ErrorMessage name="room_no" component="span" />
                        <Field
                          as="select"
                          autoComplete="off"
                          className="formInput"
                          type="text"
                          id="room_no"
                          name="room_no"
                          placeholder=""
                        >
                          <option value="0">
                            إختر رقم الغرفة ..................
                          </option>
                          {inputFilteredRooms.map((rooms, index) => (
                            <option key={index} data-tokens={rooms}>
                              {rooms}
                            </option>
                          ))}
                        </Field>
                      </div>
                      <div>
                        <label style={{ marginTop: "0rem" }} htmlFor="coupon">
                          البون{" "}
                        </label>
                        <Field
                          as="select"
                          className="formInput"
                          id="coupon"
                          name="coupon"
                          defaultValue=""
                        >
                          <option value="0">
                            إختر بون الطعام ..............
                          </option>
                          <option value="نعم">نعم</option>
                          <option value="لا">لا</option>
                        </Field>
                      </div>
                    </div>
                    <div style={{ display: "block", width: "100%" }}>
                      <div>
                        <label style={{ marginTop: "0rem" }} htmlFor="in_date">
                          تاريخ التسكين
                        </label>
                        <ErrorMessage name="in_date" component="span" />
                        <Field
                          autoComplete="off"
                          className="formInput"
                          value={new Date().toISOString().substring(0, 10)}
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
                        <ErrorMessage name="iqama_no" component="span" />
                        <Field
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
                          سبب التسكين
                        </label>
                        <ErrorMessage name="in_reason" component="span" />
                        <Field
                          as="select"
                          className="formInput"
                          id="in_reason"
                          name="in_reason"
                          defaultValue=""
                        >
                          <option value="">إختر سبب التسكين</option>
                          {options2.map((option2, index) => (
                            <option key={index} value={option2.in_reason}>
                              {option2.in_reason}
                            </option>
                          ))}
                        </Field>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-danger"
                        onClick={() => [
                          setFile(initalValues.emp_photo),
                          setFile2(initalValues.iqama_photo),
                        ]}
                      >
                        تسكين
                      </button>
                    </div>
                  </div>
                  <div className="left">
                    <label style={{ marginTop: "0rem" }} htmlFor="file">
                      صورة شخصية:{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        class="bi bi-cloud-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                      </svg>
                    </label>
                    <Field
                      name="emp_photo"
                      type="file"
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      style={{ display: "none" }}
                    />
                    <img
                      src={
                        file
                          ? api.createObjectapi(file)
                          : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                      }
                      alt=""
                    />
                    <div>
                      <label style={{ marginTop: "0rem" }} htmlFor="file2">
                        صورة الإقـامـة :{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          class="bi bi-cloud-plus"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"
                          />
                          <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                        </svg>
                      </label>
                      <Field
                        name="iqama_photo"
                        type="file"
                        id="file2"
                        onChange={(e) => setFile2(e.target.files[0])}
                        style={{ display: "none" }}
                      />
                      <img
                        src={
                          file2
                            ? api.createObjectapi(file2)
                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
          )}
        </>
      </div>
    </>
  );
}

export default NewAlameia;
