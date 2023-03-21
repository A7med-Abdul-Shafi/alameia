import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import MaintainenceActions from "../../Components/Maintainence/MaintainenceActions";

const Userlist = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <MaintainenceActions />
            </div>
        </div>
    )
}

export default Userlist;