import "./chart.scss";
import { ResponsiveContainer } from "recharts";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../../customApi";
function ChartEwaab({ aspect }) {
  const [countEgypt, setCountEgypt] = useState([]);
  useEffect(() => {
    const countMasri = async () => {
      await axios.get(`${api}/ewaab/egypt`).then((response) => {
        setCountEgypt(response.data.length);
      });
    };
    countMasri();
  }, []);
  const [countYaman, setCountYaman] = useState([]);
  useEffect(() => {
    const countYamani = async () => {
      await axios.get(`${api}/ewaab/yaman`).then((response) => {
        setCountYaman(response.data.length);
      });
    };
    countYamani();
  }, []);
  const [countPakistan, setCountPakistan] = useState([]);
  useEffect(() => {
    const countPakistani = async () => {
      await axios.get(`${api}/ewaab/pakistan`).then((response) => {
        setCountPakistan(response.data.length);
      });
    };
    countPakistani();
  }, []);
  const [countIndonesia, setCountIndonesia] = useState([]);
  useEffect(() => {
    const countIndonesi = async () => {
      await axios.get(`${api}/ewaab/indonesia`).then((response) => {
        setCountIndonesia(response.data.length);
      });
    };
    countIndonesi();
  }, []);
  const [countIndia, setCountIndia] = useState([]);
  useEffect(() => {
    const countIndi = async () => {
      await axios.get(`${api}/ewaab/india`).then((response) => {
        setCountIndia(response.data.length);
      });
    };
    countIndi();
  }, []);
  const [countBangladesh, setCountBangladesh] = useState([]);
  useEffect(() => {
    const countBangladeshi = async () => {
      await axios.get(`${api}/ewaab/bangladesh`).then((response) => {
        setCountBangladesh(response.data.length);
      });
    };
    countBangladeshi();
  }, []);
  const [countPhilipin, setCountPhilipin] = useState([]);
  useEffect(() => {
    const countPhilipini = async () => {
      await axios.get(`${api}/ewaab/philipin`).then((response) => {
        setCountPhilipin(response.data.length);
      });
    };
    countPhilipini();
  }, []);
  const data = [
    { name: "مصر", Total: countEgypt },
    { name: "اليمن", Total: countYaman },
    { name: "باكستان", Total: countPakistan },
    { name: "الهند", Total: countIndia },
    { name: "إندونيسيا", Total: countIndonesia },
    { name: "الفلبين", Total: countPhilipin },
    { name: "بنجلاديش", Total: countBangladesh },
  ];
  return (
    <div className="chart">
      <div className="title">إيواء 2 :</div>
      <ResponsiveContainer width="100%" height="85%" aspect={aspect}>
        <AreaChart
          width={700}
          height={250}
          data={data}
          margin={{ top: 5, right: 10, left: -35, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="grey" fontWeight={500} />
          <YAxis />
          <CartesianGrid
            strokeDasharray="3 3"
            className="chartGrid"
            stroke="rgb(228, 225, 225"
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="api(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartEwaab;
