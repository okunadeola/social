/* eslint-disable react-hooks/exhaustive-deps */


/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { dashboardContext } from "../../context/Dashboard";
// import DropDown from "../components/DropDown";



const  SubMenuExtended = () => {
  const {tabClicked,  setShowminimizedsubMenu, extendedSubMenuData} = useContext(dashboardContext)
  const { pathname } = useLocation();


  const [subMenuOpen, setSubMenuOpen] = useState(false);


  const trigger = useRef(null);


  const showSubMenu = ()=>{

      setSubMenuOpen(!subMenuOpen)

  }
useEffect(() => {
    showSubMenu()
}, [])



useEffect(() => {
    if(setShowminimizedsubMenu){
        showSubMenu()
    }
  }, [pathname]);

  
 const close = ()=>{
    setShowminimizedsubMenu(false);
 }

  


  
  return (
    <>

    {
        extendedSubMenuData && (
            <>
            
                <li
                
                    className={`relative  hover:text-white hover:cursor-pointer bg-sidebarSubMenuBg link`}
                    onClick={showSubMenu} ref={trigger}
                >
                    <extendedSubMenuData.icon size={23}  className={`min-w-max`} />


                    <p className="flex-1 capitalize">{extendedSubMenuData?.name}</p>

                    
                        <IoIosArrowDown
                        className={`${((subMenuOpen && tabClicked) !== extendedSubMenuData?.name ) ? "-rotate-90" :"rotate-30"} duration-200 `}
                        />
                    
                    
                </li>

                {
                    subMenuOpen && (
                        <motion.ul
                        
                        animate={
                            tabClicked === extendedSubMenuData?.name
                            ? {
                                height: "fit-content",
                                }
                            : {
                                height: 0,
                                }
                        }
                        className={`flex h-0 flex-col pl-12 text-[0.8rem] font-normal overflow-hidden w-[15rem] relative -top-2 rounded-br-md ${(tabClicked === extendedSubMenuData?.name ||pathname.includes(extendedSubMenuData?.name)) && "bg-sidebarSubMenuBg"}` }
                        >
                        <div className={`bg-gray-800 hidden left-3 h-full absolute w-[0.9px] mx-3.5 border-1 ${(tabClicked === extendedSubMenuData?.name ||pathname.includes(extendedSubMenuData?.name)) && "d-block"}`}></div>

                        {extendedSubMenuData.menus?.map((menu) => (
                            <li key={menu}
                        
                            >
                            <NavLink
                                onClick={close}
                                to={`/${extendedSubMenuData?.name}/${menu}`}
                                className="link !bg-transparent capitalize relative hover:text-white hover:cursor-pointer"
                            >
                                {menu}
                            </NavLink>
                            </li>
                        ))}
                        </motion.ul>

                    )


                }
            
            </>
        )
    }



     
    </>
  );
};

export default SubMenuExtended;
