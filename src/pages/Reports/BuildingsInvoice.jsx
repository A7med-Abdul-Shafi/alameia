import "./style.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import InvoiceBuildingsTab from "../../Components/reports/Haramain2/InvoiceBuildingsTab";

const EwaabReport = () => {
    return (
        <div className="list">
        <Sidebar/>
        <div className="listContainer">    
            <Navbar/>
            <InvoiceBuildingsTab/>
        </div>
        </div>
    )
}

export default EwaabReport;