


import { IoSearch } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { LuUserPlus } from "react-icons/lu";



import UserDropdown from '../components/UserDropdown';
import DropdownNotification from '../components/DropdownNotification';
import DropdownMessage from '../components/DropdownMessage';
import ThemeModeSwitcher2 from '../components/ThemeModeSwitcher2';


const Navbar = () => {




  return (
    <div className='w-screen  top-0 right-0 left-0 p-2 py-[0.45rem] shadow-sm bg-mainColor z-[99] sticky text-white px-4 lg:px-12'>
      <div className='px-2 py-1 sm:py-2 '>
         <div className='flex items-center justify-between'>

         <div className='flex gap-5 lg:gap-8'>
            <div className='flex items-center justify-between gap-2'> 
              
                {/* <div className=''></div> */}
                <span className="whitespace-pre font-bold text-xl sm:text-2xl opacity-80">Friendbook</span>
            </div>
            
            <div className='flex items-center justify-between md:gap-5  gap-2'>
                <div className='flex items-center bg-inputLight py-2 rounded'>
                  <button className='px-3 outline-none'> <IoSearch/> </button>
                  <input className='outline-none  lg:w-[13rem] w-32 border-none bg-transparent placeholder:text-textLight placeholder:text-xs'  type="text" placeholder='Find friends...' />
                </div>

                <div className='gap-8 hidden sm:flex'>
                  <FiHome strokeWidth={2.5}  size={18} className='font-medium'/>
                  <LuUserPlus strokeWidth={2.5}  size={18} className='font-medium'/>
                </div>

            </div>
         </div>




          <div className='flex gap-4 lg:gap-6'>

            <div className='items-center justify-between md:gap-5  gap-2 hidden xxl:flex'>
                <div className=' bg-inputLight px-8 py-2 rounded-md '>
                  <span className='mr-1 font-[900]'>326</span>
                  <span className='font-[50]'>Total Posts</span>
                </div>
                <div className=' bg-inputLight px-8 py-2 rounded-md '>
                  <span className='mr-1 font-[900]'>2456</span>
                  <span className=''>Total Friends</span>
                </div>

                
            </div>
            <div className='flex items-center justify-between md:gap-5  gap-2'>

               
             


                <div className="hidden sm:block">
                    <DropdownMessage/>
                </div>

                <ThemeModeSwitcher2/>

                <div className="hidden sm:block">
                    <DropdownNotification/>
                </div>
                
                <div className="hidden sm:block">
                  <UserDropdown className='font-medium text-gray-600' />
                </div>

               
               
                
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Navbar
