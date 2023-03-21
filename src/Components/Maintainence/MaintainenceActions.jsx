import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory from "react-bootstrap-table2-filter";
import Swal from "sweetalert2";
import api from "../../customApi";

function MaintainenceActions() {
  function Loading() {
    return <div className="spinner" />;
  }
  const options = [
    {
      id: 1,
      value: "تم معالجة الطلب",
    },
  ];
  const userColumns = [
    {
      id: 1,
      dataField: "emp_no",
      text: "الرقم الوظيفي",
      sort: true,
      // filter: textFilter()
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
      dataField: "iqama_no",
      text: "رقم الإقامة",
      sort: true,
    },
    {
      id: 6,
      dataField: "housing",
      text: "سكن",
      sort: true,
    },
    {
      id: 7,
      dataField: "content",
      text: "نوع الصيانة",
      sort: true,
    },
  ];
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const { data, isFetchLoading, refetch } = useQuery(
    ["Maintainence"],
    async () => {
      return await axios
        .get(`${api}/alameiamaintainence/list/open`)
        .then((res) => res.data);
    }
  );
  // const [emp_no, setEmp_no] = useState(data?.emp_no);
  // const [name, setName] = useState(data?.name);
  // const [nationality, setNationality] = useState(data?.nationality);
  // const [iqama_no, setIqama_no] = useState(data?.iqama_no);
  // const [room_no, setRoom_no] = useState(data?.room_no);
  // const [zoon_no, setZoon_no] = useState(data?.zoon_no);
  // const addTodo = {
  //     emp_no,
  //     name,
  //     zoon_no,
  //     room_no,
  //     nationality,
  //     iqama_no,
  //     status,
  // }
  const handleAddRequest = async (id) => {
    setIsLoading(true);
    await axios
      .patch(`${api}/alameiamaintainence/update/${id}`)
      .then(async (req, res) => {
        await refetch();
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
      .finally(() => setIsLoading(false));
  };
  const actionColumn = [
    {
      dataField: "status",
      text: "حالة الطلب",
      formatter: (data, value, row) => {
        return (
          <div className="viewButton" style={{ padding: "0px" }}>
            <form style={{ padding: "0px", fontSize: "12px" }}>
              <select
                className="form-select form-select-sm"
                type="text"
                name="status"
                id="status"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="0">إختر</option>
                {options.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </select>
            </form>
          </div>
        );
      },
    },
    {
      dataField: "action",
      text: "إجراء",
      formatter: (data, value, row) => {
        return (
          <div className="viewButton">
            {isFetchLoading ? (
              Loading()
            ) : (
              <svg
                onClick={() => {
                  handleAddRequest(value.id);
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                <polyline points="17 21 17 13 7 13 7 21"></polyline>
                <polyline points="7 3 7 8 15 8"></polyline>
              </svg>
            )}
          </div>
        );
      },
    },
  ];
  return (
    <div className="dataTableHome" style={{ padding: "20px" }}>
      <h5>طلبات الصيانة :</h5>
      <div>
        {isFetchLoading ? (
          Loading()
        ) : data?.length > 0 ? (
          <BootstrapTable
            keyField="id"
            data={data}
            columns={userColumns.concat(actionColumn)}
            striped
            hover
            condensed
            filter={filterFactory()}
            pagination={paginationFactory()}
          />
        ) : (
          <div className="empty">
            <p>هنا تظهر الطلبات المسجلة</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MaintainenceActions;
