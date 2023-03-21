import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory from "react-bootstrap-table2-filter";
import api from "../../../customApi";

function SearcMorganBathaa() {
  function Loading() {
    return <div className="spinner" />;
  }
  const userColumns = [
    {
      id: 1,
      dataField: "emp_no",
      text: "الرقم الوظيفي",
      sort: true,
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
    },
    {
      id: 5,
      dataField: "project",
      text: "المشروع",
    },
    {
      id: 6,
      dataField: "iqama_no",
      text: "رقم الإقامة",
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
  ];

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [alameiaRoomsList, setAlameiaRoomsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchSearchResults = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    await axios
      .get(`${api}/morgan2bathaa/search?q=${query}`)
      .then(async (res) => {
        console.log(res.data);
        setData(res.data);
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
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    const alameiaRoomList = async () => {
      setLoading(true);
      await axios.get(`${api}/morgan2bathaarooms/list`).then(async (res) => {
        setAlameiaRoomsList(res.data);
        setLoading(false);
        console.log(res.data);
      });
    };
    alameiaRoomList();
  }, []);
  function getRoomCapacity(object, row) {
    return object[row];
  }
  console.log(alameiaRoomsList);
  const roomsCapacity = alameiaRoomsList.reduce(function (map, obj) {
    map[obj.room] = obj.capacity;
    return map;
  }, {});
  const rooms = [...new Set(alameiaRoomsList.map((item) => item.room))];
  const capacity = getRoomCapacity(roomsCapacity, query.toLocaleUpperCase());
  const actionColumn = [
    {
      dataField: "action",
      text: " إجراء",
      formatter: (listofdatabase, value, row) => {
        return (
          <div className="viewButton">
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
  return (
    <>
      <div className="dataTableHome">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div className="control">
            <form onSubmit={fetchSearchResults}>
              <div className="searchInput">
                <input
                  className="input"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder="  الرقم الوظيفي-الإقامة-رقم الغرفة-الإسم"
                  style={{
                    width: "250px",
                    height: "32px",
                    fontSize: "16px",
                    marginBottom: "1rem",
                  }}
                />
              </div>
            </form>
          </div>
        </div>
        {isLoading ? (
          Loading()
        ) : (
          <>
            {data && data.length > 0 ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>عدد مطابقة البحث : {data.length}</span>
                {rooms.includes(query.toLocaleUpperCase()) ? (
                  <span>سعة الغرفة : {capacity} عامل</span>
                ) : null}
              </div>
            ) : null}
            <BootstrapTable
              keyField="id"
              data={data}
              columns={actionColumn.concat(userColumns)}
              striped
              hover
              condensed
              filter={filterFactory()}
              pagination={paginationFactory()}
              noDataIndication=" لا يوجد سجلات"
            />
          </>
        )}
      </div>
    </>
  );
}

export default SearcMorganBathaa;
