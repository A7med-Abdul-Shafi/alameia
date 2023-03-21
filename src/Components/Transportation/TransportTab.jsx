import React, { useState } from "react";
import {MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane} from "mdb-react-ui-kit";
import "./tab.scss";
import TransportAlameia from "./TransportAlameia";
import TransportHaramain from "./TransportHaramain";
import TransportEwaaa from "./TransportEwaaa";
import TransportEwaab from "./TransportEwaab";

const TransportTab = () => {
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
            <MDBTabsPane show={justifyActive === "tab1"}><TransportAlameia/></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab2"}><TransportHaramain/></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab3"}><TransportEwaaa/></MDBTabsPane>
            <MDBTabsPane show={justifyActive === "tab4"}><TransportEwaab/></MDBTabsPane>
        </MDBTabsContent>
        </div>
    </div>
    );
};
export default TransportTab;
