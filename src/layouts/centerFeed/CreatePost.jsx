
import CreateButton from "./CreateButton"
import { Camera, Image, Tag } from "lucide-react"
import { BiLocationPlus } from "react-icons/bi"
import CreatePostMoreDropdown from "../components/CreatePostMoreDropdown"
import CreatePostReachDropdown from "../components/CreatePostReachDropdown"

import { RiCameraLensFill } from "react-icons/ri"


const CreatePost = () => {
  return (
    <div className="flex flex-col rounded-md  p-10 space-y-3 bg-white dark:bg-cardDarkColor">

        <div className="flex justify-between ">
            <div className=" space-x-6 flex">
                <h6 className=" text-2 font-bold inline-block">
                    Create Post
                </h6>
                <div className="flex  space-x-2 font-medium ">
                    <CreatePostReachDropdown/>
                
                        <div className="flex items-center  gap-x-2 hover:bg-slate-300 rounded px-2 cursor-pointer">
                            <RiCameraLensFill/>
                            <span>Go Live</span>
              
                        </div>
                </div>
            </div>
            <div>
                <CreatePostMoreDropdown/>
            </div>
        </div>

        <div>
            <div className='flex items-center py-2 dark:bg-slate-400/20   bg-xinputLight rounded'>

                    <textarea name="" id="" cols="30" rows="1"
                        className='outline-none border-none bg-transparent  px-2 w-full placeholder:text-xs placeholder:text-main-text-color'  type="text" placeholder='Write Something Here...'
                    
                    ></textarea>

                   

                    <button className='px-3 ml-auto text-gray-500 outline-none'> <Image/> </button>
            </div>
        </div>

        <div className="pt-4 flex space-x-3">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br bg-pink-600 opacity-50"></div>
            <div className="w-5 h-5 rounded-full bg-gradient-to-br bg-purple-600 opacity-50"></div>
            <div className="w-5 h-5 rounded-full bg-gradient-to-br bg-gray-600 opacity-50"></div>
            <div className="w-5 h-5 rounded-full bg-gradient-to-br bg-yellow-600 opacity-50"></div>
            <div className="w-5 h-5 rounded-full bg-gradient-to-br bg-pink-600 opacity-50"></div>
            <div className="w-5 h-5 rounded-full bg-gradient-to-br bg-purple-600 opacity-50"></div>
            <div className="w-5 h-5 rounded-full bg-gradient-to-br bg-gray-600 opacity-50"></div>
            <div className="w-5 h-5 rounded-full bg-gradient-to-br bg-yellow-600 opacity-50"></div>
            <div className="w-5 h-5 rounded-full bg-gradient-to-br bg-pink-600 opacity-50"></div>
            <div className="w-5 h-5 rounded-full bg-gradient-to-br bg-purple-600 opacity-50"></div>
            <div className="w-5 h-5 rounded-full bg-gradient-to-br bg-gray-600 opacity-50"></div>
            <div className="w-5 h-5 rounded-full bg-gradient-to-br bg-yellow-600 opacity-50"></div>
        </div>
      
        <div className="pt-3 flex gap-2 flex-wrap ">
            <CreateButton icon={Camera} text={"Album"}/>
            <CreateButton icon={Camera} text={"Feelings & Activity"}/>
            <CreateButton icon={BiLocationPlus} text={"Check In"}/>
            <CreateButton icon={Tag} text={"Tag Friends"}/>
        </div>
      

    </div>
  )
}

export default CreatePost
