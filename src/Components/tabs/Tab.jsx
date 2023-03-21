import React, { useState } from "react";
import {  MDBTabs,  MDBTabsItem,  MDBTabsLink,  MDBTabsContent,  MDBTabsPane } from "mdb-react-ui-kit";
import "./tab.scss";
import New from "../../Components/new/New";
import Groupalameia from "../../Components/group/Groupalameia";
import Tablesettlementalameia from "../../Components/Table/Tablesettlementalameia";
import SearchAlameia from "../../Components/search/SearchAlameia";
// import InventoryAlameia from "../../Components/inventory/InventoryAlameia";
import EditAlameia from "../../Components/edit/EditAlameia";
// import ReportNationalityAlameia from "../../Components/reports/ReportNationalityAlameia";
import Alameia from "../../Components/Maintainence/Alameia";
import AlameiaVacant from "../vacancies/alameiaVacant";
const Tab = () => {
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
              إستعلام
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
            تقرير التكاليف
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}><New/></MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab2"}><Groupalameia/></MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab7"}><Tablesettlementalameia/></MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab3"}><SearchAlameia/></MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab4"}><EditAlameia/></MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab5"}><Alameia/></MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab6"}><AlameiaVacant/></MDBTabsPane>
      </MDBTabsContent>
      </div>
      </div>
  );
};
export default Tab;
