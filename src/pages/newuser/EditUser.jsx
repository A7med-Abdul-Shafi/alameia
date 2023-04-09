import "./new.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import UpdateUser from "../../Components/users/UpdateUser";  
const EditUser = () => {
    return (
        <div className="new">
        <Sidebar />
        <div className="newContainer">
            <Navbar />
            <div className="top">
            <UpdateUser />
            </div>
        </div>
        </div>
    );
};

export default EditUser;
