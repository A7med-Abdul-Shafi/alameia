import React, { useState } from "react";
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from "mdb-react-ui-kit";
import "./tab.scss";
import Groupewaa2 from "../../Components/group/Groupewaa2";
import Newe2 from "../../Components/new/Newe2";
import Tablesettlementewaa2 from "../../Components/Table/Tablesettlementewaa2";
import SearchEwaab from "../../Components/search/SeacrEwaab";
// import InventoryEwaab from "../../Components/inventory/InventoryEwaab";
import EditEwaab from "../../Components/edit/EditEwaab";
// import ReportNationalityEwaab from "../../Components/reports/ReportNationalityEwaab";
import EwaabVacant from "../vacancies/ewaabVacant";
import Ewaab from "../../Components/Maintainence/Ewaab";

const Tabe2 = () => {
    const [justifyActive, setJustifyActive] = useState("tab1");
    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
    };
    return (
        <div className="homeContainer1">
            <div className="listTitle" style={{ fontSize: "18px", fontFamily: "Droid Arabic Kufi" }}>عمليات التسكين - إيواء 2</div>
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
                    <MDBTabsPane show={justifyActive === "tab1"}><Newe2 /></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === "tab2"}><Groupewaa2 /></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === "tab3"}><Tablesettlementewaa2 /></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === "tab4"}> <SearchEwaab /></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === "tab6"}><EditEwaab /></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === "tab7"}><Ewaab/></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === "tab5"}><EwaabVacant /></MDBTabsPane>
                </MDBTabsContent>
            </div>
        </div>
    );
};
export default Tabe2;
