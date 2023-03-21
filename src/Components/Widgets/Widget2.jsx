import "./widget.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import api from "../../customApi";
const Widget2 = () => {
  const [countSawady1, setCountSawady1] = useState(null);
  useEffect(() => {
    const countAlameia = async () => {
      await axios.get(`${api}/sawady1/count`).then((response) => {
        setCountSawady1(response.data.length);
      });
    };
    countAlameia();
  }, []);
  const [countSawady1clear, setCountSawady1clear] = useState(null);
  useEffect(() => {
    const countAlameia = async () => {
      await axios.get(`${api}/sawady1/count/clear`).then((response) => {
        setCountSawady1clear(response.data.length);
      });
    };
    countAlameia();
  }, []);
  const [countSawady2, setCountSawady2] = useState(null);
  useEffect(() => {
    const countEwaaa = async () => {
      await axios.get(`${api}/sawady2/count`).then((response) => {
        setCountSawady2(response.data.length);
      });
    };
    countEwaaa();
  }, []);
  const [countSawady2Clear, setCountSawady2Clear] = useState(null);
  useEffect(() => {
    const countEwaaa = async () => {
      await axios.get(`${api}/sawady2/count/clear`).then((response) => {
        setCountSawady2Clear(response.data.length);
      });
    };
    countEwaaa();
  }, []);
  const [countBatawy1, setCountBatawy1] = useState(null);
  useEffect(() => {
    const countEwaab = async () => {
      await axios.get(`${api}/batawy1/count`).then((response) => {
        setCountBatawy1(response.data.length);
      });
    };
    countEwaab();
  }, []);
  const [countBatawy1Clear, setCountBatawy1Clear] = useState(null);
  useEffect(() => {
    const countEwaab = async () => {
      await axios.get(`${api}/batawy1/count/clear`).then((response) => {
        setCountBatawy1Clear(response.data.length);
      });
    };
    countEwaab();
  }, []);
  const [countBatawy2, setCountBatawy2] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/batawy2/count`).then((response) => {
        setCountBatawy2(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countBatawy2Clear, setCountBatawy2Clear] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/batawy2/count/clear`).then((response) => {
        setCountBatawy2Clear(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countSafaMashaer, setCountSafaMashaer] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/safamashaer/count`).then((response) => {
        setCountSafaMashaer(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countSafaMashaerClear, setCountSafaMashaerClear] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/safamashaer/count/clear`).then((response) => {
        setCountSafaMashaerClear(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countMatrafy, setCountMatrafy] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/matrafy/count`).then((response) => {
        setCountMatrafy(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countMatrafyClear, setCountMatrafyClear] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/matrafy/count/clear`).then((response) => {
        setCountMatrafyClear(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countSaqaf, setCountSaqaf] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/saqaf/count`).then((response) => {
        setCountSaqaf(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countSaqafClear, setCountSaqafClear] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/saqaf/count/clear`).then((response) => {
        setCountSaqafClear(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countElsalam, setCountElsalam] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/elsalam/count`).then((response) => {
        setCountElsalam(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countElsalamClear, setCountElsalamClear] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/elsalam/count/clear`).then((response) => {
        setCountElsalamClear(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countElfateh, setCountElfateh] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/elfateh/count`).then((response) => {
        setCountElfateh(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countElfatehClear, setCountElfatehClear] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/elfateh/count/clear`).then((response) => {
        setCountElfatehClear(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countRahmaneya, setCountRahmaneya] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/rahmaneya/count`).then((response) => {
        setCountRahmaneya(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countRahmaneyaClear, setCountRahmaneyaClear] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/rahmaneya/count/clear`).then((response) => {
        setCountRahmaneyaClear(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countHemyani, setCountHemyani] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/hemyani/count`).then((response) => {
        setCountHemyani(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countHemyaniClear, setCountHenyaniClear] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/hemyani/count/clear`).then((response) => {
        setCountHenyaniClear(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countNefeay, setCountNefeay] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/nefeay/count`).then((response) => {
        setCountNefeay(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countNefeayClear, setCountNefeayClear] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/nefeay/count/clear`).then((response) => {
        setCountNefeayClear(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countMorgan1Naseem, setCountMorgan1Naseem] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/morgan1naseem/count`).then((response) => {
        setCountMorgan1Naseem(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countMorgan1NaseemClear, setCountMorgan1NaseemClear] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/morgan1naseem/count/clear`).then((response) => {
        setCountMorgan1NaseemClear(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countMorgan2Bathaa, setCountMorgan2Bathaa] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/morgan2bathaa/count`).then((response) => {
        setCountMorgan2Bathaa(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countMorgan2BathaaClear, setCountMorgan2BathaaClear] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/morgan2bathaa/count/clear`).then((response) => {
        setCountMorgan2BathaaClear(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countParadise, setCountParadise] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/paradise/count`).then((response) => {
        setCountParadise(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countParadiseClear, setCountParadiseClear] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/paradise/count/clear`).then((response) => {
        setCountParadiseClear(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countWaqf, setCountWaqf] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/waqf/count`).then((response) => {
        setCountWaqf(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countWaqfClear, setCountWaqfClear] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/waqf/count/clear`).then((response) => {
        setCountWaqfClear(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countFeda, setCountFeda] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/feda/count`).then((response) => {
        setCountFeda(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countFedaClear, setCountFedaClear] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/feda/count/clear`).then((response) => {
        setCountFedaClear(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countA, setCountA] = useState(null);
  useEffect(() => {
    const countAlameia = async () => {
      await axios.get(`${api}/alameia/count`).then((response) => {
        setCountA(response.data.length);
      });
    };
    countAlameia();
  }, []);
  const [countAclear, setCountAclear] = useState(null);
  useEffect(() => {
    const countAlameia = async () => {
      await axios.get(`${api}/alameia/count/clear`).then((response) => {
        setCountAclear(response.data.length);
      });
    };
    countAlameia();
  }, []);
  const [countE1, setCountE1] = useState(null);
  useEffect(() => {
    const countEwaaa = async () => {
      await axios.get(`${api}/ewaaa/count`).then((response) => {
        setCountE1(response.data.length);
      });
    };
    countEwaaa();
  }, []);
  const [countE1clear, setCountE1clear] = useState(null);
  useEffect(() => {
    const countEwaaa = async () => {
      await axios.get(`${api}/ewaaa/count/clear`).then((response) => {
        setCountE1clear(response.data.length);
      });
    };
    countEwaaa();
  }, []);
  const [countE2, setCountE2] = useState(null);
  useEffect(() => {
    const countEwaab = async () => {
      await axios.get(`${api}/ewaab/count`).then((response) => {
        setCountE2(response.data.length);
      });
    };
    countEwaab();
  }, []);
  const [countE2clear, setCountE2clear] = useState(null);
  useEffect(() => {
    const countEwaab = async () => {
      await axios.get(`${api}/ewaab/count/clear`).then((response) => {
        setCountE2clear(response.data.length);
      });
    };
    countEwaab();
  }, []);
  const [countH, setCountH] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/haramain/count`).then((response) => {
        setCountH(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const [countHclear, setCountHclear] = useState(null);
  useEffect(() => {
    const countHaramain = async () => {
      await axios.get(`${api}/haramain/count/clear`).then((response) => {
        setCountHclear(response.data.length);
      });
    };
    countHaramain();
  }, []);
  const countAll = countA + countE1 + countE2 + countH;
  const TotalBuildings =
    countSawady1 +
    countSawady2 +
    countBatawy1 +
    countBatawy2 +
    countMatrafy +
    countElfateh +
    countFeda +
    countElsalam +
    countHemyani +
    countNefeay +
    countRahmaneya +
    countMorgan1Naseem +
    countMorgan2Bathaa +
    countSafaMashaer +
    countSaqaf +
    countParadise +
    countWaqf;
  const GrandTotal = TotalBuildings + countAll;
  const countAllClear =
    countHclear +
    countAclear +
    countE1clear +
    countE2clear +
    countSawady1clear +
    countSawady2Clear +
    countBatawy1Clear +
    countBatawy2Clear +
    countMatrafyClear +
    countNefeayClear +
    countMorgan1Naseem +
    countMorgan2Bathaa +
    countFedaClear +
    countHemyaniClear +
    countElsalamClear +
    countElfatehClear +
    countSafaMashaerClear +
    countSaqafClear +
    countParadiseClear +
    countWaqfClear +
    countHemyaniClear;
  return (
    <>
      <div className="top">
        <div className="widget2">
          <div className="left1">
            <span className="title">السوداي 1</span>
            <span className="counter">{countSawady1}</span>
            {/* <span className="link">عرض التفاصيل</span> */}
          </div>
          <div className="right1">
            {countSawady1clear > 0 ? (
              <>
                <div
                  className="percentage positive"
                  style={{ color: "crimson" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countSawady1clear}
                </span>
              </>
            ) : (
              <>
                <div className="percentage positive" style={{ color: "green" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countSawady1clear}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="widget2">
          <div className="left1">
            <span className="title">السوادي 2</span>
            <span className="counter">{countSawady2}</span>
          </div>
          <div className="right1">
            {countSawady2Clear > 0 ? (
              <>
                <div
                  className="percentage positive"
                  style={{ color: "crimson" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countSawady2Clear}
                </span>
              </>
            ) : (
              <>
                <div className="percentage positive" style={{ color: "green" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countSawady2Clear}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="widget2">
          <div className="left1">
            <span className="title">البتاوي 1</span>
            <span className="counter">{countBatawy1}</span>
          </div>
          <div className="right1">
            {countBatawy1Clear > 0 ? (
              <>
                <div
                  className="percentage positive"
                  style={{ color: "crimson" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countBatawy1Clear}
                </span>
              </>
            ) : (
              <>
                <div className="percentage positive" style={{ color: "green" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countBatawy1Clear}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="widget2">
          <div className="left1">
            <span className="title">البتاوي 2</span>
            <span className="counter">{countBatawy2}</span>
          </div>
          <div className="right1">
            {countBatawy2Clear > 0 ? (
              <>
                <div
                  className="percentage positive"
                  style={{ color: "crimson" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countBatawy2Clear}
                </span>
              </>
            ) : (
              <>
                <div className="percentage positive" style={{ color: "green" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countBatawy2Clear}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="widget2">
          <div className="left1">
            <span className="title">صفا المشاعر</span>
            <span className="counter">{countSafaMashaer}</span>
          </div>
          <div className="right1">
            {countSafaMashaerClear > 0 ? (
              <>
                <div
                  className="percentage positive"
                  style={{ color: "crimson" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countSafaMashaerClear}
                </span>
              </>
            ) : (
              <>
                <div className="percentage positive" style={{ color: "green" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countSafaMashaerClear}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="widget2">
          <div className="left1">
            <span className="title">المطرفي</span>
            <span className="counter">{countMatrafy}</span>
          </div>
          <div className="right1">
            {countMatrafyClear > 0 ? (
              <>
                <div
                  className="percentage positive"
                  style={{ color: "crimson" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countMatrafyClear}
                </span>
              </>
            ) : (
              <>
                <div className="percentage positive" style={{ color: "green" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countMatrafyClear}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="center">
        <div className="widget2">
          <div className="left1">
            <span className="title">السقاف</span>
            <span className="counter">{countSaqaf}</span>
          </div>
          <div className="right1">
            {countSaqafClear > 0 ? (
              <>
                <div
                  className="percentage positive"
                  style={{ color: "crimson" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countSaqafClear}
                </span>
              </>
            ) : (
              <>
                <div className="percentage positive" style={{ color: "green" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countSaqafClear}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="widget2">
          <div className="left1">
            <span className="title">السلام</span>
            <span className="counter">{countElsalam}</span>
          </div>
          <div className="right1">
            {countElsalamClear > 0 ? (
              <>
                <div
                  className="percentage positive"
                  style={{ color: "crimson" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countElsalamClear}
                </span>
              </>
            ) : (
              <>
                <div className="percentage positive" style={{ color: "green" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countElsalamClear}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="widget2">
          <div className="left1">
            <span className="title">الفاتح</span>
            <span className="counter">{countElfateh}</span>
          </div>
          <div className="right1">
            {countElfatehClear > 0 ? (
              <>
                <div
                  className="percentage positive"
                  style={{ color: "crimson" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countElfatehClear}
                </span>
              </>
            ) : (
              <>
                <div className="percentage positive" style={{ color: "green" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countElfatehClear}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="widget2">
          <div className="left1">
            <span className="title">الحمياني</span>
            <span className="counter">{countHemyani}</span>
          </div>
          <div className="right1">
            {countHemyaniClear > 0 ? (
              <>
                <div
                  className="percentage positive"
                  style={{ color: "crimson" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countHemyaniClear}
                </span>
              </>
            ) : (
              <>
                <div className="percentage positive" style={{ color: "green" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countHemyaniClear}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="widget2">
          <div className="left1">
            <span className="title">بارادايس</span>
            <span className="counter">{countParadise}</span>
          </div>
          <div className="right1">
            {countParadiseClear > 0 ? (
              <>
                <div
                  className="percentage positive"
                  style={{ color: "crimson" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countParadiseClear}
                </span>
              </>
            ) : (
              <>
                <div className="percentage positive" style={{ color: "green" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countParadiseClear}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="widget2">
          <div className="left1">
            <span className="title">الفدا</span>
            <span className="counter">{countFeda}</span>
          </div>
          <div className="right1">
            {countFedaClear > 0 ? (
              <>
                <div
                  className="percentage positive"
                  style={{ color: "crimson" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countFedaClear}
                </span>
              </>
            ) : (
              <>
                <div className="percentage positive" style={{ color: "green" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countFedaClear}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="widget2">
          <div className="left1">
            <span className="title">الرحمانية</span>
            <span className="counter">{countRahmaneya}</span>
          </div>
          <div className="right1">
            {countRahmaneyaClear > 0 ? (
              <>
                <div
                  className="percentage positive"
                  style={{ color: "crimson" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countRahmaneyaClear}
                </span>
              </>
            ) : (
              <>
                <div className="percentage positive" style={{ color: "green" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countRahmaneyaClear}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="widget2">
          <div className="left1">
            <span className="title">النفيعي</span>
            <span className="counter">{countNefeay}</span>
          </div>
          <div className="right1">
            {countNefeayClear > 0 ? (
              <>
                <div
                  className="percentage positive"
                  style={{ color: "crimson" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countNefeayClear}
                </span>
              </>
            ) : (
              <>
                <div className="percentage positive" style={{ color: "green" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countNefeayClear}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="widget2">
          <div className="left1">
            <span className="title">مرجان 1 النسيم </span>
            <span className="counter">{countMorgan1Naseem}</span>
          </div>
          <div className="right1">
            {countMorgan1NaseemClear > 0 ? (
              <>
                <div
                  className="percentage positive"
                  style={{ color: "crimson" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countMorgan1NaseemClear}
                </span>
              </>
            ) : (
              <>
                <div className="percentage positive" style={{ color: "green" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countMorgan1NaseemClear}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="widget2">
          <div className="left1">
            <span className="title">مرجان 2 بطحاء قريش</span>
            <span className="counter">{countMorgan2Bathaa}</span>
          </div>
          <div className="right1">
            {countMorgan2BathaaClear > 0 ? (
              <>
                <div
                  className="percentage positive"
                  style={{ color: "crimson" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countMorgan2BathaaClear}
                </span>
              </>
            ) : (
              <>
                <div className="percentage positive" style={{ color: "green" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countMorgan2BathaaClear}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="widget2">
          <div className="left1">
            <span className="title">الوقف</span>
            <span className="counter">{countWaqf}</span>
          </div>
          <div className="right1">
            {countWaqfClear > 0 ? (
              <>
                <div
                  className="percentage positive"
                  style={{ color: "crimson" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countWaqfClear}
                </span>
              </>
            ) : (
              <>
                <div className="percentage positive" style={{ color: "green" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  إخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countWaqfClear}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="total">
        <div className="widget">
          <div className="left">
            <span className="title"> المجموع الكلي للسكنات:</span>
            <span className="counter">{GrandTotal}</span>
            <span className="link">عرض التفاصيل</span>
          </div>
          <div className="right">
            {countAllClear > 0 ? (
              <>
                <div
                  className="percentage positive"
                  style={{ color: "crimson" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                  مجموع الإخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countAllClear}
                </span>
              </>
            ) : (
              <>
                <div className="percentage positive" style={{ color: "green" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  مجموع الإخلاءات
                </div>
                <span
                  className="counter"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  {countAllClear}
                </span>
              </>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Widget2;
