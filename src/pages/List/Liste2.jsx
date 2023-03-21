import "./List.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Tabe2 from "../../Components/tabs/Tabe2";

const Liste2 = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Tabe2 />
            </div>
        </div>
    )
}

export default Liste2;