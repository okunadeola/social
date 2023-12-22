import { Fragment, useContext, useEffect } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
import routes from "./routes";




import { MdOutlineAnalytics } from "react-icons/md";


import { NavLink, useLocation } from "react-router-dom";
import { dashboardContext } from "../../context/Dashboard";
import { PiArrowsLeftRightBold } from "react-icons/pi";

import SubMenuSidebar from "../submenuSidebar";

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen, isTablet, sidebarMinimized, minimizeSidebar,  setShowminimizedsubMenu } =
    useContext(dashboardContext);


  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTablet) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isTablet]);

  const overlayClicked = () => {
    setSidebarOpen(false);
    setShowminimizedsubMenu(false)
  };

  const foldSidebar = ()=>{
    minimizeSidebar()
  
  }

  useEffect(() => {
    isTablet && setSidebarOpen(false);
  }, [pathname]);


  const Nav_animation = isTablet ?  {
    open: {
      x: 0,
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      x: -350,
      width: 0,
      transition: {
        damping: 40,
        delay: 0.15,
      },
    },
    minimize: {
      x: 0,
      width: "7.5rem",
      transition: {
        damping: 40,
        delay: 0.15,
      },
    },
  }
      : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "0rem",
          transition: {
            damping: 40,
          },
        },
        minimize: {
          width: "7.5rem",
          transition: {
            damping: 40,
          },
        },
      };



  return (
    <div className="relative bg-sidebarBg">
      
      <div
        onClick={() => overlayClicked()}
        className={`lg:hidden fixed inset-0 max-h-screen z-[998] bg-gray-900  opacity-30 ${
          sidebarOpen ? "block" : "hidden"
        } `}
      ></div>

      <SubMenuSidebar/>

            


     

      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTablet ? -350 : 0 }}
        animate={sidebarMinimized && sidebarOpen ? 'minimize' : !sidebarMinimized && sidebarOpen ? 'open' : 'closed' }
        className="shadow-xl md:z-[9] z-[9999] max-w-[16rem]  w-[16rem] 
             fixed top-0 left-0
           h-screen  dark:!text-gray-100 bg-sidebarBg"
      >
        <div className={`flex flex-col bg-sidebarBg ${sidebarMinimized ? 'h-16' : 'h-40'}`}>

          <div className={`w-100 h-4  flex justify-end my-2   p-3 px-4 font-medium hover:cursor-pointer ${sidebarMinimized && 'justify-center'}`} onClick={foldSidebar}>
            <PiArrowsLeftRightBold size={25} color="#555" />
          </div>
          <div className={`w-100 h-40  flex-col justify-center items-center ${sidebarMinimized ? 'hidden' : 'flex'}`}>
            <svg
              fill="#00BCC2"
              width="70px"
              height="70px"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fillRule="evenodd">
                <path d="M100.48 155.294l-8.369-4.528-8.095 7.8-14.076-14.045 7.676-7.838-5.419-12.217H61.43l.519-20.188h10.248l5.927-12.28-8.184-7.813L84.016 70.62l7.498 6.625 12.487-5.475V60.133h19.822V71.77l13.973 4.462 6.693-6.376L158.21 82.75s3.558-2.262 11.376-7.114C161.768 64.946 137.241 48 114.5 48 77.22 48 47 77.325 47 113.5c0 27.587 17.575 51.19 42.452 60.842 6.006-10.863 11.027-19.048 11.027-19.048z" />
                <path d="M106.6 109.603s8.717-1.092 21.788-5.425c13.071-4.334 22.25-8.786 33.151-14.044 10.902-5.258 21.195-12.167 21.195-12.167l5.306-4.068 12.14.588-13.502 27.666c-.485.993.026 1.784 1.129 1.767l19.049-.298c1.108-.018 1.686.794 1.285 1.827l-4.077 10.499c-.4 1.026-1.627 1.843-2.713 1.825l-19.849-.328c-1.099-.018-2.394.775-2.889 1.764l-33.948 67.893c-1.235 2.47.002 4.436 2.753 4.391l9.749-.158-7.373 14.651s-14.555 4.754-29.15 3.585c-14.594-1.169-19.287-3.464-23.673-7.678-4.386-4.214-4.323-3.904-4.94-8.368-.616-4.463 4.11-13.158 4.11-13.158l31.522-62.832-25.815.589 4.752-8.521z" />
              </g>
            </svg>
            <span className="text-2xl text-white font-bold">Huma</span>
          </div>
        </div>

        <div className="flex flex-col  h-full group">
          <ul className="whitespace-pre text-[0.9rem]  py-5 flex flex-col gap-1 overflow-x-hidden  font-medium  scrollbar-thin scrollbar-thumb-transparent  group-hover:scrollbar-thumb-scrollbarColor   scrollbar-track-transparent   menuScrollBar md:h-[78%] h-[75%]  px-0">

            {
              routes.map(route =>(
                  <Fragment key={route.title} className='group'>
                      {
                      !sidebarMinimized && 
                        <small className="mx-4 py-3 text-menuItemTitle font-bold  text-sm inline-block mb-2 tracking-widest font-Lato">
                          {route.title?.toLocaleUpperCase()}
                        </small>
                      }

                      {
                        route.withSubMenu ? (
                            <>

                          <div className="">
                          {route?.submenu?.map((menu) => (
                            <div key={menu.name} className="flex flex-col gap-1">
                              <SubMenu data={menu} />
                            </div>
                          ))}
                          </div>
                            </>

                        ) : (

                            <>
                          <li className={`${sidebarMinimized && 'border-b border-gray-800 py-5 hover:text-white ' }`}>
                          <NavLink to={"/"} className={` ${sidebarMinimized ? 'flex flex-col text-center justify-center gap-1 cursor-pointer  duration-300 font-medium text-gray-400': 'link'}`}>
                            <MdOutlineAnalytics size={sidebarMinimized ? 30 :23} className={`min-w-max ${sidebarMinimized && "mx-auto"}`} />
                            
                            Dashboard
                            
                          </NavLink>
                        </li>
                            </>

                        )
                      }
                  </Fragment>
              ))
            }

          </ul>

        
        </div>
        
      </motion.div>
    </div>
  );
};

export default Sidebar;
