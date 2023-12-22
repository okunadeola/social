/* eslint-disable react/prop-types */
import { useContext } from "react";
import { dashboardContext } from "../context/Dashboard";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
// import SubMenuSidebar from "./submenuSidebar";


function RootLayout({ children }) {
  const { sidebarOpen, sidebarMinimized } = useContext(dashboardContext)

console.log(sidebarOpen)
  return (
        <div className="dark:text-gray-100 dark:bg-slate-700 bg-lighten duration-200 ease-in-out z-1 ">
              <Navbar/>
              <div className="flex max-w-full ">
                <Sidebar />
                <div className={`w-full min-h-[93vh] ${ (sidebarMinimized) ?  'md:ml-[7.5rem]'  : (sidebarOpen) ? 'md:ml-64' : (!sidebarMinimized &&!sidebarOpen) &&'md:ml-0'}`}>
                <main className={`py-4 flex-1 px-4 break-words w-full ${  (!sidebarMinimized &&!sidebarOpen) &&'md:ml-0'}`}>{children}</main>
                </div>
              </div>
        </div>

  );
}

export default RootLayout;
