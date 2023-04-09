import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar";
import "./dashboard.scss";
import Widget from "../../Components/Widgets/Widget";
import Widget2 from "../../Components/Widgets/Widget2";
import Featured from "../../Components/Featured/Featured";
import Chart from "../../Components/Chart/Chart";
import Table from "../../Components/Table/Table";
import Charth from "../../Components/Chart/Charth";
import Charte1 from "../../Components/Chart/Charte1";
import Charte2 from "../../Components/Chart/Charte2";
function Dashboard () {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget />
        </div>
        <div className="buildingWidgetS">
          <Widget2 />
        </div>
        <div className="charts">
          <Featured />
          {/* <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> */}
        </div>
        <div className="charts">
          <Charth />
          <Chart />
        </div>
        <div className="charts">
          <Charte1 />
          <Charte2 />
        </div>
        <div className="listContainer">
          <div className="listTitle">بيانات التسكين: جميع السكنات</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;