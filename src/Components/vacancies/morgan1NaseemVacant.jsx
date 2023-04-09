import React, { useEffect, useState } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ReactToPdf from "react-to-pdf";
import Morgan1NaseemAddRooms from "./Morgan1NaseemAddRooms";
import Morgan1NaseemEditRooms from "./Morgan1NaseemEditRooms";
import api from "../../customApi";
function Morgan1NaseemVacant(props) {
  const ref = React.createRef();
  function Loading() {
    return (
      <div className="spinner" style={{ padding: "0px", margin: "0px" }} />
    );
  }
  const userColumns = [
    {
      id: 1,
      dataField: "room_no",
      text: "رقم الغرفة",
      sort: true,
      filter: textFilter(),
    },
    {
      id: 2,
      dataField: "nationality",
      text: "الجنسية",
      sort: true,
    },
  ];

  const [vacant, setVacant] = useState([]);
  const [alameiaRoomsList, setAlameiaRoomsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState([]);

  function getRoomCapacity(object, row) {
    return object[row];
  }
  //////////////////////////////////////////////////////////
  useEffect(() => {
    const vacantList = async () => {
      setIsLoading(true);
      await axios.get(`${api}/morgan1naseem/vacant`).then(async (res) => {
        setVacant(res.data);
        setIsLoading(false);
      });
    };
    vacantList();
  }, []);

  /////////////////////////////////////////////////////////////
  useEffect(() => {
    const filterList = async () => {
      setLoading(true);
      await axios.get(`${api}/morgan1naseem/filter`).then(async (res) => {
        setFiltered(res.data);
        setLoading(false);
      });
    };
    filterList();
  }, []);
  const filterVacancies = [
    ...new Set(filtered.map((person) => person.room_no)),
  ];
  ////////////////////////////////////////// alameiaRoomsList
  useEffect(() => {
    const alameiaRoomList = async () => {
      setLoading(true);
      await axios.get(`${api}/morgan1naseemrooms/list`).then(async (res) => {
        setAlameiaRoomsList(res.data);
        setLoading(false);
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
  const actionColumn = [
    {
      id: 3,
      dataField: "action",
      text: "عدد الفراغات",
      sort: true,
      formatter: (data, value, row) => {
        const roomsCapacity = alameiaRoomsList.reduce(function (map, obj) {
          map[obj.room] = obj.capacity;
          return map;
        }, {});
        return (
          <div className="viewButton">
            <span>
              {getRoomCapacity(roomsCapacity, value.room_no) - value.count}
            </span>
          </div>
        );
      },
    },
  ];
  return (
    <div className="dataTableHome">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Morgan1NaseemAddRooms />
        <Morgan1NaseemEditRooms />
      </div>
      <hr />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <h5>فراغات السكن :</h5>
          <a
            style={{ fontSize: "13px" }}
            href={`${api}/morgan1naseemvacant/file`}
            className="btn btn-info"
            role="button"
          >
            تصدير ملف إكسل
          </a>
        </div>
        {isLoading ? (
          Loading()
        ) : (
          <BootstrapTable
            keyField="id"
            data={vacancies}
            columns={userColumns.concat(actionColumn)}
            striped
            responsive
            printable
            bodyStyle={{ overflow: "overlay" }}
            hover
            condensed
            noDataIndication="لا يوجد فراغات"
            selectRow={{ mode: "checkbox", clickToSelect: true }}
            filter={filterFactory()}
            pagination={paginationFactory()}
          />
        )}
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <h5> الغرف الخالية :</h5>
          <span style={{ color: "blue" }}>
            العدد : {emptyRooms.length} غرفة خالية
          </span>
          <ReactToPdf
            targetRef={ref}
            filename="فراغات(العالمية).pdf"
            scale={0.69}
          >
            {({ toPdf }) => (
              <svg
                onClick={toPdf}
                style={{ cursor: "pointer" }}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-filetype-pdf"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"
                />
              </svg>
            )}
          </ReactToPdf>
        </div>
        {loading ? (
          Loading()
        ) : (
          <div ref={ref}>
            <div>
              <form>
                <select
                  className="form-select selectpicker"
                  data-live-search="true"
                >
                  <option value="0">عرض الغرف الخالية</option>
                  {emptyRooms.map((rooms, index) => (
                    <option key={index} data-tokens={rooms}>
                      {rooms}
                    </option>
                  ))}
                </select>
              </form>
            </div>
            <div className="container">
              <div className="row align-items-start">
                {emptyRooms.map((room) => {
                  return <div className="col-md-auto">{room}</div>;
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Morgan1NaseemVacant;
