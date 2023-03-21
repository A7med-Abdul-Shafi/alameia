import React, { useEffect, useState } from "react";
import "../../invoice.scss";
import { MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import ReactToPdf from "react-to-pdf";
import SBG from "../../sbg.png";
import { InvoiceNumber } from "invoice-number";
import axios from "axios";
import api from "../../../../customApi";
function InvoiceAlameia() {
  const ref = React.createRef();
  function getMonthShortName(monthNo) {
    const date = new Date();
    date.setMonth(monthNo - 1);
    return date.toLocaleString("en-US", { month: "short" });
  }
  function getDays(year, month) {
    return new Date(year, month, 0).getDate();
  }
  const month = new Date().getMonth();
  const date = new Date();
  const currentYear = date.getFullYear();
  const monthDays = getDays(currentYear, month + 1);

  var background = "rgb(98, 195, 233)";
  var backgroundYellow = "rgba(250, 240, 95, 0.973)";
  const firstDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).toLocaleDateString();
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).toLocaleDateString();

  ////////////////////////////////////////
  const [countDayOne, setCountDayOne] = useState([]);
  useEffect(() => {
    const countMasri = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/dayone`)
        .then((response) => {
          setCountDayOne(response.data.length);
        });
    };
    countMasri();
  }, []);
  const [countClearDayOne, setCountClearDayOne] = useState([]);
  useEffect(() => {
    const countYamani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/dayone1`)
        .then((response) => {
          setCountClearDayOne(response.data.length);
        });
    };
    countYamani();
  }, []);
  const [countInDay2, setCountInDay2] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/indaytwo`)
        .then((response) => {
          setCountInDay2(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayTwo, setCountClearDayTwo] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/cleardaytwo`)
        .then((response) => {
          setCountClearDayTwo(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay3, setCountInDay3] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday3`)
        .then((response) => {
          setCountInDay3(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay3, setCountClearDay3] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday3`)
        .then((response) => {
          setCountClearDay3(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay4, setCountInDay4] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday4`)
        .then((response) => {
          setCountInDay4(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay4, setCountClearDay4] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday4`)
        .then((response) => {
          setCountClearDay4(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay5, setCountInDay5] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday5`)
        .then((response) => {
          setCountInDay5(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay5, setCountClearDay5] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday5`)
        .then((response) => {
          setCountClearDay5(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay6, setCountInDay6] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday6`)
        .then((response) => {
          setCountInDay6(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay6, setCountClearDay6] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday6`)
        .then((response) => {
          setCountClearDay6(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay7, setCountInDay7] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday7`)
        .then((response) => {
          setCountInDay7(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay7, setCountClearDay7] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday7`)
        .then((response) => {
          setCountClearDay7(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay8, setCountInDay8] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday8`)
        .then((response) => {
          setCountInDay8(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay8, setCountClearDay8] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday8`)
        .then((response) => {
          setCountClearDay8(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay9, setCountInDay9] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday9`)
        .then((response) => {
          setCountInDay9(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay9, setCountClearDay9] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday9`)
        .then((response) => {
          setCountClearDay9(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay10, setCountInDay10] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday10`)
        .then((response) => {
          setCountInDay10(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay10, setCountClearDay10] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday10`)
        .then((response) => {
          setCountClearDay10(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay11, setCountInDay11] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday11`)
        .then((response) => {
          setCountInDay11(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay11, setCountClearDay11] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday11`)
        .then((response) => {
          setCountClearDay11(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay12, setCountInDay12] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday12`)
        .then((response) => {
          setCountInDay12(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay12, setCountClearDay12] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday12`)
        .then((response) => {
          setCountClearDay12(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay13, setCountInDay13] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday13`)
        .then((response) => {
          setCountInDay13(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay13, setCountClearDay13] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday13`)
        .then((response) => {
          setCountClearDay13(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay14, setCountInDay14] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday14`)
        .then((response) => {
          setCountInDay14(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay14, setCountClearDay14] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday14`)
        .then((response) => {
          setCountClearDay14(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay15, setCountInDay15] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday15`)
        .then((response) => {
          setCountInDay15(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay15, setCountClearDay15] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday15`)
        .then((response) => {
          setCountClearDay15(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay16, setCountInDay16] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday16`)
        .then((response) => {
          setCountInDay16(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay16, setCountClearDay16] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday16`)
        .then((response) => {
          setCountClearDay16(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay17, setCountInDay17] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday17`)
        .then((response) => {
          setCountInDay17(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay17, setCountClearDay17] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday17`)
        .then((response) => {
          setCountClearDay17(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay18, setCountInDay18] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday18`)
        .then((response) => {
          setCountInDay18(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay18, setCountClearDay18] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday18`)
        .then((response) => {
          setCountClearDay18(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay19, setCountInDay19] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday19`)
        .then((response) => {
          setCountInDay19(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay19, setCountClearDay19] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday19`)
        .then((response) => {
          setCountClearDay19(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay20, setCountInDay20] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday20`)
        .then((response) => {
          setCountInDay20(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay20, setCountClearDay20] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday20`)
        .then((response) => {
          setCountClearDay20(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay21, setCountInDay21] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday21`)
        .then((response) => {
          setCountInDay21(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay21, setCountClearDay21] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday21`)
        .then((response) => {
          setCountClearDay21(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay22, setCountInDay22] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday22`)
        .then((response) => {
          setCountInDay22(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay22, setCountClearDay22] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday22`)
        .then((response) => {
          setCountClearDay22(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay23, setCountInDay23] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday23`)
        .then((response) => {
          setCountInDay23(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay23, setCountClearDay23] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday23`)
        .then((response) => {
          setCountClearDay23(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay24, setCountInDay24] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday24`)
        .then((response) => {
          setCountInDay24(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay24, setCountClearDay24] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday24`)
        .then((response) => {
          setCountClearDay24(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay25, setCountInDay25] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday25`)
        .then((response) => {
          setCountInDay25(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay25, setCountClearDay25] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday25`)
        .then((response) => {
          setCountClearDay25(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay26, setCountInDay26] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday26`)
        .then((response) => {
          setCountInDay26(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay26, setCountClearDay26] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday26`)
        .then((response) => {
          setCountClearDay26(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay27, setCountInDay27] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday27`)
        .then((response) => {
          setCountInDay27(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay27, setCountClearDay27] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday27`)
        .then((response) => {
          setCountClearDay27(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay28, setCountInDay28] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday28`)
        .then((response) => {
          setCountInDay28(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay28, setCountClearDay28] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday28`)
        .then((response) => {
          setCountClearDay28(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay29, setCountInDay29] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday29`)
        .then((response) => {
          setCountInDay29(response.data.length);
        });
    };
    countPakistani();
  }, []);
  console.log(countInDay29);
  const [countClearDay29, setCountClearDay29] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday29`)
        .then((response) => {
          setCountClearDay29(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  console.log(countClearDay29);
  const [countInDay30, setCountInDay30] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday30`)
        .then((response) => {
          setCountInDay30(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDay30, setCountClearDay30] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/clearday30`)
        .then((response) => {
          setCountClearDay30(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDay31, setCountInDay31] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/inday31`)
        .then((response) => {
          setCountInDay31(response.data.length);
        });
    };
    countPakistani();
  }, []);
  console.log(countInDay31);
  // const [countClearDay31, setCountClearDay31] = useState([]);
  // useEffect(() => {
  //     const countIndonesi = async () => {
  //         await axios.get(`${api}/ewaab/dues/servicebuildings/clearday31`).then((response) => {
  //             if (monthDays === 30 || monthDays === 28){
  //                 setCountClearDay31(0)
  //             }else {
  //                 setCountClearDay31(response.data.length)
  //             }
  //         });
  //     }
  //     countIndonesi()
  // }
  //     , []);
  //////////////////////////////////////////////////////// End of calculate
  ////////////////////////////////////////////////////// food Dues
  const [countDayFoodOne, setCountDayFoodOne] = useState([]);
  useEffect(() => {
    const countMasri = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/dayone`)
        .then((response) => {
          setCountDayFoodOne(response.data.length);
        });
    };
    countMasri();
  }, []);
  const [countClearDayFoodOne, setCountClearDayFoodOne] = useState([]);
  useEffect(() => {
    const countYamani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/dayone1`)
        .then((response) => {
          setCountClearDayFoodOne(response.data.length);
        });
    };
    countYamani();
  }, []);
  const [countInDayFood2, setCountInDayFood2] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/indaytwo`)
        .then((response) => {
          setCountInDayFood2(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFoodTwo, setCountClearDayFoodTwo] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/cleardaytwo`)
        .then((response) => {
          setCountClearDayFoodTwo(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood3, setCountInDayFood3] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday3`)
        .then((response) => {
          setCountInDayFood3(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood3, setCountClearDayFood3] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday3`)
        .then((response) => {
          setCountClearDayFood3(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood4, setCountInDayFood4] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday4`)
        .then((response) => {
          setCountInDayFood4(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood4, setCountClearDayFood4] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday4`)
        .then((response) => {
          setCountClearDayFood4(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood5, setCountInDayFood5] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday5`)
        .then((response) => {
          setCountInDayFood5(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood5, setCountClearDayFood5] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday5`)
        .then((response) => {
          setCountClearDayFood5(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood6, setCountInDayFood6] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday6`)
        .then((response) => {
          setCountInDayFood6(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood6, setCountClearDayFood6] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday6`)
        .then((response) => {
          setCountClearDayFood6(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood7, setCountInDayFood7] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday7`)
        .then((response) => {
          setCountInDayFood7(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood7, setCountClearDayFood7] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday7`)
        .then((response) => {
          setCountClearDayFood7(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood8, setCountInDayFood8] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday8`)
        .then((response) => {
          setCountInDayFood8(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood8, setCountClearDayFood8] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday8`)
        .then((response) => {
          setCountClearDayFood8(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood9, setCountInDayFood9] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday9`)
        .then((response) => {
          setCountInDayFood9(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood9, setCountClearDayFood9] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday9`)
        .then((response) => {
          setCountClearDayFood9(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood10, setCountInDayFood10] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday10`)
        .then((response) => {
          setCountInDayFood10(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood10, setCountClearDayFood10] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday10`)
        .then((response) => {
          setCountClearDayFood10(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood11, setCountInDayFood11] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday11`)
        .then((response) => {
          setCountInDayFood11(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood11, setCountClearDayFood11] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday11`)
        .then((response) => {
          setCountClearDayFood11(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood12, setCountInDayFood12] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday12`)
        .then((response) => {
          setCountInDayFood12(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood12, setCountClearDayFood12] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday12`)
        .then((response) => {
          setCountClearDayFood12(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood13, setCountInDayFood13] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday13`)
        .then((response) => {
          setCountInDayFood13(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood13, setCountClearDayFood13] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday13`)
        .then((response) => {
          setCountClearDayFood13(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood14, setCountInDayFood14] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday14`)
        .then((response) => {
          setCountInDayFood14(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood14, setCountClearDayFood14] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday14`)
        .then((response) => {
          setCountClearDayFood14(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood15, setCountInDayFood15] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday15`)
        .then((response) => {
          setCountInDayFood15(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood15, setCountClearDayFood15] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday15`)
        .then((response) => {
          setCountClearDayFood15(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood16, setCountInDayFood16] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday16`)
        .then((response) => {
          setCountInDayFood16(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood16, setCountClearDayFood16] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday16`)
        .then((response) => {
          setCountClearDayFood16(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood17, setCountInDayFood17] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday17`)
        .then((response) => {
          setCountInDayFood17(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood17, setCountClearDayFood17] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday17`)
        .then((response) => {
          setCountClearDayFood17(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood18, setCountInDayFood18] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday18`)
        .then((response) => {
          setCountInDayFood18(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood18, setCountClearDayFood18] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday18`)
        .then((response) => {
          setCountClearDayFood18(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood19, setCountInDayFood19] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday19`)
        .then((response) => {
          setCountInDayFood19(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood19, setCountClearDayFood19] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday19`)
        .then((response) => {
          setCountClearDayFood19(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood20, setCountInDayFood20] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday20`)
        .then((response) => {
          setCountInDayFood20(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood20, setCountClearDayFood20] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday20`)
        .then((response) => {
          setCountClearDayFood20(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood21, setCountInDayFood21] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday21`)
        .then((response) => {
          setCountInDayFood21(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood21, setCountClearDayFood21] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday21`)
        .then((response) => {
          setCountClearDayFood21(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood22, setCountInDayFood22] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday22`)
        .then((response) => {
          setCountInDayFood22(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood22, setCountClearDayFood22] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday22`)
        .then((response) => {
          setCountClearDayFood22(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood23, setCountInDayFood23] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday23`)
        .then((response) => {
          setCountInDayFood23(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood23, setCountClearDayFood23] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday23`)
        .then((response) => {
          setCountClearDayFood23(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood24, setCountInDayFood24] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday24`)
        .then((response) => {
          setCountInDayFood24(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood24, setCountClearDayFood24] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday24`)
        .then((response) => {
          setCountClearDayFood24(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood25, setCountInDayFood25] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday25`)
        .then((response) => {
          setCountInDayFood25(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood25, setCountClearDayFood25] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday25`)
        .then((response) => {
          setCountClearDayFood25(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood26, setCountInDayFood26] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday26`)
        .then((response) => {
          setCountInDayFood26(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood26, setCountClearDayFood26] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday26`)
        .then((response) => {
          setCountClearDayFood26(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood27, setCountInDayFood27] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday27`)
        .then((response) => {
          setCountInDayFood27(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood27, setCountClearDayFood27] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday27`)
        .then((response) => {
          setCountClearDayFood27(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood28, setCountInDayFood28] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday28`)
        .then((response) => {
          setCountInDayFood28(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood28, setCountClearDayFood28] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday28`)
        .then((response) => {
          setCountClearDayFood28(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood29, setCountInDayFood29] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday29`)
        .then((response) => {
          setCountInDayFood29(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood29, setCountClearDayFood29] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday29`)
        .then((response) => {
          setCountClearDayFood29(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood30, setCountInDayFood30] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday30`)
        .then((response) => {
          setCountInDayFood30(response.data.length);
        });
    };
    countPakistani();
  }, []);
  const [countClearDayFood30, setCountClearDayFood30] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/clearday30`)
        .then((response) => {
          setCountClearDayFood30(response.data.length);
        });
    };
    countIndonesi();
  }, []);
  const [countInDayFood31, setCountInDayFood31] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios
        .get(`${api}/ewaab/dues/servicebuildings/food/inday31`)
        .then((response) => {
          setCountInDayFood31(response.data.length);
        });
    };
    countPakistani();
  }, []);
  // const [countClearDayFood31, setCountClearDayFood31] = useState([]);
  // useEffect(() => {
  //     const countIndonesi = async () => {
  //         await axios.get(`${api}/ewaab/dues/servicebuildings/food/clearday31`).then((response) => {
  //             if (monthDays === 30 || monthDays === 28){
  //                 setCountClearDayFood31(0)
  //             }else {
  //                 setCountClearDayFood31(response.data.length)
  //             }
  //         });
  //     }
  //     countIndonesi()
  // }
  //     , []);
  ////////////////////////// food Duse
  const countTotalDayFoodTwo =
    countDayFoodOne + countInDayFood2 - countClearDayFoodOne;
  const countTotalDayFood3 =
    countTotalDayFoodTwo + countInDayFood3 - countClearDayFoodTwo;
  const countTotalDayFood4 =
    countTotalDayFood3 + countInDayFood4 - countClearDayFood3;
  const countTotalDayFood5 =
    countTotalDayFood4 + countInDayFood5 - countClearDayFood4;
  const countTotalDayFood6 =
    countTotalDayFood5 + countInDayFood6 - countClearDayFood5;
  const countTotalDayFood7 =
    countTotalDayFood6 + countInDayFood7 - countClearDayFood6;
  const countTotalDayFood8 =
    countTotalDayFood7 + countInDayFood8 - countClearDayFood7;
  const countTotalDayFood9 =
    countTotalDayFood8 + countInDayFood9 - countClearDayFood8;
  const countTotalDayFood10 =
    countTotalDayFood9 + countInDayFood10 - countClearDayFood9;
  const countTotalDayFood11 =
    countTotalDayFood10 + countInDayFood11 - countClearDayFood10;
  const countTotalDayFood12 =
    countTotalDayFood11 + countInDayFood12 - countClearDayFood11;
  const countTotalDayFood13 =
    countTotalDayFood12 + countInDayFood13 - countClearDayFood12;
  const countTotalDayFood14 =
    countTotalDayFood13 + countInDayFood14 - countClearDayFood13;
  const countTotalDayFood15 =
    countTotalDayFood14 + countInDayFood15 - countClearDayFood14;
  const countTotalDayFood16 =
    countTotalDayFood15 + countInDayFood16 - countClearDayFood15;
  const countTotalDayFood17 =
    countTotalDayFood16 + countInDayFood17 - countClearDayFood16;
  const countTotalDayFood18 =
    countTotalDayFood17 + countInDayFood18 - countClearDayFood17;
  const countTotalDayFood19 =
    countTotalDayFood18 + countInDayFood19 - countClearDayFood18;
  const countTotalDayFood20 =
    countTotalDayFood19 + countInDayFood20 - countClearDayFood19;
  const countTotalDayFood21 =
    countTotalDayFood20 + countInDayFood21 - countClearDayFood20;
  const countTotalDayFood22 =
    countTotalDayFood21 + countInDayFood22 - countClearDayFood21;
  const countTotalDayFood23 =
    countTotalDayFood22 + countInDayFood23 - countClearDayFood22;
  const countTotalDayFood24 =
    countTotalDayFood23 + countInDayFood24 - countClearDayFood23;
  const countTotalDayFood25 =
    countTotalDayFood24 + countInDayFood25 - countClearDayFood24;
  const countTotalDayFood26 =
    countTotalDayFood25 + countInDayFood26 - countClearDayFood25;
  const countTotalDayFood27 =
    countTotalDayFood26 + countInDayFood27 - countClearDayFood26;
  const countTotalDayFood28 =
    countTotalDayFood27 + countInDayFood28 - countClearDayFood27;
  const countTotalDayFood29 =
    countTotalDayFood28 + countInDayFood29 - countClearDayFood28;
  const countTotalDayFood30 =
    countTotalDayFood29 + countInDayFood30 - countClearDayFood29;
  const countTotalDayFood31 =
    countTotalDayFood30 + countInDayFood31 - countClearDayFood30;

  const GrandTotalFood28 =
    countDayFoodOne +
    countTotalDayFoodTwo +
    countTotalDayFood3 +
    countTotalDayFood4 +
    countTotalDayFood5 +
    countTotalDayFood6 +
    countTotalDayFood7 +
    countTotalDayFood8 +
    countTotalDayFood9 +
    countTotalDayFood10 +
    countTotalDayFood11 +
    countTotalDayFood12 +
    countTotalDayFood13 +
    countTotalDayFood14 +
    countTotalDayFood15 +
    countTotalDayFood16 +
    countTotalDayFood17 +
    countTotalDayFood18 +
    countTotalDayFood19 +
    countTotalDayFood20 +
    countTotalDayFood21 +
    countTotalDayFood22 +
    countTotalDayFood23 +
    countTotalDayFood24 +
    countTotalDayFood25 +
    countTotalDayFood26 +
    countTotalDayFood27 +
    countTotalDayFood28;

  const GrandTotalFood30 =
    countDayFoodOne +
    countTotalDayFoodTwo +
    countTotalDayFood3 +
    countTotalDayFood4 +
    countTotalDayFood5 +
    countTotalDayFood6 +
    countTotalDayFood7 +
    countTotalDayFood8 +
    countTotalDayFood9 +
    countTotalDayFood10 +
    countTotalDayFood11 +
    countTotalDayFood12 +
    countTotalDayFood13 +
    countTotalDayFood14 +
    countTotalDayFood15 +
    countTotalDayFood16 +
    countTotalDayFood17 +
    countTotalDayFood18 +
    countTotalDayFood19 +
    countTotalDayFood20 +
    countTotalDayFood21 +
    countTotalDayFood22 +
    countTotalDayFood23 +
    countTotalDayFood24 +
    countTotalDayFood25 +
    countTotalDayFood26 +
    countTotalDayFood27 +
    countTotalDayFood28 +
    countTotalDayFood29 +
    countTotalDayFood30;

  const GrandTotalFood31 =
    countDayFoodOne +
    countTotalDayFoodTwo +
    countTotalDayFood3 +
    countTotalDayFood4 +
    countTotalDayFood5 +
    countTotalDayFood6 +
    countTotalDayFood7 +
    countTotalDayFood8 +
    countTotalDayFood9 +
    countTotalDayFood10 +
    countTotalDayFood11 +
    countTotalDayFood12 +
    countTotalDayFood13 +
    countTotalDayFood14 +
    countTotalDayFood15 +
    countTotalDayFood16 +
    countTotalDayFood17 +
    countTotalDayFood18 +
    countTotalDayFood19 +
    countTotalDayFood20 +
    countTotalDayFood21 +
    countTotalDayFood22 +
    countTotalDayFood23 +
    countTotalDayFood24 +
    countTotalDayFood25 +
    countTotalDayFood26 +
    countTotalDayFood27 +
    countTotalDayFood28 +
    countTotalDayFood29 +
    countTotalDayFood30 +
    countTotalDayFood31;

  ////////////////////////// food Duse
  ////////////////////////// Case 3
  const countTotalDayTwo = countDayOne + countInDay2 - countClearDayOne;
  const countTotalDay3 = countTotalDayTwo + countInDay3 - countClearDayTwo;
  const countTotalDay4 = countTotalDay3 + countInDay4 - countClearDay3;
  const countTotalDay5 = countTotalDay4 + countInDay5 - countClearDay4;
  const countTotalDay6 = countTotalDay5 + countInDay6 - countClearDay5;
  const countTotalDay7 = countTotalDay6 + countInDay7 - countClearDay6;
  const countTotalDay8 = countTotalDay7 + countInDay8 - countClearDay7;
  const countTotalDay9 = countTotalDay8 + countInDay9 - countClearDay8;
  const countTotalDay10 = countTotalDay9 + countInDay10 - countClearDay9;
  const countTotalDay11 = countTotalDay10 + countInDay11 - countClearDay10;
  const countTotalDay12 = countTotalDay11 + countInDay12 - countClearDay11;
  const countTotalDay13 = countTotalDay12 + countInDay13 - countClearDay12;
  const countTotalDay14 = countTotalDay13 + countInDay14 - countClearDay13;
  const countTotalDay15 = countTotalDay14 + countInDay15 - countClearDay14;
  const countTotalDay16 = countTotalDay15 + countInDay16 - countClearDay15;
  const countTotalDay17 = countTotalDay16 + countInDay17 - countClearDay16;
  const countTotalDay18 = countTotalDay17 + countInDay18 - countClearDay17;
  const countTotalDay19 = countTotalDay18 + countInDay19 - countClearDay18;
  const countTotalDay20 = countTotalDay19 + countInDay20 - countClearDay19;
  const countTotalDay21 = countTotalDay20 + countInDay21 - countClearDay20;
  const countTotalDay22 = countTotalDay21 + countInDay22 - countClearDay21;
  const countTotalDay23 = countTotalDay22 + countInDay23 - countClearDay22;
  const countTotalDay24 = countTotalDay23 + countInDay24 - countClearDay23;
  const countTotalDay25 = countTotalDay24 + countInDay25 - countClearDay24;
  const countTotalDay26 = countTotalDay25 + countInDay26 - countClearDay25;
  const countTotalDay27 = countTotalDay26 + countInDay27 - countClearDay26;
  const countTotalDay28 = countTotalDay27 + countInDay28 - countClearDay27;
  const countTotalDay29 = countTotalDay28 + countInDay29 - countClearDay28;
  const countTotalDay30 = countTotalDay29 + countInDay30 - countClearDay29;
  const countTotalDay31 = countTotalDay30 + countInDay31 - countClearDay30;

  const GrandTotal28 =
    countDayOne +
    countTotalDayTwo +
    countTotalDay3 +
    countTotalDay4 +
    countTotalDay5 +
    countTotalDay6 +
    countTotalDay7 +
    countTotalDay8 +
    countTotalDay9 +
    countTotalDay10 +
    countTotalDay11 +
    countTotalDay12 +
    countTotalDay13 +
    countTotalDay14 +
    countTotalDay15 +
    countTotalDay16 +
    countTotalDay17 +
    countTotalDay18 +
    countTotalDay19 +
    countTotalDay20 +
    countTotalDay21 +
    countTotalDay22 +
    countTotalDay23 +
    countTotalDay24 +
    countTotalDay25 +
    countTotalDay26 +
    countTotalDay27 +
    countTotalDay28;

  const GrandTotal30 =
    countDayOne +
    countTotalDayTwo +
    countTotalDay3 +
    countTotalDay4 +
    countTotalDay5 +
    countTotalDay6 +
    countTotalDay7 +
    countTotalDay8 +
    countTotalDay9 +
    countTotalDay10 +
    countTotalDay11 +
    countTotalDay12 +
    countTotalDay13 +
    countTotalDay14 +
    countTotalDay15 +
    countTotalDay16 +
    countTotalDay17 +
    countTotalDay18 +
    countTotalDay19 +
    countTotalDay20 +
    countTotalDay21 +
    countTotalDay22 +
    countTotalDay23 +
    countTotalDay24 +
    countTotalDay25 +
    countTotalDay26 +
    countTotalDay27 +
    countTotalDay28 +
    countTotalDay29 +
    countTotalDay30;

  const GrandTotal31 =
    countDayOne +
    countTotalDayTwo +
    countTotalDay3 +
    countTotalDay4 +
    countTotalDay5 +
    countTotalDay6 +
    countTotalDay7 +
    countTotalDay8 +
    countTotalDay9 +
    countTotalDay10 +
    countTotalDay11 +
    countTotalDay12 +
    countTotalDay13 +
    countTotalDay14 +
    countTotalDay15 +
    countTotalDay16 +
    countTotalDay17 +
    countTotalDay18 +
    countTotalDay19 +
    countTotalDay20 +
    countTotalDay21 +
    countTotalDay22 +
    countTotalDay23 +
    countTotalDay24 +
    countTotalDay25 +
    countTotalDay26 +
    countTotalDay27 +
    countTotalDay28 +
    countTotalDay29 +
    countTotalDay30 +
    countTotalDay31;

  ////////////////////////////////////////////////////

  return (
    <div className="container" ref={ref}>
      <br />
      <div
        className="pdf"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <img src={SBG} alt="" style={{ marginTop: "0px", padding: "0px" }} />
        <span style={{ fontSize: "14px" }}>فاتورة كامب أعيان (العالمية)</span>
        <div>
          <span style={{ color: "teal", fontSize: "15px", alignSelf: "end" }}>
            MONTH FROM : {firstDay} TO {lastDay}
          </span>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <a href={`${api}/ewaab/servicebuildings/api/file`}>
              <svg
                style={{ cursor: "pointer" }}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-cloud-download"
                viewBox="0 0 16 16"
              >
                <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z" />
              </svg>
            </a>
            <ReactToPdf
              targetRef={ref}
              filename="فاتورة كامب أعيان (العالمية).pdf"
              scale={0.7}
            >
              {({ toPdf }) => (
                <svg
                  onClick={toPdf}
                  style={{ cursor: "pointer" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-filetype-pdf"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"
                  />
                </svg>
              )}
            </ReactToPdf>
          </div>
        </div>
      </div>
      <div className="invoice">
        <div className="tables">
          <MDBTable
            bordered
            borderColor="primary"
            style={{
              width: "50%",
              height: "50%",
              direction: "ltr",
              alignItems: "left",
            }}
          >
            <MDBTableBody align="left">
              <tr>
                <th
                  scope="col"
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Date AH
                </th>
                <td>
                  {new Intl.DateTimeFormat("ar-TN-u-ca-islamic", {
                    day: "numeric",
                    month: "long",
                    weekday: "long",
                    year: "numeric",
                  }).format(Date.now())}
                </td>
              </tr>
              <tr>
                <th
                  scope="col"
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Date AD
                </th>
                <td>{new Date().toLocaleDateString()}</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
          <MDBTable
            bordered
            borderColor="primary"
            style={{ width: "70%", direction: "ltr", alignItems: "left" }}
          >
            <MDBTableBody align="left">
              <tr>
                <th scope="col" style={{ backgroundColor: `${background}` }}>
                  TAX NUMBER
                </th>
                <td
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  300167174900003
                </td>
              </tr>
              <tr>
                <th
                  scope="col"
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Invoice No
                </th>
                <td>
                  MK-CR-{new Date().getMonth()}/{new Date().getFullYear()} -{" "}
                  {InvoiceNumber.next("005227")}
                </td>
              </tr>
              <tr>
                <th
                  scope="col"
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Invoice Date
                </th>
                <td>{new Date().toLocaleDateString()}</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
        <div className="tables">
          <MDBTable
            bordered
            borderColor="primary"
            style={{
              width: "50%",
              height: "50%",
              direction: "ltr",
              alignItems: "left",
            }}
          >
            <MDBTableBody align="left">
              <tr>
                <th
                  scope="col"
                  style={{
                    backgroundColor: "rgb(98, 195, 233)",
                    fontWeight: "bold",
                  }}
                >
                  Subject
                </th>
                <td>مكة المكرمة</td>
              </tr>
              <tr>
                <th
                  scope="col"
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Campus Name
                </th>
                <td>مجمع سكني العالمية</td>
              </tr>
            </MDBTableBody>
            <MDBTableBody align="left">
              <tr>
                <th
                  scope="col"
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Project Name
                </th>
                <td>كل المشاريع</td>
              </tr>
              <tr>
                <th
                  scope="col"
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Project No{" "}
                </th>
                <td></td>
              </tr>
            </MDBTableBody>
            <MDBTableBody align="left">
              <tr>
                <th
                  scope="col"
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Benefeciary Name
                </th>
                <td style={{ fontWeight: "bold", color: "crimson" }}>
                  A.B.C.D
                </td>
              </tr>
              <tr>
                <th
                  scope="col"
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Vendor Name
                </th>
                <td></td>
              </tr>
            </MDBTableBody>
          </MDBTable>
          <MDBTable
            bordered
            borderColor="primary"
            style={{ width: "70%", direction: "ltr", alignItems: "left" }}
          >
            <MDBTableBody align="left">
              <tr>
                <th
                  scope="col"
                  colSpan={2}
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Housing Entry Date
                </th>
                <td>{firstDay}</td>
              </tr>
              <tr>
                <th
                  scope="col"
                  colSpan={2}
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Housing Exit Date
                </th>
                <td>{lastDay}</td>
              </tr>
              <tr>
                <th
                  scope="col"
                  colSpan={2}
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Total Period Of Housing Per Days
                </th>
                <td>
                  {monthDays === 28
                    ? GrandTotal28
                    : monthDays === 30
                    ? GrandTotal30
                    : GrandTotal31}
                </td>
              </tr>
              <tr>
                <th
                  scope="col"
                  colSpan={2}
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Labor Monthly Average
                </th>
                <td>
                  {Math.floor(
                    monthDays === 28
                      ? GrandTotal28 / monthDays
                      : monthDays === 30
                      ? GrandTotal30 / monthDays
                      : GrandTotal31 / monthDays
                  )}
                </td>
              </tr>
            </MDBTableBody>
            <MDBTableBody align="left">
              <tr>
                <th scope="col"></th>
                <td
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Accommodation
                </td>
                <td>
                  {monthDays === 28
                    ? GrandTotal28 * 14
                    : monthDays === 30
                    ? GrandTotal30 * 14
                    : GrandTotal31 * 14}
                </td>
              </tr>
            </MDBTableBody>
            <MDBTableBody align="left">
              <tr>
                <th scope="col">Type Of Service Provided</th>
                <td
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Transportation
                </td>
                <td>
                  {monthDays === 28
                    ? GrandTotal28 * 14
                    : monthDays === 30
                    ? GrandTotal30 * 14
                    : GrandTotal31 * 14}
                </td>
              </tr>
            </MDBTableBody>
            <MDBTableBody align="left">
              <tr>
                <th scope="col"></th>
                <td
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Food
                </td>
                <td>
                  {monthDays === 28
                    ? GrandTotalFood28 * 16 + GrandTotalFood28 * 3
                    : monthDays === 30
                    ? GrandTotalFood30 * 16 + GrandTotalFood30 * 3
                    : GrandTotalFood31 * 16 + GrandTotalFood31 * 3}
                </td>
              </tr>
            </MDBTableBody>
            <MDBTableBody align="center">
              <tr>
                <th
                  scope="col"
                  colSpan={2}
                  style={{
                    backgroundColor: `${background}`,
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Invoice Total Amount
                </th>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  {monthDays === 28
                    ? GrandTotalFood28 * 16 +
                      GrandTotal28 * 3 +
                      GrandTotal28 * 14
                    : monthDays === 30
                    ? GrandTotalFood30 * 16 +
                      GrandTotal30 * 3 +
                      GrandTotal30 * 14
                    : GrandTotalFood31 * 16 +
                      GrandTotal31 * 3 +
                      GrandTotal31 * 14}
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
        <div className="center">
          <MDBTable
            bordered
            borderColor="primary"
            style={{
              width: "100%",
              height: "50%",
              padding: "0px",
              direction: "ltr",
              alignItems: "left",
            }}
          >
            <MDBTableBody align="center">
              <tr align="center" style={{ fontSize: "14px" }}>
                <th
                  style={{
                    backgroundColor: "white",
                    border: "0px #000",
                    borderStyle: "hidden solid solid hidden",
                  }}
                ></th>
                <th
                  style={{
                    backgroundColor: "white",
                    border: "0px #000",
                    borderStyle: "hidden solid solid hidden",
                  }}
                ></th>
                <th
                  style={{
                    backgroundColor: "white",
                    border: "0px #000",
                    borderStyle: "hidden solid solid hidden",
                  }}
                ></th>
                <th
                  style={{
                    backgroundColor: "white",
                    border: "0px #000",
                    borderStyle: "hidden solid solid hidden",
                  }}
                ></th>
                <th
                  style={{
                    backgroundColor: "white",
                    border: "0px #000",
                    borderStyle: "hidden solid solid hidden",
                  }}
                ></th>
                <th
                  style={{
                    backgroundColor: "white",
                    border: "0px #000",
                    borderStyle: "hidden solid solid hidden",
                  }}
                ></th>
                <th
                  style={{
                    backgroundColor: "white",
                    border: "0px #000",
                    borderStyle: "hidden solid solid hidden",
                  }}
                ></th>
                <th
                  style={{
                    backgroundColor: "white",
                    border: "0px #000",
                    borderStyle: "hidden solid solid hidden",
                  }}
                ></th>
                <th
                  style={{
                    backgroundColor: "white",
                    border: "0px #000",
                    borderStyle: "hidden solid solid hidden",
                  }}
                ></th>
                <th
                  style={{
                    backgroundColor: "white",
                    border: "0px #000",
                    borderStyle: "hidden solid solid hidden",
                  }}
                ></th>
                <th
                  style={{
                    backgroundColor: "white",
                    border: "0px #000",
                    borderStyle: "hidden solid solid hidden",
                  }}
                ></th>
                <th
                  colSpan={4}
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",
                  }}
                >
                  Value Of Service Provided
                </th>
              </tr>
              <tr align="center" style={{ fontSize: "14px" }}>
                <th
                  style={{
                    backgroundColor: "white",
                    border: "0px #000",
                    borderStyle: "hidden solid solid hidden",
                  }}
                ></th>
                <th
                  colSpan={10}
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  No.Of Labors Benefiting From The Services
                </th>
                <th
                  colSpan={4}
                  rowSpan={2}
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Accommodation
                </th>
              </tr>
              <tr align="center" style={{ fontSize: "14px" }}>
                <th
                  align="bottom"
                  rowSpan={2}
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                    border: "1px #333",
                    minWidth: "4rem",
                    verticalAlign: "middle",
                  }}
                >
                  Day
                </th>
                <th
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                  colSpan={4}
                >
                  Accommodation
                </th>
                <th
                  colSpan={3}
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Transportation
                </th>
                <th
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                  colSpan={3}
                >
                  Food
                </th>
              </tr>
              <tr style={{ fontSize: "14px" }}>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",
                  }}
                >
                  Eng.
                </td>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",
                  }}
                >
                  Forman
                </td>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",

                    whiteSpace: "pre-wrap",
                  }}
                >
                  Labor in building
                </td>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",

                    whiteSpace: "pre-wrap",
                  }}
                >
                  Labor in camps
                </td>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",
                  }}
                >
                  Eng.
                </td>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",

                    whiteSpace: "pre-wrap",
                  }}
                >
                  Labor & Forman
                </td>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",
                  }}
                >
                  Extra
                </td>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",
                  }}
                >
                  Regular
                </td>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",
                  }}
                >
                  Packing
                </td>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",
                  }}
                >
                  Extra
                </td>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",
                  }}
                >
                  Service Type
                </td>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",
                  }}
                >
                  No.
                </td>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",
                  }}
                >
                  S.Rt
                </td>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",
                  }}
                >
                  Total SR
                </td>
              </tr>
            </MDBTableBody>
            <MDBTableBody align="center">
              <tr style={{ fontSize: "14px" }}>
                <th scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 1
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countDayOne}</td>
                <td>0</td>
                <td>{countDayOne}</td>
                <td>#</td>
                <td>{countDayFoodOne}</td>
                <td>{countDayFoodOne * 3}</td>
                <td>#</td>
                <td align="left">Eng.</td>
                <td>0</td>
                <td>45</td>
                <td>0</td>
              </tr>
              <tr style={{ fontSize: "14px" }}>
                <th scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 2
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDayTwo}</td>
                <td>0</td>
                <td>{countTotalDayTwo}</td>
                <td>#</td>
                <td>{countTotalDayFoodTwo}</td>
                <td>{countTotalDayFoodTwo * 3}</td>
                <td>#</td>
                <td align="left">Forman</td>
                <td>0</td>
                <td>20</td>
                <td>0</td>
              </tr>
              <tr style={{ fontSize: "14px" }}>
                <th scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 3
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay3}</td>
                <td>0</td>
                <td>{countTotalDay3}</td>
                <td>#</td>
                <td>{countTotalDayFood3}</td>
                <td>{countTotalDayFood3 * 3}</td>
                <td>#</td>
                <td
                  align="left"
                  style={{
                    whiteSpace: "pre-wrap",
                    fontSize: "13px",
                  }}
                >
                  Labor in buiding
                </td>
                <td>0</td>
                <td>16</td>
                <td>0</td>
              </tr>
              <tr style={{ fontSize: "14px" }}>
                <th scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 4
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay4}</td>
                <td>0</td>
                <td>{countTotalDay4}</td>
                <td>#</td>
                <td>{countTotalDayFood4}</td>
                <td>{countTotalDayFood4 * 3}</td>
                <td>#</td>
                <td align="left" style={{ whiteSpace: "pre-wrap" }}>
                  Labor in camp
                </td>
                <td>
                  {monthDays === 28
                    ? GrandTotal28
                    : monthDays === 30
                    ? GrandTotal30
                    : GrandTotal31}
                </td>
                <td>14</td>
                <td>
                  {monthDays === 28
                    ? GrandTotal28 * 14
                    : monthDays === 30
                    ? GrandTotal30 * 14
                    : GrandTotal31 * 14}
                </td>
              </tr>
              <tr style={{ fontSize: "14px" }}>
                <th scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 5
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay5}</td>
                <td>0</td>
                <td>{countTotalDay5}</td>
                <td>#</td>
                <td>{countTotalDayFood5}</td>
                <td>{countTotalDayFood5 * 3}</td>
                <td>#</td>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",
                  }}
                  colSpan={3}
                >
                  Total
                </td>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",
                  }}
                >
                  {monthDays === 28
                    ? GrandTotal28 * 14
                    : monthDays === 30
                    ? GrandTotal30 * 14
                    : GrandTotal31 * 14}
                </td>
              </tr>
              <tr style={{ fontSize: "14px" }}>
                <th scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 6
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay6}</td>
                <td>0</td>
                <td>{countTotalDay6}</td>
                <td>#</td>
                <td>{countTotalDayFood6}</td>
                <td>{countTotalDayFood6 * 3}</td>
                <td>#</td>
                <td
                  colSpan={4}
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Transportation
                </td>
              </tr>
              <tr style={{ fontSize: "14px" }}>
                <th scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 7
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay7}</td>
                <td>0</td>
                <td>{countTotalDay7}</td>
                <td>#</td>
                <td>{countTotalDayFood7}</td>
                <td>{countTotalDayFood7 * 3}</td>
                <td>#</td>
                <td align="left">Eng.</td>
                <td>0</td>
                <td>35</td>
                <td>0</td>
              </tr>
              <tr style={{ fontSize: "13px" }}>
                <th scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 8
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay8}</td>
                <td>0</td>
                <td>{countTotalDay8}</td>
                <td>#</td>
                <td>{countTotalDayFood8}</td>
                <td>{countTotalDayFood8 * 3}</td>
                <td>#</td>
                <td align="left">Labor & Forman</td>
                <td>
                  {monthDays === 28
                    ? GrandTotal28
                    : monthDays === 30
                    ? GrandTotal30
                    : GrandTotal31}
                </td>
                <td>14</td>
                <td>
                  {monthDays === 28
                    ? GrandTotal28 * 14
                    : monthDays === 30
                    ? GrandTotal30 * 14
                    : GrandTotal31 * 14}
                </td>
              </tr>
              <tr style={{ fontSize: "14px" }}>
                <th scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 9
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay9}</td>
                <td>0</td>
                <td>{countTotalDay9}</td>
                <td>#</td>
                <td>{countTotalDayFood9}</td>
                <td>{countTotalDayFood9 * 3}</td>
                <td>#</td>
                <td align="left" style={{ whiteSpace: "pre-wrap" }}>
                  Extra
                </td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "7px" }}>
                <th style={{ fontSize: "13px", padding: "7px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 10
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay10}</td>
                <td>0</td>
                <td>{countTotalDay10}</td>
                <td>#</td>
                <td>{countTotalDayFood10}</td>
                <td>{countTotalDayFood10 * 3}</td>
                <td>#</td>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",
                  }}
                  colSpan={3}
                >
                  Total
                </td>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",
                  }}
                >
                  {monthDays === 28
                    ? GrandTotal28 * 14
                    : monthDays === 30
                    ? GrandTotal30 * 14
                    : GrandTotal31 * 14}
                </td>
              </tr>
              <tr style={{ fontSize: "13px" }}>
                <th scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 11
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay11}</td>
                <td>0</td>
                <td>{countTotalDay11}</td>
                <td>#</td>
                <td>{countTotalDayFood11}</td>
                <td>{countTotalDayFood11 * 3}</td>
                <td>#</td>
                <td
                  colSpan={4}
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Food
                </td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "7px" }}>
                <th style={{ fontSize: "13px", padding: "7px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 12
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay12}</td>
                <td>0</td>
                <td>{countTotalDay12}</td>
                <td>#</td>
                <td>{countTotalDayFood12}</td>
                <td>{countTotalDayFood12 * 3}</td>
                <td>#</td>
                <td align="left">Regular</td>
                <td>
                  {monthDays === 28
                    ? GrandTotalFood28
                    : monthDays === 30
                    ? GrandTotalFood30
                    : GrandTotalFood31}
                </td>
                <td>16</td>
                <td>
                  {monthDays === 28
                    ? GrandTotalFood28 * 16
                    : monthDays === 30
                    ? GrandTotalFood30 * 16
                    : GrandTotalFood31 * 16}
                </td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "7px" }}>
                <th style={{ fontSize: "13px", padding: "7px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 13
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay13}</td>
                <td>0</td>
                <td>{countTotalDay13}</td>
                <td>#</td>
                <td>{countTotalDayFood13}</td>
                <td>{countTotalDayFood13 * 3}</td>
                <td>#</td>
                <td align="left">Packing</td>
                <td>
                  {monthDays === 28
                    ? GrandTotalFood28 * 3
                    : monthDays === 30
                    ? GrandTotalFood30 * 3
                    : GrandTotalFood31 * 3}
                </td>
                <td>1</td>
                <td>
                  {monthDays === 28
                    ? GrandTotalFood28 * 3
                    : monthDays === 30
                    ? GrandTotalFood30 * 3
                    : GrandTotalFood31 * 3}
                </td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "7px" }}>
                <th style={{ fontSize: "13px", padding: "7px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 14
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay14}</td>
                <td>0</td>
                <td>{countTotalDay14}</td>
                <td>#</td>
                <td>{countTotalDayFood14}</td>
                <td>{countTotalDayFood14 * 3}</td>
                <td>#</td>
                <td align="left">Extra</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "7px" }}>
                <th style={{ fontSize: "13px", padding: "7px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 15
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay15}</td>
                <td>0</td>
                <td>{countTotalDay15}</td>
                <td>#</td>
                <td>{countTotalDayFood15}</td>
                <td>{countTotalDayFood15 * 3}</td>
                <td>#</td>
                <td
                  colSpan={3}
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",
                  }}
                >
                  Total
                </td>
                <td
                  style={{
                    backgroundColor: `${backgroundYellow}`,
                    fontWeight: "bold",
                  }}
                >
                  {monthDays === 28
                    ? GrandTotalFood28 * 16 + GrandTotalFood28 * 3
                    : monthDays === 30
                    ? GrandTotalFood30 * 16 + GrandTotalFood30 * 3
                    : GrandTotalFood31 * 16 + GrandTotalFood31 * 3}
                </td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "7px" }}>
                <th style={{ fontSize: "13px", padding: "7px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 16
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay16}</td>
                <td>0</td>
                <td>{countTotalDay16}</td>
                <td>#</td>
                <td>{countTotalDayFood16}</td>
                <td>{countTotalDayFood16 * 3}</td>
                <td>#</td>
                <td
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  Grand Total
                </td>
                <td
                  colSpan={3}
                  style={{
                    backgroundColor: `${background}`,
                    fontWeight: "bold",
                  }}
                >
                  {monthDays === 28
                    ? GrandTotalFood28 * 16 +
                      GrandTotal28 * 3 +
                      GrandTotal28 * 14
                    : monthDays === 30
                    ? GrandTotalFood30 * 16 +
                      GrandTotal30 * 3 +
                      GrandTotal30 * 14
                    : GrandTotalFood31 * 16 +
                      GrandTotal31 * 3 +
                      GrandTotal31 * 14}
                </td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "7px" }}>
                <th style={{ fontSize: "13px", padding: "7px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 17
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay17}</td>
                <td>0</td>
                <td>{countTotalDay17}</td>
                <td>#</td>
                <td>{countTotalDayFood17}</td>
                <td>{countTotalDayFood17 * 3}</td>
                <td>#</td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "7px" }}>
                <th style={{ fontSize: "13px", padding: "7px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 18
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay18}</td>
                <td>0</td>
                <td>{countTotalDay18}</td>
                <td>#</td>
                <td>{countTotalDayFood18}</td>
                <td>{countTotalDayFood18 * 3}</td>
                <td style={{ borderRight: "1px solid #333" }}>#</td>
                <td
                  style={{
                    fontSize: "16px",
                    verticalAlign: "middle",
                    border: "hidden",
                  }}
                  colSpan={4}
                >
                  Signature{" "}
                </td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "7px" }}>
                <th style={{ fontSize: "13px", padding: "7px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 19
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay19}</td>
                <td>0</td>
                <td>{countTotalDay19}</td>
                <td>#</td>
                <td>{countTotalDayFood19}</td>
                <td>{countTotalDayFood19 * 3}</td>
                <td>#</td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "5px" }}>
                <th style={{ fontSize: "13px", padding: "7px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 20
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay20}</td>
                <td>0</td>
                <td>{countTotalDay20}</td>
                <td>#</td>
                <td>{countTotalDayFood20}</td>
                <td>{countTotalDayFood20 * 3}</td>
                <td>#</td>
                <td
                  align="left"
                  style={{
                    border: "hidden",

                    whiteSpace: "pre-wrap",
                  }}
                >
                  Prepared-By:
                </td>
                <td
                  align="center"
                  colSpan={3}
                  style={{ border: "hidden", fontSize: "14px" }}
                >
                  حمدان الحداد
                </td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "7px" }}>
                <th style={{ fontSize: "13px", padding: "7px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 21
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay21}</td>
                <td>0</td>
                <td>{countTotalDay21}</td>
                <td>#</td>
                <td>{countTotalDayFood21}</td>
                <td>{countTotalDayFood21 * 3}</td>
                <td>#</td>
                <td align="left" style={{ border: "hidden" }}>
                  Signature
                </td>
                <td colSpan={3} style={{ border: "hidden" }}>
                  ..........................................
                </td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "5px" }}>
                <th style={{ fontSize: "13px", padding: "7px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 22
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay22}</td>
                <td>0</td>
                <td>{countTotalDay22}</td>
                <td>#</td>
                <td>{countTotalDayFood22}</td>
                <td>{countTotalDayFood22 * 3}</td>
                <td>#</td>
                <td align="left" style={{ border: "hidden" }}>
                  {" "}
                  Data Administrative :
                </td>
                <td colSpan={3} style={{ border: "hidden", fontSize: "14px" }}>
                  أ/هاني يماني
                </td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "7px" }}>
                <th style={{ fontSize: "13px", padding: "7px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 23
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay23}</td>
                <td>0</td>
                <td>{countTotalDay23}</td>
                <td>#</td>
                <td>{countTotalDayFood23}</td>
                <td>{countTotalDayFood23 * 3}</td>
                <td>#</td>
                <td align="left" style={{ border: "hidden" }}>
                  Signature
                </td>
                <td colSpan={3} style={{ border: "hidden" }}>
                  ..........................................
                </td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "5px" }}>
                <th style={{ fontSize: "13px", padding: "5px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 24
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay24}</td>
                <td>0</td>
                <td>{countTotalDay24}</td>
                <td>#</td>
                <td>{countTotalDayFood24}</td>
                <td>{countTotalDayFood24 * 3}</td>
                <td>#</td>
                <td
                  align="left"
                  style={{
                    border: "hidden",
                    fontSize: "13px",

                    wordWrap: "normal",
                  }}
                >
                  {" "}
                  Camp Administrative :
                </td>
                <td colSpan={3} style={{ border: "hidden", fontSize: "14px" }}>
                  أ/محمد زيني
                </td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "7px" }}>
                <th style={{ fontSize: "13px", padding: "7px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 25
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay25}</td>
                <td>0</td>
                <td>{countTotalDay25}</td>
                <td>#</td>
                <td>{countTotalDayFood25}</td>
                <td>{countTotalDayFood25 * 3}</td>
                <td>#</td>
                <td align="left" style={{ border: "hidden" }}>
                  Signature
                </td>
                <td colSpan={3} style={{ border: "hidden" }}>
                  ..........................................
                </td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "5px" }}>
                <th style={{ fontSize: "13px", padding: "7px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 26
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay26}</td>
                <td>0</td>
                <td>{countTotalDay26}</td>
                <td>#</td>
                <td>{countTotalDayFood26}</td>
                <td>{countTotalDayFood26 * 3}</td>
                <td>#</td>
                <td align="left" style={{ border: "hidden" }}>
                  Project Administrative :
                </td>
                <td colSpan={3} style={{ border: "hidden", fontSize: "14px" }}>
                  أ/أحمد إسماعيل
                </td>
              </tr>
              <tr>
                <th scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 27
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay27}</td>
                <td>0</td>
                <td>{countTotalDay27}</td>
                <td>#</td>
                <td>{countTotalDayFood27}</td>
                <td>{countTotalDayFood27 * 3}</td>
                <td>#</td>
                <td align="left" style={{ border: "hidden" }}>
                  Signature
                </td>
                <td colSpan={3} style={{ border: "hidden" }}>
                  ..........................................
                </td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "2px" }}>
                <th style={{ fontSize: "13px", padding: "5px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 28
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{countTotalDay28}</td>
                <td>0</td>
                <td>{countTotalDay28}</td>
                <td>#</td>
                <td>{countTotalDayFood28}</td>
                <td>{countTotalDayFood28 * 3}</td>
                <td>#</td>
                <td
                  align="left"
                  style={{
                    border: "hidden",
                    fontSize: "13px",
                    padding: "0",

                    wordWrap: "normal",
                  }}
                >
                  {" "}
                  Project Manager :
                </td>
                <td colSpan={3} style={{ border: "hidden", fontSize: "14px" }}>
                  م/إسماعيل صالحة
                </td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "5px" }}>
                <th style={{ fontSize: "13px", padding: "5px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 29
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{monthDays === 28 ? 0 : countTotalDay29}</td>
                <td>0</td>
                <td>{monthDays === 28 ? 0 : countTotalDay29}</td>
                <td>#</td>
                <td>{monthDays === 28 ? 0 : countTotalDayFood29}</td>
                <td>{monthDays === 28 ? 0 : countTotalDayFood29 * 3}</td>
                <td>#</td>
                <td align="left" style={{ border: "hidden" }}>
                  Signature
                </td>
                <td colSpan={3} style={{ border: "hidden" }}>
                  ..........................................
                </td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "5px" }}>
                <th style={{ fontSize: "13px", padding: "5px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 30
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{monthDays === 28 ? 0 : countTotalDay30}</td>
                <td>0</td>
                <td>{monthDays === 28 ? 0 : countTotalDay30}</td>
                <td>#</td>
                <td>{monthDays === 28 ? 0 : countTotalDayFood30}</td>
                <td>{monthDays === 28 ? 0 : countTotalDayFood30 * 3}</td>
                <td>#</td>
              </tr>
              <tr style={{ fontSize: "13px", padding: "5px" }}>
                <th style={{ fontSize: "13px", padding: "5px" }} scope="col">
                  {getMonthShortName(new Date().getMonth() + 1)} - 31
                </th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>
                  {monthDays === 28 || monthDays === 30 ? 0 : countTotalDay31}
                </td>
                <td>0</td>
                <td>
                  {monthDays === 28 || monthDays === 30 ? 0 : countTotalDay31}
                </td>
                <td>#</td>
                <td>
                  {monthDays === 28 || monthDays === 30
                    ? 0
                    : countTotalDayFood31}
                </td>
                <td>
                  {monthDays === 28 || monthDays === 30
                    ? 0
                    : countTotalDayFood31 * 3}
                </td>
                <td>#</td>
                <td colSpan={4} style={{ border: "hidden" }}></td>
              </tr>
              <tr
                style={{ backgroundColor: `${background}`, fontWeight: "bold" }}
              >
                <th scope="col">TOTAL</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>
                  {monthDays === 28
                    ? GrandTotal28
                    : monthDays === 30
                    ? GrandTotal30
                    : GrandTotal31}
                </td>
                <td>0</td>
                <td>
                  {monthDays === 28
                    ? GrandTotal28
                    : monthDays === 30
                    ? GrandTotal30
                    : GrandTotal31}
                </td>
                <td>#</td>
                <td>
                  {monthDays === 28
                    ? GrandTotalFood28
                    : monthDays === 30
                    ? GrandTotalFood30
                    : GrandTotalFood31}
                </td>
                <td>
                  {monthDays === 28
                    ? GrandTotalFood28 * 3
                    : monthDays === 30
                    ? GrandTotalFood30 * 3
                    : GrandTotalFood31 * 3}
                </td>
                <td>#</td>
                <td
                  colSpan={4}
                  style={{ border: "hidden", backgroundColor: "white" }}
                ></td>
              </tr>
            </MDBTableBody>
          </MDBTable>
          <p style={{ fontSize: "16px", height: "20px", color: "crimson" }}>
            إذا لم يصلنا ردكم خلال سبعة أيام من تاريخ الاستلام يكون ذلك بما هو
            مسجل بالمستخلص.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InvoiceAlameia;
