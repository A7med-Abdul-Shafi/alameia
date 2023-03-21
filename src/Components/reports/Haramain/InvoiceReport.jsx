import React, { useState, useEffect } from "react";
import "../reportalameia.scss";
import { Formik, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import InvoiceAlameia from "./InvoiceHaramain";
import Masar from "./ProjectsInvoices/Masar";
import Mataf from "./ProjectsInvoices/Mataf";
import Shameya from "./ProjectsInvoices/Shameya";
import Iblik from "./ProjectsInvoices/Iblik";
import Sahat from "./ProjectsInvoices/Sahat";
import TrainConcrete from "./ProjectsInvoices/TrainConcrete";
import HRservices from "./ProjectsInvoices/HRservices";
import InfraStractureHaram from "./ProjectsInvoices/InfraStractureHaram";
import WarehouseShameya from "./ProjectsInvoices/WarehouseShameya";
import AlameiaConsums from "./ProjectsInvoices/AlameiaConsums";
import FirstRingRoad from "./ProjectsInvoices/FirstRingRoad";
import Marwa from "./ProjectsInvoices/Marwa";
import ServiceBuildings from "./ProjectsInvoices/ServiceBuildings";
import CentralStation from "./ProjectsInvoices/CentralStation";
import WarehouseMataf from "./ProjectsInvoices/WarehouseMataf";
import Salama from "./ProjectsInvoices/Salama";
import ServiceBuildingsSec16 from "./ProjectsInvoices/ServiceBuildingsSec16";
import CampsEmployee from "./ProjectsInvoices/CampsEmployee";
import AlameiaMaintainence from "./ProjectsInvoices/AlameiaMaintainence";
import AlameiaAhla from "./ProjectsInvoices/AlameiaAhla";
import ZakzokiFireFighting from "./ProjectsInvoices/ZakzokiFireFighting";
import EamarMaterial from "./ProjectsInvoices/EamarMaterial";
import Najm from "./ProjectsInvoices/Najm";
import SecurityBuildings from "./ProjectsInvoices/SecurityBuildings";
import AbrajKudai from "./ProjectsInvoices/AbrajKudai";
import Enma from "./ProjectsInvoices/Enma";
import WarehouseFirstRingRoad from "./ProjectsInvoices/WarehouseFirstRingRoad";
import MetalSaudiDecorations from "./ProjectsInvoices/MetalSaudiDecoration";
import api from "../../../customApi";
function InvoiceReport() {
  const months = [
    "يناير",
    "فبراير",
    "مارس",
    "إبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];
  const month = new Date().getMonth();
  const currentMonth = months.slice(month, month + 1);
  const initalValues = {
    project: "",
  };
  const validationSchema = yup.object().shape({
    project: yup.string().required("إختر المشروع "),
  });
  const [project, setProject] = useState("كل المشاريع");
  const [defaultProject, setDefaultProject] = useState(false);
  const [masarVisible, setMasarVisible] = useState(false);
  const [matafVisible, setMatafVisible] = useState(false);
  const [shameyaVisible, setShameyaVisible] = useState(false);
  const [iblikVisible, setIblikVisible] = useState(false);
  const [sahatVisible, setSahatVisible] = useState(false);
  const [trainConcreteVisible, setTrainConcreteVisible] = useState(false);
  const [hrServicesVisible, setHrServicesVisible] = useState(false);
  const [infraStractureVisible, setInfraStractureVisible] = useState(false);
  const [wareHouseShameyaVisible, setWareHouseShameyaVisible] = useState(false);
  const [alameiaConsumsVisible, setAlameiaConsumsVisible] = useState(false);
  const [firstRingRoadVisible, setFirstRingRoadVisible] = useState(false);
  const [marwaVisible, setMarwaVisible] = useState(false);
  const [serviceBuildingsVisible, setServieBuildingsVisible] = useState(false);
  const [centralStationVisible, setCentralStationVisible] = useState(false);
  const [wareHouseMatafVisible, setWareHouseMatafVisible] = useState(false);
  const [salamaVisible, setSalamaVisible] = useState(false);
  const [serviceBuildingsSec16Visible, setServiceBuildingsSec16Visible] =
    useState(false);
  const [campsEmployeeVisible, setCampsEmployeeVisible] = useState(false);
  const [alameiaMaintainenceVisible, setAlameiaMaintainenceVisible] =
    useState(false);
  const [alameiaAhlaVisible, setAlameiaAhlaVisible] = useState(false);
  const [zakzokiVisible, setZakzokiVisible] = useState(false);
  const [eamarMaterialVisible, setEamarMaterialVisible] = useState(false);
  const [najmVisible, setNajmVisible] = useState(false);
  const [securityBuildingsVisible, setSecurityBuildingsVisible] =
    useState(false);
  const [abrajKudaiVisible, setAbrajKudaiVisible] = useState(false);
  const [enmaVisible, setEnmaVisible] = useState(false);
  const [warehouseFirstRingRoadVisible, setWarehouseFirstRingRoadVisible] =
    useState(false);
  const [metalSaudiDecorationVisible, setMetalSaudiDecorationVisible] =
    useState(false);

  useEffect(() => {
    project === "كل المشاريع"
      ? setDefaultProject(true)
      : setDefaultProject(false);
    project === "مؤسسة مسار المتقدمة للنقل المحدودة"
      ? setMasarVisible(true)
      : setMasarVisible(false);
    project === "توسعة صحن المطاف"
      ? setMatafVisible(true)
      : setMatafVisible(false);
    project === "مشروع توسعة الحرم المكي (الشامية)"
      ? setShameyaVisible(true)
      : setShameyaVisible(false);
    project === "عيسى بن لادن (ابليك)"
      ? setIblikVisible(true)
      : setIblikVisible(false);
    project === "توسعة المسجد الحرام - الساحات" ||
    project === "التوسعة - الساحات" ||
    project === "الشامية - الساحات"
      ? setSahatVisible(true)
      : setSahatVisible(false);
    project === "محطة القطار المركزية - الخرسانة" ||
    project === "محطة القطار المركزية-الخرسانة"
      ? setTrainConcreteVisible(true)
      : setTrainConcreteVisible(false);
    project === "إدارة خدمات الموارد البشرية"
      ? setHrServicesVisible(true)
      : setHrServicesVisible(false);
    project === "التوسعة - إدارة البنية التحتية"
      ? setInfraStractureVisible(true)
      : setInfraStractureVisible(false);
    project === "الشامية - المستودعات" || project === "مستودعات الشامية"
      ? setWareHouseShameyaVisible(true)
      : setWareHouseShameyaVisible(false);
    project === "الشركة العالمية للمواد الإستهلاكية" ||
    project === "الشركة العالمية للمواد الاستهلاكية"
      ? setAlameiaConsumsVisible(true)
      : setAlameiaConsumsVisible(false);
    project === "الطريق الدائري الأول" || project === "الطريق الدائري الاول"
      ? setFirstRingRoadVisible(true)
      : setFirstRingRoadVisible(false);
    project === "جسر المروة" || project === "جسر المروه"
      ? setMarwaVisible(true)
      : setMarwaVisible(false);
    project === "مباني الخدمات" || project === "مبانى الخدمات"
      ? setServieBuildingsVisible(true)
      : setServieBuildingsVisible(false);
    project === "المحطة المركزية" || project === "المحطه المركزيه"
      ? setCentralStationVisible(true)
      : setCentralStationVisible(false);
    project === "المطاف - المستودعات"
      ? setWareHouseMatafVisible(true)
      : setWareHouseMatafVisible(false);
    project === "إدارة السلامة"
      ? setSalamaVisible(true)
      : setSalamaVisible(false);
    project === "مباني الخدمات_القطاع16" ||
    project === "مباني الخدمات - القطاع 16 " ||
    project === "مباني الخدمات_القطاع 16"
      ? setServiceBuildingsSec16Visible(true)
      : setServiceBuildingsSec16Visible(false);
    project === "موظفين المجمعات السكنية" ||
    project === "موظفي المجمعات السكنية"
      ? setCampsEmployeeVisible(true)
      : setCampsEmployeeVisible(false);
    project === "الشركة العالمية - صيانة" ||
    project === "الشركة العالمية - الصيانة"
      ? setAlameiaMaintainenceVisible(true)
      : setAlameiaMaintainenceVisible(false);
    project === "الشركة العالمية - أهلا" ||
    project === "الشركة العالمية - أهلاً" ||
    project === "الشركة العالمية - اهلاً" ||
    project === "الشركة العالمية - اهلا"
      ? setAlameiaAhlaVisible(true)
      : setAlameiaAhlaVisible(false);
    project === "مؤسسة الزقزوقي - الإطفاء" ||
    project === "مؤسسة الزقزوقي - الاطفاء" ||
    project === "مؤسسة الزقزوقى - الإطفاء" ||
    project === "مؤسسة الزقزوقى - الاطفاء"
      ? setZakzokiVisible(true)
      : setZakzokiVisible(false);
    project === "شركة مواد الأعمار لتأجير المعدات - R.E.C" ||
    project === "شركة مواد الإعمار لتأجير المعدات - R.E.C" ||
    project === "شركة مواد الأعمار لتأجير المعدات" ||
    project === "شركة مواد الإعمار لتأجير المعدات" ||
    project === "شركة مواد الإعمار  " ||
    project === "شركة مواد الاعمار  " ||
    project === "شركة مواد الأعمار  "
      ? setEamarMaterialVisible(true)
      : setEamarMaterialVisible(false);
    project === "شركة نجم الانجاز" ||
    project === "شركة نجم الإنجاز" ||
    project === "شركة نجم - الأنجاز" ||
    project === "شركة نجم - الانجاز"
      ? setNajmVisible(true)
      : setNajmVisible(false);
    project === "المباني الامنية - الحجون" ||
    project === "المباني الأمنية - الحجون"
      ? setSecurityBuildingsVisible(true)
      : setSecurityBuildingsVisible(false);
    project === "أبراج كدي" ||
    project === "أبراج كدى" ||
    project === "ابراج كدي" ||
    project === "ابراج كدى"
      ? setAbrajKudaiVisible(true)
      : setAbrajKudaiVisible(false);
    project === "شركة انماء المرافق والمقاولات" ||
    project === "شركة إنماء المرافق والمقاولات" ||
    project === "شركة انماء المرافق للمقاولات" ||
    project === "شركة إنماء المرافق للمقاولات"
      ? setEnmaVisible(true)
      : setEnmaVisible(false);
    project === "الطريق الدائري الاول - المستودعات" ||
    project === "الطريق الدائري الأول - المستودعات" ||
    project === "الطريق الدائري - المستودعات"
      ? setWarehouseFirstRingRoadVisible(true)
      : setWarehouseFirstRingRoadVisible(false);
    project === "الشركة السعودية لزخرفة المعادن" ||
    project === "الشركه السعوديه لزخرفه المعادن"
      ? setMetalSaudiDecorationVisible(true)
      : setMetalSaudiDecorationVisible(false);
  }, [project]);
  const handleOnChange = (e) => {
    setProject(e.target.value);
  };

  const [options, setOptions] = useState([]);
  useEffect(() => {
    const projects = async () => {
      await axios.get(`${api}/haramain/projects`).then((res) => {
        setOptions(res.data);
      });
    };
    projects();
  }, []);

  return (
    <div className="new1">
      <div className="newContainer">
        <div className="form" style={{ marginBottom: "10px" }}>
          <h1>
            فاتورة سكن العالمية لشهر {currentMonth} - {new Date().getFullYear()}{" "}
            مشروع:{" "}
          </h1>
          <Formik
            initialValues={initalValues}
            validationSchema={validationSchema}
          >
            <Field
              as="select"
              id="project"
              name="project"
              onChange={handleOnChange}
              className="form-control col-md-4"
              style={{
                fontSize: "14px",
                height: "40px",
                width: "300px",
                borderRadius: "10px",
              }}
            >
              <option value="0">{project}</option>
              {options.map((option, index) => (
                <option key={index} value={option.project}>
                  {option.project}
                </option>
              ))}
            </Field>
          </Formik>
        </div>
        {defaultProject && <InvoiceAlameia />}
        {masarVisible && <Masar />}
        {matafVisible && <Mataf />}
        {shameyaVisible && <Shameya />}
        {iblikVisible && <Iblik />}
        {sahatVisible && <Sahat />}
        {trainConcreteVisible && <TrainConcrete />}
        {hrServicesVisible && <HRservices />}
        {infraStractureVisible && <InfraStractureHaram />}
        {wareHouseShameyaVisible && <WarehouseShameya />}
        {alameiaConsumsVisible && <AlameiaConsums />}
        {firstRingRoadVisible && <FirstRingRoad />}
        {marwaVisible && <Marwa />}
        {serviceBuildingsVisible && <ServiceBuildings />}
        {centralStationVisible && <CentralStation />}
        {wareHouseMatafVisible && <WarehouseMataf />}
        {salamaVisible && <Salama />}
        {serviceBuildingsSec16Visible && <ServiceBuildingsSec16 />}
        {campsEmployeeVisible && <CampsEmployee />}
        {alameiaMaintainenceVisible && <AlameiaMaintainence />}
        {alameiaAhlaVisible && <AlameiaAhla />}
        {zakzokiVisible && <ZakzokiFireFighting />}
        {eamarMaterialVisible && <EamarMaterial />}
        {najmVisible && <Najm />}
        {securityBuildingsVisible && <SecurityBuildings />}
        {abrajKudaiVisible && <AbrajKudai />}
        {enmaVisible && <Enma />}
        {warehouseFirstRingRoadVisible && <WarehouseFirstRingRoad />}
        {metalSaudiDecorationVisible && <MetalSaudiDecorations />}
      </div>
    </div>
  );
}
export default InvoiceReport;
