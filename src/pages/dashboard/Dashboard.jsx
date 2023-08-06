import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar";
import "./dashboard.scss";
import Widget from "../../Components/Widgets/Widget";
import Featured from "../../Components/Featured/Featured";
import React, {useState, useEffect} from 'react'
import axios from "axios";
import api from "../../customApi";
import Form from 'react-bootstrap/Form';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory from "react-bootstrap-table2-filter";
import { useNavigate } from "react-router-dom";
import * as FileSaver from 'file-saver';
import { Button } from 'react-bootstrap';
import * as xlsx from "xlsx"

function Dashboard () {
  function Loading() {
    return <div className="spinner" />
  }
  ///////////////////////////////////////////////download button
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  

  const [d1Loading, setIsd1Loading] = useState(false);
  const [d2Loading, setIsd2Loading] = useState(false);
  const [d3Loading, setIsd3Loading] = useState(false);
  const [d4Loading, setIsd4Loading] = useState(false);
  const [d5Loading, setIsd5Loading] = useState(false);
  useEffect(() => {
    const data = async () => {
      setIsd1Loading(true);
      await axios.get(`${api}/alameia`).then(async (res) => {
        setData1(res.data);
        setIsd1Loading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsd2Loading(true);
      await axios.get(`${api}/ewaaa`).then(async (res) => {
        setData2(res.data);
        setIsd2Loading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsd3Loading(true);
      await axios.get(`${api}/ewaab`).then(async (res) => {
        setData3(res.data);
        setIsd3Loading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsd4Loading(true);
      await axios.get(`${api}/haramain`).then(async (res) => {
        setData4(res.data);
        setIsd4Loading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsd5Loading(true);
      await axios.get(`${api}/buildings`).then(async (res) => {
        setData5(res.data);
        setIsd5Loading(false);
      });
    };
    data();
  }, []);
  
  const dataOne = data1.concat(...data2);
  const dataTwo = data3.concat(...data4);
  const dataThree = dataOne.concat(...data5);
  const datatwenty = dataThree.concat(...dataTwo);
  const excelExport = datatwenty !== ""? datatwenty.map(({emp_no, name, room_no, nationality, project, iqama_no, passport_no, in_date, out_date, out_reason, mobile, housing}) => ({ emp_no, name, room_no, nationality, project, iqama_no, passport_no, in_date, out_date, out_reason, mobile, housing})) 
        :""
        
        const exportExcel = () => {
            const workSheet = xlsx.utils.json_to_sheet(excelExport);
            const workBook = { Sheets: { data: workSheet }, SheetNames: ["data"] };
            const excelBuffer = xlsx.write(workBook, {
              bookType: "xlsx",
              type: "array",
            });
            saveAsExcelFile(excelBuffer, "filter");
        };
      
        const saveAsExcelFile = (buffer, fileName) => {
            let EXCEL_TYPE =
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
            let EXCEL_EXTENSION = ".xlsx";
            const data = new Blob([buffer], {
              type: EXCEL_TYPE,
            });
            FileSaver.saveAs(
              data,
              fileName + new Date().getTime() + EXCEL_EXTENSION
            );
          };
  ///////////////////////////////////////////////download button
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
    {
    id: 9,
    dataField: "housing",
    text: "السكن",
    sort: true,
    },
];
const [query, setQuery] = useState("");
const [data, setData] = useState({});
const [isLoading, setIsLoading] = useState(false);

const [fetchRooms, setFetchRooms] = useState([])
useEffect(() => {
  const alameiaRoomList = async () => {
    await axios.get(`${api}/alameiarooms/list`).then(async (res) => {
      setFetchRooms(res.data);
    });
  };
  alameiaRoomList();
}, []);
function getRoomCapacity(object, row) {  
  return object[row];
}
const roomsCapacity = fetchRooms?.reduce(function (map, obj) {
  map[obj.room] = obj.capacity;
  return map;
}, {});
const rooms = [...new Set(fetchRooms?.map((item) => item.room))];
const capacity = getRoomCapacity(roomsCapacity, query.toLocaleUpperCase());

const fetchSearchResults = async (event) => {
  event.preventDefault();
  setIsLoading(true);
  await axios
      .get(`${api}/searchall?value=${query}`)
      .then((response) => {
        const room = /^[a-zA-Z]/.test(query);
        if (!room && query.length < 7){
          setQuery("")
        }
        setData(response.data);
        setIsLoading(false);
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
      })};
    
    let navigate = useNavigate();

    const actionColumn = [
        {
        id: 10,
        dataField: "action",
        text: " إجراء",
        formatter: (listofdatabase, value, row) => (
          <div className="viewButton" onClick={() => navigate(`/dashboard/single/${value.emp_no}`)}>
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
          </div>
            )
        },
    ];
    const exportExcel2 = () => {
      const workSheet = xlsx.utils.json_to_sheet(data.map(({emp_no, name, room_no, nationality, project, iqama_no, passport_no, in_date, out_date, out_reason, mobile, housing}) => ({ emp_no, name, room_no, nationality, project, iqama_no, passport_no, in_date, out_date, out_reason, mobile, housing})) );
      const workBook = { Sheets: { data: workSheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workBook, {
        bookType: "xlsx",
        type: "array",
      });
      saveAsExcelFile2(excelBuffer, "filter");
  };

  const saveAsExcelFile2 = (buffer, fileName) => {
      let EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      FileSaver.saveAs(
        data,
        fileName + new Date().getTime() + EXCEL_EXTENSION
      );
    };
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div style={{margin:"10px 15px 0px 25px"}}>
        <Form onSubmit={fetchSearchResults} className="d-flex" >
                <Form.Control
                    required
                    className="me-2 p-10"
                    type="search"
                    value={query}
                    placeholder="الرقم الوظيفي - الإقامة - رقم الغرفة - الإسم - رقم الجواز"
                    onChange={(e) => setQuery(e.target.value)}
                />
            </Form>
        </div>
        {data && data.length > 0 
            ?  (
                <div className="dataTableHome">
                  {isLoading?Loading():
                    <div style={{margin:"15px"}}>
                          <div style={{display:"flex", justifyContent:"space-between"}}>
                            <small >عدد مطابقة البحث : {data.length}</small>
                            {rooms.includes(query.toLocaleUpperCase()) ? (
                              <>
                              <small>عدد الفراغات : {capacity-data.length} عامل</small>
                              <small>سعة الغرفة : {capacity} عامل</small>
                              </>
                              ) : null}
                              <Button
                              style={{fontSize:"12px",backgroundColor:"teal"}}
                              onClick={exportExcel2}
                              className="p-button-success mr-2"
                              >
                                تصدير ملف إكسل
                            </Button>
                            </div>
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
                    </div>}
                    </div>
            )
            :data.length === 0
            ?<div className="dataTableHome" style={{margin:"15px"}}>
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
            </div>
            :""}
              
              <>
        <div className="widgets">
          <Widget />
        </div>
        <div className="buildingWidgetS">
        </div>
        <div className="charts">
          <Featured />
          {/* <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> */}
        </div>
        </>
      </div>
    </div>
  );
};

export default Dashboard;