import React, { useState } from "react";
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from "mdb-react-ui-kit";
// import "./tab.scss";
import NewFeda from "../../new/Feda/NewFeda";
import GroupFeda from "../../new/Feda/GroupFeda";
import TablesettlementFeda from "../../new/Feda/TablesettlementFeda";
import SearchFeda from "../../new/Feda/SearchFeda";
import EditFeda from "../../new/Feda/EditFeda";
import FedaVacant from "../../vacancies/fedaVacant";

const Feda = () => {
const [justifyActive, setJustifyActive] = useState("tab1");
const handleJustifyClick = (value) => {
    if (value === justifyActive) {
        return;
    }
    setJustifyActive(value);
};
return (
        <div className="homeContainer1" style={{margin:"0",padding:"0" }}>
        <div
            className="listTitle"
            style={{ fontSize: "18px", fontFamily: "Droid Arabic Kufi" }}
        >
            عمليات التسكين - عمارة الفدا
        </div>
        <div className="tab" style={{margin:"0",padding:"5px" }}>
            <MDBTabs justify className="mb-3">
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
                onClick={() => handleJustifyClick("tab6")}
                active={justifyActive === "tab6"}
                >
                الفراغات 
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab5")}
                active={justifyActive === "tab5"}
                >
                تقرير الجنسيات
                </MDBTabsLink>
            </MDBTabsItem>
            </MDBTabs>
            <MDBTabsContent>
            <MDBTabsPane show={justifyActive === "tab1"}>
                <NewFeda />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab2"}>
                <GroupFeda />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab5"}>
                <TablesettlementFeda />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab3"}>
                <SearchFeda />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab4"}>
                <EditFeda />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab6"}>
                <FedaVacant />
            </MDBTabsPane>
            </MDBTabsContent>
        </div>
        </div>
    );
};
export default Feda;
