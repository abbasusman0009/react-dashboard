import { Dashboards } from "../../component/Dashboards"
import { Header } from "../../component/Header"
import { Sidebar } from "../../component/Sidebar"

export const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div>
        <Header/>
        <div className="w-[1000px] h-[1000px] rounded-md mt-32 ml-4 bg-[#F6F6F6]">
          <p className="ml-4 pt-4 text-[#158B51] text-[20px]">Dashboard</p>
          <Dashboards/>
        </div>
      </div>
    </div>
  )
}
