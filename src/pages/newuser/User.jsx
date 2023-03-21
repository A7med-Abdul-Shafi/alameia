import "./new.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Newuser from "../../Components/newuser/Newuser";
const User = () => {

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <Newuser />
        </div>
      </div>
    </div>
  );
};

export default User;