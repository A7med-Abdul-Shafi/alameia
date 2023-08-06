import { useState } from "react";
import "./Style.scss";
import axios from "axios";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory from "react-bootstrap-table2-filter";
import api from "../../customApi";

function Maintainence(props) {
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
    dataField: "content",
    text: "نوع الصيانة",
    sort: true,
    },
    {
    id: 7,
    dataField: "status",
    text: "حالة الطلب",
    sort: true,
    },
];
const [fetchedData, setFetchedData] = useState([]);
const [query, setQuery] = useState("");
const [isLoading, setIsLoading] = useState(false);
const [startLoading, setStartLoading] = useState(false);
const [content, setContent] = useState("");
const [emp_no, setEmp_no] = useState("");
const [name, setName] = useState("");
const [nationality, setNationality] = useState("");
const [iqama_no, setIqama_no] = useState("");
const [room_no, setRoom_no] = useState("");
const [isDeleteLoading, setIsDeleteLoading] = useState(false);
const [housing, setHousing] = useState("");
const { data, refetch } = useQuery(
    [`${props.queryKey}`],
    async () => {
    return await axios
        .get(`${api}/${props.fetchData}`)
        .then((res) => res.data);
    }
);

const addTodo = {
    emp_no,
    name,
    room_no,
    nationality,
    iqama_no,
    content,
    housing,
};
const fetchSearchResults = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    await axios
    .get(`${api}/${props.searchEndpoint}?q=${query}`)
    .then(async (res) => {
        setQuery("");
        setFetchedData(res.data);
        setEmp_no(res.data[0].emp_no);
        setName(res.data[0].name);
        setRoom_no(res.data[0].room_no);
        setNationality(res.data[0].nationality);
        setIqama_no(res.data[0].iqama_no);
        setHousing(res.data[0].housing);
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

const handleAddRequest = async () => {
    setStartLoading(true);
    await axios
    .post(`${api}/${props.updateEndpoint}`, addTodo)
    .then(async (res) => {
        refetch();
        setFetchedData([]);
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
    .finally(() => setStartLoading(false));
};
const handleDelete = async (id) => {
    setIsDeleteLoading(true);
    await axios
    .delete(`${api}/${props.deleteEndpoint}/${id}`)
    .then(async (res) => {
        setIsDeleteLoading(false);
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
    });
};
const actionColumn = [
    {
    dataField: "action",
    text: " إجراء",
    formatter: (data, value, row) => {
        return (
        <div className="viewButton">
            {isDeleteLoading ? (
            Loading()
            ) : (
            <svg
                onClick={() => handleDelete(value.id)}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            )}
        </div>
        );
    },
    },
];

return (
    <>
    <div className="dataTableHome">
        <h5>إنشاء طلب صيانة</h5>
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
                placeholder="الرقم الوظيفي"
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
        ) : fetchedData?.length > 0 ? (
        <div className="dataTableHome">
            <table className="table table-striped table-hover table-bordered table-condensed">
            <thead>
                <tr>
                <th>الرقم الوظيفي</th>
                <th>الإسم</th>
                <th>رقم الغرفة</th>
                <th>الجنسية</th>
                <th>رقم الإقامة</th>
                <th>نوع الصيانة</th>
                <th>إجراء</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{fetchedData[0].emp_no}</td>
                <td>{fetchedData[0].name}</td>
                <td>{fetchedData[0].room_no}</td>
                <td>{fetchedData[0].nationality}</td>
                <td>{fetchedData[0].iqama_no}</td>
                <td>
                    <form style={{ padding: "0px" }}>
                    <input
                        type="text"
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                    </form>
                </td>
                <td>
                    <button
                    type="button"
                    className="btn btn-link btn-sm btn-rounded"
                    onClick={handleAddRequest}
                    >
                    {startLoading ? Loading() : "إنشاء"}
                    </button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        ) : (
        <div className="empty">
            <p>قم بالبحث بالرقم الوظيفي لإنشاء طلب جديد</p>
        </div>
        )}
        <div
        style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
            borderBottom: "10px",
        }}
        >
        <h5>جميع الطلبات :</h5>
        <button className="btn btn-outline-success" onClick={()=>refetch()}>
            تحديث
        </button>
        </div>

        <div>
        {data?.length > 0 ? (
            <BootstrapTable
            keyField="id"
            data={data}
            columns={actionColumn.concat(userColumns)}
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
    </>
);
}

export default Maintainence;
