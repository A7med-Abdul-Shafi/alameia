import "./List.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Tabe1 from "../../Components/tabs/Tabe1";

const Liste1 = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Tabe1 />
            </div>
        </div>
    )
}

export default Liste1;