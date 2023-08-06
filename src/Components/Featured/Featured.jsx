import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import api from "../../customApi";

function Featured() {
  const [countA, setCountA] = useState([]);
  useEffect(() => {
    const countAlameia = async () => {
      await axios.get(`${api}/haramain/all`).then((response) => {   
        setCountA(response.data);
      });
    };
    countAlameia();
  }, []);

/////////////////////////////////////////////////// rooms
  const [roomsA, setRoomsA] = useState([]);
  useEffect(() => {
    const countAlameia = async () => {
      await axios.get(`${api}/haramainrooms/alllist`).then((response) => {   
        setRoomsA(response.data);
      });
    };
    countAlameia();
  }, []);

  
  const length = countA.length
  
  

  const allCapacity = roomsA.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.capacity;
  }, 0);
  
  /////////////////////////////////////////////
  const reportData = countA.map(item => [item.nationality, item.project])
  if (!reportData || reportData.length === 0) {
    return <p>جاري إستدعاء البيانات ...</p>
  }
const allOfProjects = Array.from(new Set(reportData.map(([_, project]) => project)));

// use Array.reduce to count the number of each nationality and project combination
const counts = reportData.reduce((acc, [nationality, project]) => {
  if (!acc[nationality]) {
    acc[nationality] = {};
  }
  if (!acc[nationality][project]) {
    acc[nationality][project] = 0;
  }
  acc[nationality][project]++; 
  return acc;
}, {});

// Create array of all nationalities
const nationalities = Object.keys(counts);

// Calculate row totals
const rowTotals = {};
nationalities.forEach((nationality) => {
  rowTotals[nationality] = allOfProjects.reduce((acc, project) => {
    return acc + (counts[nationality][project] || 0);
  }, 0);
});

// Calculate column totals
const colTotals = allOfProjects.reduce((acc, project) => {
  acc[project] = nationalities.reduce((acc, nationality) => {
    return acc + (counts[nationality][project] || 0);
  }, 0);
  return acc;
}, {});

// Calculate grand total
const grandTotal = nationalities.reduce((acc, nationality) => {
  return acc + rowTotals[nationality];
}, 0);



  
  ///////////////////////////////////////////
  
  const nationality = countA?.map(one => one.nationality)
  // const profession = countA?.filter(item => item.housing === housing).map(one => one.profession)
  // const allprofessions = countA?.map(one => one.profession)
  const status = countA?.map(one => one.out_reason)
  const allStatus = countA?.map(one => one.out_reason)

  const allNationalities = countA?.map(one => one.nationality)
  const projects = countA?.map(one => one.project)
  const allProjects = countA?.map(one => one.project)
  const countall = countA?.length 
  /////////////////////////////////////////////////// 
  const result = nationality.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }   
    return acc;
  }, {});
  const result2 = projects.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

  const result3 = allNationalities.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

  const result4 = allProjects.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

  const result7 = status.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

  const result8 = allStatus.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

  result7['علي رأس العمل'] = result7['null'];
delete result7['null'];

result8['علي رأس العمل'] = result8['null'];
delete result8['null'];

  //////////////////////////////////////////////////
  const headers3 = Object.keys(result3);
  const headers8 = Object.keys(result8);
  const case1 = allCapacity - length
  const case3 = Math.floor((length / allCapacity) * 100)
  return (
    <div className="content">
      <div className="featured">
        <div className="top">
          <span className="title" style={{color:"green", fontSize:"14px"}}>السكن</span>
          <span className="title" style={{color:"green", fontSize:"14px"}}> </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </div>
        <div className="center" >
          <div className="bottom">
            <div className="featuredChart">
              <CircularProgressbar
                value={case3 }
                text={case3 + "%"}
                strokeWidth={5}
              />
            </div>
              <p className="title">نسبة التسكين</p>
            <p className="amount">الطاقة الإستيعابية : {allCapacity}</p>
            <div className="summary">
              <div className="item">
                <div className="itemTitle"> أعداد السكن</div>
                <div className="itemResult positive">
                  {/* <KeyboardArrowUpOutlinedIcon fontSize="small" /> */}
                  <div className="resultAmount">{length}</div>
                </div>
              </div>
              <div className="item">
                <div className="itemTitle"> عدد الفراغات</div>
                <div className="itemResult positive">
                  {/* <div className="resultAmount">{hcapacity - countall}</div> */}
                  <div className="resultAmount">{case1}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="content" style={{display:"block"}}>
          <span style={{color:"green", fontSize:"14px"}}>الجنسيات :</span>
            {
            <table className="table">
            <thead>
              <tr>
                {headers3.map(header => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {headers3.map(header => (
                  <td key={header}>{result3[header]}</td> 
                ))}
              </tr>
            </tbody>
            </table>
            
            }
  
          <span style={{color:"green", fontSize:"14px", marginBottom:"5px"}}>الحالة :</span>
            {
            <table className="table">
            <thead>
              <tr>
                {headers8.map(header => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {headers8.map(header => (
                  <td key={header}>{result8[header]}</td> 
                ))}
              </tr>
            </tbody>
            </table>
            
            }
            
            <span style={{color:"green", fontSize:"14px"}}>تقرير الجنسيات مع المشاريع :</span>
            <span style={{color:"green", fontSize:"14px", float:"left"}}> عدد المشاريع في السكن: {allOfProjects.length} مشروع</span>
            <table className="table" style={{marginTop:"5px"}}>
              <thead>
                <tr>
                  <th>المشروع</th>
                  {nationalities.map((nationality) => (
                    <th key={nationality}>{nationality}</th>
                  ))}
                  <th>المجموع</th>
                </tr>
              </thead>
              <tbody >
                {allOfProjects.map((project) => (
                  <tr key={project}>
                    <td style={{color:"green"}}>{project}</td>
                    {nationalities.map((nationality) => (
                      <td key={`${nationality}-${project}`}>{counts[nationality][project] || 0}</td>
                    ))}
                    <td>{colTotals[project]}</td>
                  </tr>
                ))}
                <tr style={{backgroundColor:"#55c591", fontWeight:"bold"}}>
                  <td >المجموع</td>
                  {nationalities.map((nationality) => (
                    <td key={`${nationality}-total`} >{rowTotals[nationality]}</td>
                  ))}
                  <td >{grandTotal}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
