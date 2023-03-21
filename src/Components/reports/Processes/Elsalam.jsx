import React, { useState } from "react";
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from "mdb-react-ui-kit";
// import "./tab.scss";
import NewElsalam from "../../new/Elsalam/NewElsalam";
import GroupElsalam from "../../new/Elsalam/GroupElsalam";
import TablesettlementElsalam from "../../new/Elsalam/TablesettlementElsalam";
import SearchElsalam from "../../new/Elsalam/SearchElsalam";
import EditElsalam from "../../new/Elsalam/EditElsalam";
import ElsalamVacant from "../../vacancies/elsalamVacant";

const Elsalam = () => {
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
            عمليات التسكين - عمارة السلام
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
                <NewElsalam />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab2"}>
                <GroupElsalam />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab5"}>
                <TablesettlementElsalam />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab3"}>
                <SearchElsalam />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab4"}>
                <EditElsalam />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab6"}>
                <ElsalamVacant />
            </MDBTabsPane>
            </MDBTabsContent>
        </div>
        </div>
    );
};
export default Elsalam;
