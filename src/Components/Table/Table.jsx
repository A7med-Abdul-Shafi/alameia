import "./table.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import api from "../../customApi";
function Table() {
  function Loading() {
    return <div className="spinner" />;
  }
  // eout(resolve, ms));
  // const randomInt = limit => Math.floor(Math.random() * limit);
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
    {
      id: 10,
      dataField: "housing",
      text: "السكن",
      sort: true,
    },
  ];
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);
  const [data7, setData7] = useState([]);
  const [data8, setData8] = useState([]);
  const [data9, setData9] = useState([]);
  const [data10, setData10] = useState([]);
  const [data11, setData11] = useState([]);
  const [data12, setData12] = useState([]);
  const [data13, setData13] = useState([]);
  const [data14, setData14] = useState([]);
  const [data15, setData15] = useState([]);
  const [data16, setData16] = useState([]);
  const [data17, setData17] = useState([]);
  const [data18, setData18] = useState([]);
  const [data19, setData19] = useState([]);
  const [data20, setData20] = useState([]);
  const [data21, setData21] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/alameia`).then(async (res) => {
        setData1(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/ewaaa`).then(async (res) => {
        setData2(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/ewaab`).then(async (res) => {
        setData3(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/haramain`).then(async (res) => {
        setData4(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/saqaf`).then(async (res) => {
        setData5(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/morgan2bathaa`).then(async (res) => {
        setData6(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/morgan1naseem`).then(async (res) => {
        setData7(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/nefeay`).then(async (res) => {
        setData8(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/rahmaneya`).then(async (res) => {
        setData9(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/feda`).then(async (res) => {
        setData10(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/paradise`).then(async (res) => {
        setData11(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/hemyani`).then(async (res) => {
        setData12(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/matrafy`).then(async (res) => {
        setData13(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/elfateh`).then(async (res) => {
        setData14(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/elsalam`).then(async (res) => {
        setData15(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/sawady2`).then(async (res) => {
        setData16(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/sawady1`).then(async (res) => {
        setData17(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/batawy2`).then(async (res) => {
        setData18(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/batawy1`).then(async (res) => {
        setData19(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/safamashaer`).then(async (res) => {
        setData20(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      await axios.get(`${api}/waqf`).then(async (res) => {
        setData21(res.data);
        setIsLoading(false);
      });
    };
    data();
  }, []);
  const dataOne = data1.concat(...data2);
  const dataTwo = data3.concat(...data4);
  const dataThree = data5.concat(...data6);
  const dataFour = data7.concat(...data8);
  const dataFive = data9.concat(...data10);
  const dataSex = data11.concat(...data12);
  const dataSeven = data13.concat(...data14);
  const dataEight = data15.concat(...data16);
  const dataNine = data17.concat(...data18);
  const dataTen = data19.concat(...data20);

  const dataEleven = dataOne.concat(...dataTwo);
  const dataTwelve = dataThree.concat(...dataFour);
  const datatherteen = dataFive.concat(...dataSex);
  const dataForteen = dataSeven.concat(...dataEight);
  const datafifteen = dataNine.concat(...dataTen);
  const dataSexteen = dataEleven.concat(...dataTwelve);
  const dataseventeen = datatherteen.concat(...dataForteen);
  const dataeighteen = datafifteen.concat(...dataSexteen);
  const datanineteen = dataseventeen.concat(...dataeighteen);
  const datatwenty = datanineteen.concat(...data21);
  return (
    <div className="dataTableHome">
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
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
              href={`${api}/alameia/api/file`}
              className="btn btn-info"
              role="button"
            >
              تصدير البيانات ملف إكسل
            </a>
          </div>
        </div>
      </div>
      <div>
        {isLoading ? (
          Loading()
        ) : (
          <BootstrapTable
            keyField="id"
            data={datatwenty}
            columns={userColumns}
            striped
            hover
            condensed
            noDataIndication="لا يوجد سجلات"
            filter={filterFactory()}
            pagination={paginationFactory()}
          />
        )}
      </div>
    </div>
  );
}

export default React.memo(Table);
