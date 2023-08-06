import "./table.css";
import React, { useState } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import api from "../../customApi";
import { Button } from "react-bootstrap";

function TableData(props) {
const [loading, setLoading] = useState(false);
function Loading() {
    return (
    <div className="spinner" />
    );
}
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
    },
];
const [isDeleteLoading, setIsDeleteLoading] = useState(false);

const deleteitem = async (id) => {
    await Swal.fire({
    title: 'تأكيد حذف العامل؟',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    cancelButtonText: 'إلغاء',
    confirmButtonText: 'تأكيد!'
    }).then( async (result) => {
    if (result && result.isConfirmed) {
        setIsDeleteLoading(true)
        await axios
        .delete(`${api}/${props.deleteEndpoint}/${id}`)
        .then(async () => {
            setIsDeleteLoading(false);   
            await refetch();
        })
        Swal.fire({
            icon: "success",
            position: "center",
            customClass: "swal-wide",
            title: "تم حذف سجل",
            showConfirmButton: false,
            timer: 1700,
        });
}
})
};
const deleteData = async () => {
    await Swal.fire({
        title: 'تأكيد حذف القاعدة؟',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        cancelButtonText: 'إلغاء',
        confirmButtonText: 'تأكيد!'
        }).then( async (result) => {
        if (result && result.isConfirmed) {
            setLoading(true)
            await axios
            .delete(`${api}/${props.truncEndpoint}`)
            .then(async () => {
                setLoading(false);   
                await refetch();
            })
            Swal.fire({
                icon: "success",
                position: "center",
                customClass: "swal-wide",
                title: "تم حذف القاعدة",
                showConfirmButton: false,
                timer: 1700,
            });
    }
    })
};

const actionColumn = [
    {
    dataField: "action",
    text: " إجراء",
    formatter: (listofdatabase, value, row) => {
        return (
        <div
            className="viewButton"
            onClick={() => deleteitem(value.id)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
            </svg>
        </div>
        );
    },
    },
];

const { data, isLoading, isError, refetch } = useQuery(
    [`${props.queryKey}`],
    async () => {
    return await axios.get(`${api}/${props.fetchEndpoint}`).then((res) => res.data);
    }
);
if (isError) {
    return <h4>هناك خطأ ما ...</h4>;
}
if (isLoading) {
    return <Loading />
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
        onClick={()=>refetch()}
        className="btn btn-danger"
        style={{
            marginBottom: "1rem",
            backgroundColor: "teal",
            fontSize: "14px",
        }}
        >
        تحديث
        </button>
        <div>
        <Button
        className="btn btn-primary"
        style={{
            marginBottom: "1rem",
            backgroundColor: "teal",
            fontSize: "14px",
        }}
        onClick={deleteData}
        >
        {loading || isDeleteLoading?<Loading/>:"تنقية البيانات"}
        </Button>
        </div>
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
            href={`${api}/${props.apiFiledownload}`}
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

export default React.memo(TableData);
