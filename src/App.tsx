import MonthlyStats from "./ui/MonthlyStats";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import MutipleLineChart from "./ui/MultipleLineChart";
import SingleBarChart from "./ui/SingleBarChart";
import MultipleBarChart from "./ui/MultipleBarChart";
import StackedBarChart from "./ui/StackedChart";

function App() {
  return (
    <>
      <div className="flex gap-12 p-5">
        <SideBar />
        <div className="grid gap-[30px] pb-[30px] h-fit w-full">
          <NavBar />
          <MonthlyStats />
          <div className="flex gap-[26px]">
            <MutipleLineChart />
            <SingleBarChart />
          </div>

          <div className="flex gap-[26px]">
            <MultipleBarChart />
            <StackedBarChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
