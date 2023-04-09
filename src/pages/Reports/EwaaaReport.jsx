import "./style.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import InvoiceEwaaa from "../../Components/reports/Haramain2/InvoiceEwaaa";   

const EwaaaReport = () => {
    return ( 
        <div className="list">   
        <Sidebar/>
        <div className="listContainer">
            <Navbar/>
            <InvoiceEwaaa/>
        </div>
        </div>
    )
}

export default EwaaaReport;