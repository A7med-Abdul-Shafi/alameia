import React, { useState } from "react";
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from "mdb-react-ui-kit";
import "./tab.scss";
import Groupharamain from "../../Components/group/Groupharamain";
import Newh from "../../Components/new/Newh";
import Tablesettlementharamain from "../../Components/Table/Tablesettlementharamain";
import SearchHaramain from "../../Components/search/SearchHaramain";
// import InventoryHaramain from "../../Components/inventory/InventoryHaramain";
import EditHaramain from "../edit/EditHaramain";
// import ReportNationalityHaramain from "../../Components/reports/ReportNationalityHaramain";
import HaramainVacant from "../vacancies/haramainVacant";
import Haramain from "../../Components/Maintainence/Haramain";

const Tabh = () => {
    const [justifyActive, setJustifyActive] = useState("tab1");
    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
    };
    return (
        <div className="homeContainer1">
            <div className="listTitle" style={{ fontSize: "18px", fontFamily: "Droid Arabic Kufi" }}>عمليات التسكين - الحرمين</div>
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
                    <MDBTabsPane show={justifyActive === "tab1"}><Newh /></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === "tab2"}><Groupharamain /></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === "tab3"}><Tablesettlementharamain /></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === "tab4"}><SearchHaramain /></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === "tab6"}><EditHaramain /></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === "tab7"}><Haramain/></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === "tab5"}><HaramainVacant /></MDBTabsPane>
                </MDBTabsContent>
            </div>
        </div> 
    );
};
export default Tabh;
