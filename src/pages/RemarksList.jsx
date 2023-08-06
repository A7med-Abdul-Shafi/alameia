import React from 'react'
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import RemarksList from '../Components/RemarksList';

const Remarks = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <div className="featured" style={{display: "block"}}>
                <RemarksList />
                </div>
            </div>
        </div>
    )
}

export default Remarks