import { Navdrawer } from "../../layouts/components/Navdrawer";
import Navbar from "../../layouts/navbar";
import { FiHome } from "react-icons/fi";
import { LuUserPlus, LuUser } from "react-icons/lu";
import { LuBell } from "react-icons/lu";
import { TbMessageCircle } from "react-icons/tb";
import CenterFeed from "@/layouts/centerFeed";
import LeftMenu from "@/layouts/sidebar/LeftMenu";
const Homepage = () => {
  return (
    <div className="dark:text-gray-400 text-main-text-color dark:!bg-bgDarkColor  !bg-bgLightColor duration-200 ease-in-out z-1 overflow-y-clip min-h-fit w-screen relative ">
      <Navbar />

      <div className="grid place-item-center mx-0 sm:mx-4 md:mx-8  xlg:mx-12  overflow-x-clip">
        <div className="grid grid-cols-1 gap-2  md:grid-cols-[80px_1fr_100px] md:gap-4 xlg:grid-cols-[80px_1fr_250px] lg:gap-6 my-6">
          <LeftMenu />

          <div className="h-full   flex flex-col gap-5">
            center
            <div className="w-full h-48 bg-blue-200"></div>
            {/* grid-flow-row-dense grid-rows-3 */}
            <div className="w-full h-full   grid grid-cols-1 lg:grid-cols-2   gap-2  xm:grid-cols-[250px_1fr_250px] sz:grid-cols-[230px_1fr_230px] lg:gap-4">
              <div className="h-full bg-green-200   order-2 xm:order-1 ">
                left
              </div>
              <CenterFeed />
              <div className="h-full bg-pink-200  order-3 xm:order-3 ">
                right{" "}
              </div>
            </div>
          </div>

          <div className=" h-1/2 bg-gray-400 hidden md:block sticky top-24 ">
            right
          </div>
        </div>
      </div>

      <div className="fixed bg-mainColor h-[3.1rem] w-screen bottom-0 sm:hidden">
        <div className="flex items-center h-full justify-around px-12 text-white">
          <FiHome strokeWidth={3} size={18} className="fon-bold" />
          <LuUserPlus strokeWidth={3} size={18} className="fon-bold" />
          <LuUser strokeWidth={3} size={18} className="fon-bold" />
          <TbMessageCircle strokeWidth={3} size={18} className="fon-bold" />
          <LuBell strokeWidth={3} size={18} className="fon-bold" />
          <Navdrawer />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
