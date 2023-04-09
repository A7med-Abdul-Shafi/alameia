import React, { useState } from "react";
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
} from "mdb-react-ui-kit";
// import "./tab.scss";
import InvoiceBatawy1 from "./InvoiceBatawy1";
import InvoiceBatawy2 from "./InvoiceBatawy2";
import InvoiceElfateh from "./invoiceElfateh";
import InvoiceElsalam from "./invoiceElsalam";
import InvoiceFeda from "./invoiceFeda";
import InvoiceHemyani from "./invoiceHemyani";
import InvoiceMatrafy from "./invoiceMatrafy";
import InvoiceMorgan1Naseem from "./invoiceMorgan1Naseem";
import InvoiceMorgan2Bathaa from "./invoiceMorgan2Bathaa";
import InvoiceNefeay from "./invoiceNefeay";
import InvoiceParadise from "./invoiceParadise";
import InvoiceRahmaneya from "./invoiceRahmaneya";
import InvoiceSafaMashaer from "./invoiceSafaMashaer";
import InvoiceSaqaf from "./invoiceSaqaf";
import InvoiceSawady1 from "./invoiceSawady1";
import InvoiceSawady2 from "./invoiceSawady2";
import InvoiceWaqf from "./invoiceWaqf";

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
      <div className="tab" style={{ margin: "0" }}>
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
          <MDBTabsPane show={justifyActive === "tab1"}>
            <InvoiceSawady2 />
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === "tab2"}>
            <InvoiceBatawy1 />
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === "tab3"}>
            <InvoiceSafaMashaer />
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === "tab4"}>
            <InvoiceMatrafy />
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === "tab5"}>
            <InvoiceSaqaf />
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === "tab6"}>
            <InvoiceFeda />
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === "tab7"}>
            <InvoiceSawady1 />
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === "tab8"}>
            <InvoiceRahmaneya />
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === "tab9"}>
            <InvoiceElsalam />
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === "tab10"}>
            <InvoiceElfateh />
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === "tab11"}>
            <InvoiceParadise />
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === "tab12"}>
            <InvoiceBatawy2 />
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === "tab13"}>
            <InvoiceHemyani />
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === "tab14"}>
            <InvoiceNefeay />
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === "tab15"}>
            <InvoiceMorgan1Naseem />
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === "tab16"}>
            <InvoiceMorgan2Bathaa />
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === "tab17"}>
            <InvoiceWaqf />
          </MDBTabsPane>
        </MDBTabsContent>
      </div>
    </div>
  );
};
export default BuildingsTab;
