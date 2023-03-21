import "./style.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import InvoiceReport from "../../Components/reports/Ewaaa/InvoiceReport";

const EwaaaReport = () => {
    return (
        <div className="list">
        <Sidebar/>
        <div className="listContainer">
            <Navbar/>
            <InvoiceReport/>
        </div>
        </div>
    )
}

export default EwaaaReport;