import "./style.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import InvoiceEwaab from "../../Components/reports/Haramain2/InvoiceEwaab";

const EwaabReport = () => {
    return (
        <div className="list">
        <Sidebar/>
        <div className="listContainer">
            <Navbar/>
            <InvoiceEwaab/>
        </div>
        </div>
    )
}

export default EwaabReport;