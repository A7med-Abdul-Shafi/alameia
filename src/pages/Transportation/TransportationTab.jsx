import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import TransportTab from "../../Components/Transportation/TransportTab";
import "./food.scss"
const Transportation = () => {
    return (
        <div className="new">
        <Sidebar />
        <div className="newContainer">
            <Navbar />
            <div className="top">
            <TransportTab />
            </div>
        </div>
        </div>
    );
};

export default Transportation;