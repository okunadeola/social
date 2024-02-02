import { TbTag } from "react-icons/tb";
import CreatePostMoreDropdown from "../components/CreatePostMoreDropdown";
import { Camera, MessageSquare, Share, User } from "lucide-react";
import { HiOutlineEmojiHappy } from "react-icons/hi";

const Postfeed = () => {
  return (
    <div className="flex flex-col rounded-md  py-10  bg-white dark:bg-cardDarkColor">
      <div className="flex flex-col rounded-md  space-y-3 ">


        <div className="flex justify-between px-9">
          <div className="flex gap-x-5">
            <div>
              <span className="h-10 w-10 rounded-full flex items-center relative">
                <img
                  src="/assets/images/profiles/avatar-07.jpg"
                  alt="User"
                  className="rounded-full w-[2.5rem] h-[2.5rem]"
                />
              </span>
            </div>
            <div className="flex flex-col text-xs">
              <span className="font-bold text-gray-600 text-sm">
                Sufiya Eliza
              </span>
              <span>30 Mins Ago</span>
            </div>
          </div>

          <div>
            <CreatePostMoreDropdown />
          </div>
        </div>

        {/* image */}

        <div className="">
          <img
            src="/assets/images/profiles/avatar-07.jpg"
            alt="User"
            className=" w-full max-h-[23rem] object-cover object-top"
          />
        </div>

        <div className="flex justify-between px-9">
          <div>
            <span className="text-xl font-bold dark:text-gray-400 text-gray-600">
              Today Our Three Cute Puppy Dog Birthday !!!!
            </span>
          </div>
          <div className=" w-8 h-8 rounded-md dark:bg-slate-400/20 bg-xinputLight flex items-center justify-center">
            <TbTag size={12} className="" />
          </div>
        </div>

        <div className=" space-x-1 px-9">
          <span className=" text-mainColor font-semibold">#ourcutepuppy,</span>
          <span>#puppy,</span>
          <span>#birthday,</span>
          <span>#dog</span>
        </div>

        <div className="px-9">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            atque. Veniam, nam? Odit necessitatibus, vel saepe asperiores
            perferendis temporibus laboriosam fugit quia dolore minus
            perspiciatis, amet in facere rerum fugiat?
          </span>
        </div>

        <div className="mx-8 py-3">
          <span className="font-bold text-sm">
            +12 people react to this post
          </span>
        </div>
      </div>

      <div className="border-y border-x-inputLight flex justify-between text-sm items-center font-semibold py-4 px-9">
        <div className="flex gap-x-5 items-center ">
          <div className="flex gap-x-3 ">
            <User />
            <User />
            <User />
            <User />
          </div>
          <div>
            <span>+75</span>
          </div>
        </div>

        <div className="flex gap-x-4">
          <div className="flex gap-x-1">
            <span>4567</span>
            <span>comment</span>
          </div>
          <div className="flex gap-x-1">
            <span>985</span>
            <span>share</span>
          </div>
        </div>
      </div>

      <div className="border-b border-x-xinputLight flex justify-between px-16 items-center py-4 dark:bg-slate-400/20  bg-post-react-color font-medium">
        <div className="flex gap-x-2 items-center cursor-pointer">
          <HiOutlineEmojiHappy />
          <span>React</span>
        </div>
        <div className="flex gap-x-2 items-center cursor-pointer">
          <MessageSquare size={18} />
          <span>Comment</span>
        </div>
        <div className="flex gap-x-2 items-center cursor-pointer">
          <Share size={18} />
          <span>Share</span>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center pt-10">
          <div className="flex items-center py-3 dark:bg-slate-400/20  bg-xinputLight rounded-md w-[85%]">
            <input
              name=""
              id=""
              className="outline-none border-none bg-transparent  px-4 w-full placeholder:text-xs placeholder:text-main-text-color"
              type="text"
              placeholder="Write A Comment..."
            />

            <div className="ml-auto flex">
              <button className="text-gray-500 outline-none">
                {" "}
                <HiOutlineEmojiHappy />{" "}
              </button>
              <button className="px-3 text-gray-500 outline-none">
                {" "}
                <Camera size={16} />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postfeed;
