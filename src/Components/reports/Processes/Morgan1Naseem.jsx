import React, { useState } from "react";
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from "mdb-react-ui-kit";
// import "./tab.scss";
import NewMorgan1Naseem from "../../new/Morgan1Naseem/NewMorgan1Naseem";
import GroupMorgan1Naseem from "../../new/Morgan1Naseem/GroupMorgan1Naseem";
import TablesettlementMorgan1Naseem from "../../new/Morgan1Naseem/TablesettlementMorgan1Naseem";
import SearchMorgan1Naseem from "../../new/Morgan1Naseem/SearchMorgan1Naseem";
import EditMorgan1Naseem from "../../new/Morgan1Naseem/EditMorgan1Naseem";
import Morgan1NaseemVacant from "../../vacancies/morgan1NaseemVacant";

const Morgan1Naseem = () => {
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
            عمليات التسكين - عمارة مرجان 1 النسيم
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
                <NewMorgan1Naseem />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab2"}>
                <GroupMorgan1Naseem />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab5"}>
                <TablesettlementMorgan1Naseem />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab3"}>
                <SearchMorgan1Naseem />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab4"}>
                <EditMorgan1Naseem />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab6"}>
                <Morgan1NaseemVacant />
            </MDBTabsPane>
            </MDBTabsContent>
        </div>
        </div>
    );
};
export default Morgan1Naseem;
