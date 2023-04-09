import "./style.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import InvoiceHaramain from "../../Components/reports/Haramain2/InvoiceHaramain";

const HaramainReport = () => {
    return (
        <div className="list">
        <Sidebar/>
        <div className="listContainer">
            <Navbar/>
            <InvoiceHaramain/>
        </div>
        </div>
    )
}

export default HaramainReport;