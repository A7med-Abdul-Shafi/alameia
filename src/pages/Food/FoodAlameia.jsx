import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import FoodTab from "../../Components/Food/FoodTab";
import "./food.scss"
const Food = () => {
    return (
        <div className="new">
        <Sidebar />
        <div className="newContainer">
            <Navbar />
            <div className="top">
            <FoodTab />
            </div>
        </div>
        </div>
    );
};

export default Food;