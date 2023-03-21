import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Reportalameia from "../../Components/reports/Reportalameia";
import "./reportduealameia.scss";

const Reportduealameia = () => {
    return (
        <div className="Report">
            <Sidebar />
            <div className="ReportContainer">
                <Navbar />
                <Reportalameia />
            </div>
        </div>
    )
}

export default Reportduealameia;