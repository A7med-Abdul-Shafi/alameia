import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import api from "../../customApi";
import "./InteractiveList.scss";
function Loading() {
  return <div className="spinner" />
}
const userColumns = [
  {
    field: "emp_no",
    headerName: "الرقم الوظيفي",
    width: 120,
  },
  {
    field: "name",
    headerName: "الإسم",
    width: 150,
  },
  {
    field: "email",
    headerName: "إيميل",
    width: 180,
  },
  {
    field: "username",
    headerName: "إسم المستخدم",
    width: 140,
  },
  {
    field: "password",
    headerName: "كلمة المرور",
    width: 180,
  },
  {
    field: "roles",
    headerName: "صلاحية",
    width: 100,
  },
  
];

function InteractiveList () {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(`${api}/users/list`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.response);
        console.log(error.response.status);
      });
  }, []);
  const handleDelete = async (id) => {
    setLoading(true);
    await axios
      .delete(`${api}/users/delete/${id}`, {
        data: id,
      })
      .then(async (res) => {
        setData(data.filter((item) => item.id !== id));
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
  const actionColumn = [
    {
      field: "action",
      headerName: "إجراء",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/dashboard/user/${params.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">تعديل</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              {loading ? Loading() : "حذف"}
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        بيانات المستخدمين :
        <Link to="/dashboard/user">
          <button className="btn btn-danger">إنشاء مستخدم جديد</button>
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default InteractiveList;
