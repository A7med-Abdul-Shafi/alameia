import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Reportharamain from "../../Components/reports/Reportharamain";
import "./reportduealameia.scss";

const Reportdueharamain = () => {
    return (
        <div className="Report">
            <Sidebar />
            <div className="ReportContainer">
                <Navbar />
                <Reportharamain />
            </div>
        </div>
    )
}

export default Reportdueharamain;