/* eslint-disable react-hooks/exhaustive-deps */


/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { dashboardContext } from "../../context/Dashboard";
import usePrevious from "../../hooks/usePrevious";
// import DropDown from "../components/DropDown";



const  SubMenuExtended = () => {
  const {tabClicked,  setShowminimizedsubMenu, extendedSubMenuData} = useContext(dashboardContext)
  const { pathname } = useLocation();


  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const previousExtendedMenuData = usePrevious(extendedSubMenuData.name)



  const trigger = useRef(null);


  const showSubMenu = ()=>{
      setSubMenuOpen(!subMenuOpen)
  }


useEffect(() => {
    console.log(previousExtendedMenuData)

    if(extendedSubMenuData.name !==previousExtendedMenuData ){
        setSubMenuOpen(true)
    }

  }, [extendedSubMenuData.name]);

  
 const close = ()=>{
    setShowminimizedsubMenu(false);
 }

  


  
  return (
    <>

    {
        extendedSubMenuData && (
            <>
            
                <li
                
                    className={`relative  hover:text-white hover:cursor-pointer bg-sidebarSubMenuBg link2`}
                    onClick={showSubMenu} ref={trigger}
                >
                    <extendedSubMenuData.icon size={23}  className={`min-w-max`} />


                    <p className="flex-1 capitalize">{extendedSubMenuData?.name}</p>

                    
                        <IoIosArrowDown
                        className={`${ subMenuOpen ? "rotate-30" :"-rotate-90"} duration-200 `}
                        />
                    
                    
                </li>

                {
                    subMenuOpen && (
                        <motion.ul
                        
                        animate={
                            (tabClicked === extendedSubMenuData?.name) ||pathname.includes(extendedSubMenuData?.name)
                            ? {
                                height: "fit-content",
                                }
                            : {
                                height: 0,
                                }
                        }
                        className={`flex h-0 flex-col pl-12 text-[0.8rem] font-normal overflow-hidden w-[15rem] relative -top-2 rounded-br-md ${(tabClicked === extendedSubMenuData?.name ||pathname.includes(extendedSubMenuData?.name)) && "bg-sidebarSubMenuBg"}` }
                        >
                       

                        <div className={`bg-gray-700 left-3 h-full absolute w-[0.9px] mx-3.5 border-1 ${(tabClicked === extendedSubMenuData?.name ||pathname.includes(extendedSubMenuData?.name)) ? 'block': 'hidden'}`}></div>

                        {extendedSubMenuData.menus?.map((menu) => (
                            <li key={menu.name}
                        
                            >
                            <NavLink
                                onClick={close}
                                to={`/${extendedSubMenuData?.name}${menu.route}`}
                                className="link !bg-transparent capitalize relative hover:text-white hover:cursor-pointer"
                            >
                                {
                                    pathname.includes(menu.route) && (

                                    <span className="w-2 h-2 rounded-full bg-btnColor absolute -left-[1.6rem] duration-200 transition-all"></span>
                                    )
                                }
                                {menu.name}
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
