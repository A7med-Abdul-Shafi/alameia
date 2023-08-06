import React, { useState } from "react";
import {  MDBTabs,  MDBTabsItem,  MDBTabsLink,  MDBTabsContent,  MDBTabsPane } from "mdb-react-ui-kit";
import "./tab.scss";
import New from "../../Components/new/New";
import GroupData from "../../Components/group/GroupData";
import TableData from "../../Components/Table/TableData";
import EditData from "../../Components/edit/EditData";
import Maintainence from "../../Components/Maintainence/Maintainence";
import AlameiaVacant from "../vacancies/alameiaVacant";
import TransferDues from "../transferDues/TransferDues" 
import useTitle from '../../hooks/useTitle'

const Tab = () => {
  useTitle('Alameia Processes')

  const [justifyActive, setJustifyActive] = useState("tab1");
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };
  return (
    <div className="homeContainer1">
      <div className="listTitle" style={{fontSize:"18px", fontFamily:"Droid Arabic Kufi"}}>عمليات التسكين - العالمية</div>
      <div className="tab">
      <MDBTabs justify className="mb-3" >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            تسكين مفرد
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            تسكين مجمع
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab3")}
            active={justifyActive === "tab3"}
          >
            تحويل تكاليف
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab4")}
            active={justifyActive === "tab4"}
          >
              تعديل بيانات
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab5")}
            active={justifyActive === "tab5"}
          >
              طلبات الصيانة 
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab6")}
            active={justifyActive === "tab6"}
          >
            الفراغات
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab7")}
            active={justifyActive === "tab7"}
          >
            لوحة التحكم 
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}><New/></MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab2"}>
        <GroupData
          omsubmitEndpoint="alameia/uploadfile"
          omsubmit2Endpoint="customer/uploadfile"
          deleteEndpoint="customer/delete"
          labelText="إضافة قاعدة بيانات العمال"
          buttonTextsubmitt="إضافة البيانات"
          buttonTextdelete="حذف البيانات"
        />
          </MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab7"}>
          <TableData 
          deleteEndpoint="alameia/delete"
          queryKey="alameia"
          fetchEndpoint="alameia"
          truncEndpoint="alameia/delete"
          apiFiledownload="alameia/api/file"
          /></MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab3"}>
          <TransferDues
            fetchProjects="projects/getall"
            fetchSearch="alameia/search/edit"
            updateEndpoint="alameia/transferdues"
            transferDuesEndPoint="alameia/transfergroup/uploadfile"
            />
          </MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab4"}>
          <EditData
            searchEndpoint="alameia/search/edit"
            updateEndpoint="alameia/update"
            exitGroupEndpoint="alameia/exitgroup/uploadfile"
          />
          </MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab5"}>
          <Maintainence
            queryKey="alameiaMaintainence"
            fetchData="alameiamaintainence/list"
            searchEndpoint="alameia/search"
            updateEndpoint="alameia/maintainence/new"
            deleteEndpoint="alameiamaintainence/delete"
          />
          </MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab6"}><AlameiaVacant/></MDBTabsPane>
      </MDBTabsContent>
      </div>
      </div>
  );
};
export default Tab;
