import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Reportewaab from "../../Components/reports/Reportewaab";
import "./reportduealameia.scss";

const Reportdueewaab = () => {
    return (
        <div className="Report">
            <Sidebar />
            <div className="ReportContainer">
                <Navbar />
                <Reportewaab />
            </div>
        </div>
    )
}

export default Reportdueewaab;