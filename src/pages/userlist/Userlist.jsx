import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import InteractiveList from "../../Components/users/InteractiveList";

const Userlist = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <InteractiveList />
            </div>
        </div>
    )
} 

export default Userlist;