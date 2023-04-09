import "./style.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import InvoiceAlameia from "../../Components/reports/Haramain2/InvoiceAlameia";

const AlameiaReport = () => { 
    return (
        <div className="list">                       
        <Sidebar/>
        <div className="listContainer">
            <Navbar/>
            <InvoiceAlameia/>
        </div>      
        </div>
    )
}

export default AlameiaReport;