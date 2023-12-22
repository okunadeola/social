/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";

// import { motion } from "framer-motion";



import { dashboardContext } from "../../context/Dashboard";

import { FaCircleNotch } from "react-icons/fa6";
import { BsClock } from "react-icons/bs";
import SubMenuExtended from "./SubMenuExtended";


const SubMenuSidebar = () => {
  const { sidebarOpen, setSidebarOpen, isTablet, sidebarMinimized, showminimizedsubMenu , setShowminimizedsubMenu } =
    useContext(dashboardContext);


 

  useEffect(() => {
    if (isTablet) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isTablet]);

 
  useEffect(() => {

  
    return () => {
      setShowminimizedsubMenu(false)
    }
  }, [])
  




  const subMenusList = [
    {
      name: "Enterprise",
      icon: FaCircleNotch,
      menus: ["app settings", "stroage", "hosting"],
    },
    {
      name: "Productivity",
      icon: BsClock,
      menus: ["dashboard", "realtime", "events"],
    },
  ];

  return (

    <>
        {
          sidebarOpen &&  sidebarMinimized && showminimizedsubMenu && (

        <div className="relative bg-sidebarBg w-[93%]">

            <div className="md:z-[9] z-[999] max-w-[16rem]  w-[16rem] 
                fixed top-0 left-[7.5rem]
              h-screen  dark:!text-gray-100 bg-sidebarBg">
                  <div className="flex flex-col  h-full">
                    <ul className="whitespace-pre text-[0.9rem] py-5 flex flex-col gap-1 overflow-x-hidden  font-medium  scrollbar-thin dark:scrollbar-track-slate-400  scrollbar-track-white scrollbar-thumb-slate-100 dark:scrollbar-thumb-slate-700  md:h-[78%] h-[75%]  px-0">
                      
                    <div  className="flex flex-col gap-1">
                      <SubMenuExtended data={subMenusList[0]} />
                    </div>
            
                    </ul>

                  </div>
            </div>
            
      
        </div>
          )
        }
    </>
  );
};

export default SubMenuSidebar;
