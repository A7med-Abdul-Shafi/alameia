import React, { useState } from "react";
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from "mdb-react-ui-kit";
import "./tab.scss";
import Sawady2 from "./Processes/Sawady2";
import Sawady1 from "./Processes/Sawady1";
import Batawy1 from "./Processes/Batawy1";
import Batawy2 from "./Processes/Batawy2";
import Elfateh from "./Processes/Elfateh";
import Elsalam from "./Processes/Elsalam";
import Feda from "./Processes/Feda";
import Hemyani from "./Processes/Hemyani";
import Matrafy from "./Processes/Matrafy";
import Morgan1Naseem from "./Processes/Morgan1Naseem";
import Morgan2Bathaa from "./Processes/Morgan2Bathaa";
import Nefeay from "./Processes/Nefeay";
import Paradise from "./Processes/Paradise";
import Rahmaneya from "./Processes/Rahmaneya";
import SafaMashaer from "./Processes/SafaMashaer";
import Saqaf from "./Processes/Saqaf";
import Waqf from "./Processes/Waqf";


const BuildingsTab = () => {
const [justifyActive, setJustifyActive] = useState("tab1");
const handleJustifyClick = (value) => {
    if (value === justifyActive) {
        return;
    }
    setJustifyActive(value);
};
    return (
        <div className="homeContainer1">
        <div className="tab" style={{ margin:"0" }}>
            <MDBTabs justify className="mb-3" style={{ fontSize: "14px" }}>
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab1")}
                active={justifyActive === "tab1"}
                >
                عمارة السوادي 2
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab2")}
                active={justifyActive === "tab2"}
                >
                بتاوي 1
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab3")}
                active={justifyActive === "tab3"}
                >
                صفا المشاعر
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab4")}
                active={justifyActive === "tab4"}
                >
                عمارة المطرفي
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab5")}
                active={justifyActive === "tab5"}
                >
                السقاف
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab6")}
                active={justifyActive === "tab6"}
                >
                عمارة الفدا
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab7")}
                active={justifyActive === "tab7"}
                >
                عمارة السوادي 1
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab8")}
                active={justifyActive === "tab8"}
                >
                الرحمانية
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab9")}
                active={justifyActive === "tab9"}
                >
                السلام
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab10")}
                active={justifyActive === "tab10"}
                >
                الفاتح
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab11")}
                active={justifyActive === "tab11"}
                >
                باراديس
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab12")}
                active={justifyActive === "tab12"}
                >
                بتاوي 2
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab13")}
                active={justifyActive === "tab13"}
                >
                عمارة الحمياني
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab14")}
                active={justifyActive === "tab14"}
                >
                عمارة النفيعي
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab15")}
                active={justifyActive === "tab15"}
                >
                مرجان 1 النسيم
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab16")}
                active={justifyActive === "tab16"}
                >
                مرجان 2 بطحاء قريش
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                onClick={() => handleJustifyClick("tab17")}
                active={justifyActive === "tab17"}
                >
                الوقف
                </MDBTabsLink>
            </MDBTabsItem>
        </MDBTabs>
        <MDBTabsContent>
            <MDBTabsPane show={justifyActive === "tab1"}><Sawady2 /></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab2"}><Batawy1 /></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab3"}><SafaMashaer /></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab4"}><Matrafy /></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab5"}><Saqaf /></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab6"}><Feda /></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab7"}><Sawady1 /></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab8"}><Rahmaneya /></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab9"}><Elsalam /></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab10"}><Elfateh /></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab11"}><Paradise /></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab12"}><Batawy2 /></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab13"}><Hemyani /></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab14"}><Nefeay /></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab15"}><Morgan1Naseem /></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab16"}><Morgan2Bathaa /></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab17"}><Waqf /></MDBTabsPane>
        </MDBTabsContent>
        </div>
    </div>
);
};
export default BuildingsTab;
