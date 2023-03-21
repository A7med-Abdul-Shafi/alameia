import "../table.css";
import React, { useState } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading";
import Swal from "sweetalert2";
import api from "../../../customApi";

function TableRahmaneya() {
  const userColumns = [
    {
      id: 1,
      dataField: "emp_no",
      text: "الرقم الوظيفي",
      sort: true,
      filter: textFilter(),
    },
    {
      id: 2,
      dataField: "name",
      text: "الإسم",
    },
    {
      id: 3,
      dataField: "room_no",
      text: "رقم الغرفة",
    },
    {
      id: 4,
      dataField: "nationality",
      text: "الجنسية",
      sort: true,
    },
    {
      id: 5,
      dataField: "project",
      text: "المشروع",
      sort: true,
    },
    {
      id: 6,
      dataField: "iqama_no",
      text: "رقم الإقامة",
      sort: true,
    },
    {
      id: 7,
      dataField: "in_date",
      text: "تاريخ التسكين",
      sort: true,
    },
    {
      id: 8,
      dataField: "out_date",
      text: "تاريخ الخروج",
      sort: true,
    },
    {
      id: 9,
      dataField: "out_reason",
      text: "الحالة",
      sort: true,
    },
  ];
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const actionColumn = [
    {
      dataField: "action",
      text: " إجراء",
      formatter: (listofdatabase, value, row) => {
        return (
          <div
            className="viewButton"
            onClick={() => navigate(`/dashboard/singlerahmaneya/${value.id}`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-printer"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
              <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </div>
        );
      },
    },
  ];
  const { data, isLoading, isError, refetch } = useQuery(
    ["rahmaneya"],
    async () => {
      return await axios.get(`${api}/rahmaneya`).then((res) => res.data);
    }
  );
  if (isError) {
    return <h4>هناك خطأ ما ...</h4>;
  }
  if (isLoading) {
    return <Loading />;
  }
  const deleteData = async (e) => {
    setLoading(true);
    await axios
      .delete(`${api}/rahmaneya/delete`)
      .then(async (res) => {
        e.preventDefault();
        await Swal.fire({
          icon: "success",
          position: "center",
          customClass: "swal-wide",
          title: "تم تحديث البيانات",
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
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="dataTableHome">
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={refetch}
          className="btn btn-danger"
          style={{
            marginBottom: "1rem",
            backgroundColor: "teal",
            fontSize: "14px",
          }}
        >
          تحديث
        </button>
        <button
          className="btn btn-danger"
          style={{
            marginBottom: "1rem",
            backgroundColor: "teal",
            fontSize: "14px",
          }}
          onClick={deleteData}
        >
          تنقية البيانات
        </button>
        <div id="downloadfiles" className="row">
          <div
            className="col-sm-7"
            style={{
              paddingLeft: "12px",
              marginBottom: "1rem",
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <a
              style={{ fontSize: "13px" }}
              href={`${api}/rahmaneya/api/file`}
              className="btn btn-info"
              role="button"
            >
              تصدير البيانات ملف إكسل
            </a>
          </div>
        </div>
      </div>
      <div>
        <BootstrapTable
          keyField="id"
          data={data}
          columns={actionColumn.concat(userColumns)}
          striped
          hover
          condensed
          noDataIndication="لا يوجد سجلات"
          filter={filterFactory()}
          pagination={paginationFactory()}
        />
      </div>
    </div>
  );
}

export default React.memo(TableRahmaneya);
