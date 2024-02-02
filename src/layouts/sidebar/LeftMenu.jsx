import { RxDashboard } from "react-icons/rx";
import { LuFile } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { MdOutlineHeadphones } from "react-icons/md";
import { CiCloud } from "react-icons/ci";
import { FiCalendar } from "react-icons/fi";
import { BiCake } from "react-icons/bi";
import { GrGamepad } from "react-icons/gr";
import { RiShutDownLine } from "react-icons/ri";




const LeftMenu = () => {
  return (
        <div className=" bg-mainColor columns-1 hidden md:block sticky top-24 overflow-clip rounded-md py-9 space-y-6 h-fit">

          <div className="flex flex-col space-y-8 relative text-white  justify-center items-center ">
              <RxDashboard strokeWidth={0.1}  size={20} />
              <div className=" bg-inputLight w-12 h-[0.09rem]">

              </div>
          </div>
          <div className="flex flex-col space-y-10 relative text-white  justify-center items-center ">
              <div className=" bg-inputLight p-3 rounded-lg">
                <LuFile strokeWidth={2}  size={20}/>
              </div>
              <div className=" bg-inputLight p-3 rounded-lg">
               <FaRegStar strokeWidth={2}  size={20}/>
              </div>
              <div className=" bg-inputLight p-3 rounded-lg">
                <LuUser   size={20}/>
              </div>
              <div className=" bg-inputLight p-3 rounded-lg">
                <MdOutlineHeadphones   size={20}/>
              </div>
              <div className=" bg-inputLight p-3 rounded-lg">
                <CiCloud strokeWidth={1}   size={20}/>
              </div>
              <div className=" bg-inputLight p-3 rounded-lg">
                <FiCalendar   size={20}/>
              </div>
              <div className=" bg-inputLight p-3 rounded-lg">
                <BiCake   size={20}/>
              </div>
              

              <div className="relative">
                <div className=" bg-inputLight p-3 rounded-lg">
                  <GrGamepad   size={20}/>
                </div>
                <div className=" bg-white p-3 h-[9.1rem] rounded-xl">
                  <GrGamepad   size={20}/>
                </div>
                <div className=' absolute h-3 w-3 rounded-full bg-red-500   flex items-center justify-center right-[0.9rem] -top-[0.35rem]'>
                  <span className='flex items-center justify-center text-xxs font-bold text-white'>2</span>
                </div>
                
              </div>
               

          </div>

          <div className="flex flex-col space-y-8 relative text-white  justify-center items-center ">
              <div className=" bg-inputLight w-12 h-[0.09rem]"></div>
          <RiShutDownLine   size={20} />
          </div>
         

        </div>
  )
}

export default LeftMenu
