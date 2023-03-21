import React, { useState } from "react";
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from "mdb-react-ui-kit";
import "./tab.scss";
import Groupewaa1 from "../../Components/group/Groupewaa1";
import Newe1 from "../../Components/new/Newe1";
import Tablesettlementewaa1 from "../../Components/Table/Tablesettlementewaa1";
import SearchEwaaa from "../../Components/search/SeacrhEwaaa";
// import InventoryEwaaa from "../../Components/inventory/InventoryEwaaa";
import EditEwaaa from "../../Components/edit/EditEwaaa";
// import ReportNationalityEwaaa from "../../Components/reports/ReportNationalityEwaaa";
import EwaaaVacant from "../vacancies/ewaaaVacant";
import Ewaaa from "../../Components/Maintainence/Ewaaa";

const Tabe1 = () => {
    const [justifyActive, setJustifyActive] = useState("tab1");
    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
    };
    return (
        <div className="homeContainer1">
            <div className="listTitle" style={{ fontSize: "18px", fontFamily: "Droid Arabic Kufi" }}>عمليات التسكين - إيواء 1</div>
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
                            onClick={() => handleJustifyClick("tab4")}
                            active={justifyActive === "tab4"}
                        >
                            إستعلام
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink
                            onClick={() => handleJustifyClick("tab6")}
                            active={justifyActive === "tab6"}
                        >
                            تعديل بيانات
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink
                            onClick={() => handleJustifyClick("tab7")}
                            active={justifyActive === "tab7"}
                        >
                            طلبات الصيانة 
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink
                            onClick={() => handleJustifyClick("tab5")}
                            active={justifyActive === "tab5"}
                        >
                            الفراغات 
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink
                            onClick={() => handleJustifyClick("tab3")}
                            active={justifyActive === "tab3"}
                        >
                            تقرير التكاليف
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>
                <MDBTabsContent>
                    <MDBTabsPane show={justifyActive === "tab1"}><Newe1 /></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === "tab2"}><Groupewaa1 /></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === "tab3"}><Tablesettlementewaa1 /></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === "tab4"}><SearchEwaaa /></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === "tab6"}><EditEwaaa /></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === "tab7"}><Ewaaa/></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === "tab5"}><EwaaaVacant /></MDBTabsPane>
                </MDBTabsContent>
            </div>
        </div>
    );
};
export default Tabe1;
