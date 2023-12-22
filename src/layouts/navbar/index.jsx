



import  { useContext } from 'react'

import { MdMenu } from 'react-icons/md';
import { dashboardContext } from '../../context/Dashboard';


import UserDropdown from '../components/UserDropdown';
import DropdownNotification from '../components/DropdownNotification';
import DropdownMessage from '../components/DropdownMessage';


const Navbar = () => {
    const {toggleSideBar} = useContext(dashboardContext)



  return (
    <div className='w-screen  top-0 right-0 left-0 p-2 shadow-md dark:shadow-md dark:text-gray-100 dark:bg-slate-800 bg-white z-[99]'>
      <div className='px-2 py-1 '>
         <div className='flex items-center justify-between'>
            <div className='flex items-center justify-between gap-2'> 
                <div className="md:hidden cursor-pointer" onClick={() => toggleSideBar()}>
                    <MdMenu size={25} />
                </div>
                
                <img
                className='hidden md:block'
                    src="https://img.icons8.com/color/512/firebase.png"
                    width={35}
                    alt=""
                />
                <span className="text-xl whitespace-pre font-medium sm:block hidden">Huma</span>
            </div>
                

            <div className='flex items-center justify-between md:gap-10  gap-2'>

               
                {/*  theme switcher */}
                {/* <ThemeModeSwitcher2/> */}

                <UserDropdown className='font-medium text-gray-600' />
                
                <div>
                    <DropdownNotification/>
                </div>
                
                <div>
                    <DropdownMessage/>
                </div>

               
               
                
            </div>
         </div>
      </div>
    </div>
  )
}

export default Navbar
