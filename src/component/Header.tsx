import React from "react"
import userIcon from "../assets/images/userIcon.svg"
import { MdNotifications } from "react-icons/md"
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
      <div className="fixed bg-white z-40 left-[273px] flex justify-around items-center right-0 shadow-lg max-h-20 p-4">
       <div className="w-full max-w-sm min-w-[200px]">
          <div className="relative">
            <input
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
             placeholder="Search" 
            />
            <button
              className="absolute top-1 right-1 flex items-center rounded bg-[#158B51] py-3 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-[#D9D9D9] hover:bg-opacity-80  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
              </svg>
              Search
            </button> 
          </div>
        </div>
        <div className="flex items-center justify-between space-x-10">
          <div className="p-4 ">
            <MdNotifications className="text-gray-600 text-3xl hover:text-[#158B51]" />
          </div>
          <div>
            <img
            onClick={handleMenu}
              alt="User Icons"
              src={userIcon}
              className="relative inline-block h-10 w-10 cursor-pointer rounded-full object-cover object-center"
              data-popover-target="profile-menu"
            />
            <ul
              role="menu"
              data-popover="profile-menu"
              data-popover-placement="bottom"
              className={`absolute z-10 min-w-[180px] ${isMenuOpen ? 'block' : 'hidden'} overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg shadow-sm focus:outline-none`}
            >
              <li
                role="menuitem"
                className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-slate-400">
                  <path fill-rule="evenodd" d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z" clip-rule="evenodd" />
                  <path fill-rule="evenodd" d="M19 10a.75.75 0 0 0-.75-.75H8.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 19 10Z" clip-rule="evenodd" />
                </svg>
  
                <p className="text-slate-800 font-medium ml-2">
                  Sign Out
                </p>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
  )
}
