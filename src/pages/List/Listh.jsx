import "./List.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Tabh from "../../Components/tabs/Tabh";

const Listh = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Tabh/>
      </div>
    </div>
  )
}

export default Listh;