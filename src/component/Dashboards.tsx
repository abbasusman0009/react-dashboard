import { Card } from "./Card"
import Car from '../assets/images/Car.svg'
import Passengers from '../assets/images/Passenger.svg'
import Stocks from '../assets/images/Stocks Growth.svg'
import Chart from "./Chart"
import { DriversList } from "./DriversList"
export const Dashboards = () => {
  return (
    <div>
      <div className="flex  space-x-6 justify-around mx-4">
        <Card record={{ride:'Total ride', image: Car}} num={100} />
        <Card record={{ride:'Total User', image:Passengers}} num={100}/>
        <Card record={{ride:'Total Reveneu', image:Stocks}} num={100}/>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Chart />
        </div>
        <div className="col-span-1">
          <DriversList />
        </div>
      </div>
      <div className="grid grid-cols-3 space-y-4">
        <div className="col-span-2">
          {/* <Chart /> */}
        </div>
        <div className="col-span-1">
          <DriversList />
        </div>
      </div>
    </div>
  )
}
