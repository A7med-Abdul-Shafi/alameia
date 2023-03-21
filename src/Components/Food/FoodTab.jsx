import React, { useState } from "react";
import {MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane} from "mdb-react-ui-kit";
import "./tab.scss";
import FoodAlameia from "./FoodAlameia";
import FoodHaramain from "./FoodHaramain";
import FoodEwaaa from "./FoodEwaaa";
import FoodEwaab from "./FoodEwaab";

function FoodTab () {
    const [justifyActive, setJustifyActive] = useState("tab1");
    const handleJustifyClick = (value) => {
    if (value === justifyActive) {
        return;
    }
    setJustifyActive(value);
    };
    return (
    <div className="homeContainer1">
        <div className="tab">
        <MDBTabs justify className="mb-3">
            <MDBTabsItem>
                <MDBTabsLink
                    onClick={() => handleJustifyClick("tab1")} active={justifyActive === "tab1"}>
                        العالمية
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                    onClick={() => handleJustifyClick("tab2")} active={justifyActive === "tab2"}>
                        الحرمين   
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                    onClick={() => handleJustifyClick("tab3")} active={justifyActive === "tab3"}>
                    إيواء 1  
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink
                    onClick={() => handleJustifyClick("tab4")} active={justifyActive === "tab4"}>
                    إيواء 2  
                </MDBTabsLink>
            </MDBTabsItem>
        </MDBTabs>
        <MDBTabsContent>
            <MDBTabsPane show={justifyActive === "tab1"}><FoodAlameia/></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab2"}><FoodHaramain/></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab3"}><FoodEwaaa/></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab4"}><FoodEwaab/></MDBTabsPane>
        </MDBTabsContent>
        </div>
    </div>
    );
};
export default FoodTab;
