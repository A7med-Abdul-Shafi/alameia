import React, { useState } from "react";
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from "mdb-react-ui-kit";
// import "./tab.scss";
import NewMorgan2Bathaa from "../../new/Morgan2Bathaa/NewMorgan2Bathaa";
import GroupMorgan2Bathaa from "../../new/Morgan2Bathaa/GroupMorgan2Bathaa";
import TablesettlementMorgan2Bathaa from "../../new/Morgan2Bathaa/TablesettlementMorgan2Bathaa";
import SearchMorgan2Bathaa from "../../new/Morgan2Bathaa/SearchMorgan2Bathaa";
import EditMorgan2Bathaa from "../../new/Morgan2Bathaa/EditMorgan2Bathaa";
import Morgan2BathaaVacant from "../../vacancies/morgan2BathaaVacant";

const Morgan2Bathaa = () => {
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
            عمليات التسكين - عمارة مرجان 2 بطحاء قريش
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
                <NewMorgan2Bathaa />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab2"}>
                <GroupMorgan2Bathaa />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab5"}>
                <TablesettlementMorgan2Bathaa />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab3"}>
                <SearchMorgan2Bathaa />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab4"}>
                <EditMorgan2Bathaa />
            </MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab6"}>
                <Morgan2BathaaVacant />
            </MDBTabsPane>
            </MDBTabsContent>
        </div>
        </div>
    );
};
export default Morgan2Bathaa;
