import { useState } from "react"
import { activity, add, chat, chevronDown, chevronLeft, chevronRight, folder, help, nightMode, settings } from "../assets/icons";
import { headerLogo } from "../assets/images";

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleChats, setToggleChats] = useState(false);

  const onToggleItems = (setItem) => {
    setItem((toggle) => !toggle);
  }

  return (
    <section id="sidebar" className={`w-full flex flex-col justify-between ${toggleMenu ? 'w-0 lg:w-[68px] lg:p-2 lg:bg-color-gray-50' : 'w-[330px] lg:w-[350px] p-4'} h-screen border transition-all`}>
      <div className={`relative flex flex-none items-center justify-between ${toggleMenu ? 'flex-col py-4' : 'bg-color-gray-50 px-4 py-2'} rounded-[20px]`}>
        <div className="flex items-center gap-1 grow">
          <a href="#">
            <img src={headerLogo} alt="header logo" width={43} height={43} />
          </a>
          <span className={`font-poppins text-md font-medium leading-5 text-color-gray-300 ${toggleMenu ? 'hidden' : 'block'}`}>My Chats</span>
        </div>
        <button className={`flex-none hover:bg-color-gray-200 py-3 px-4 rounded-full ${toggleMenu ? 'hidden' : 'block'}`}>
          <img src={nightMode} alt="header logo" width={15} height={15} />
        </button>
        <button onClick={() => onToggleItems(setToggleMenu)} className="absolute -right-16 flex-none hover:bg-color-gray-200 py-3 px-4 rounded-full">
          <img src={toggleMenu ? chevronRight : chevronLeft} alt="header logo" width={11} height={11} />
        </button>
      </div>

      <div className={`bg-color-gray-50 mt-3 p-4 rounded-t-[20px] ${toggleMenu ? 'hidden' : 'block'}`}>
        <input type="text" placeholder="Search" className="px-2 py-3 font-opensans text-sm font-medium leading-5 w-full rounded-lg bg-color-gray-100 focus:outline-none" />
      </div>

      <div className={`grow h-[50vh] bg-color-gray-50 p-4 justify-between ${toggleMenu ? 'hidden' : 'block'}`}>
        <div className="flex justify-between items-center gap-2">
          <span className="font-opensans text-sm font-medium leading-5 flex-1">Chats</span>
          <button onClick={() => onToggleItems(setToggleChats)} className="p-1 bg-color-gray-100 rounded-sm flex-none transition-all">
            {
              toggleChats ?
                (
                  <img src={chevronLeft} alt="add icon" width={7} height={7} />
                ) :
                (
                  <img src={chevronDown} alt="add icon" width={10} height={10} />
                )
            }
          </button>
        </div>

        <ul className={`my-4 font-opensans text-sm font-medium leading-5 [&::-webkit-scrollbar]:[width:4px] [&::-webkit-scrollbar-thumb]:bg-color-gray-200 overflow-auto h-full ${toggleChats ? 'opacity-0' : 'opacity-100'}`}>
          <li className="p-4 mt-3 bg-color-gray-100 rounded-md flex items-center gap-3 cursor-pointer">
            <img src={folder} alt="chat icon" width={15} height={15} />
            <span>Work Chats</span>
          </li>
          <li className="p-4 mt-3 bg-color-gray-100 rounded-md flex items-center gap-3 cursor-pointer">
            <img src={folder} alt="chat icon" width={15} height={15} />
            <span>Life Chats</span>
          </li>
          <li className="p-4 mt-3 bg-color-gray-100 rounded-md flex items-center gap-3 cursor-pointer">
            <img src={folder} alt="chat icon" width={15} height={15} />
            <span>Project Chats</span>
          </li>
          <li className="p-4 mt-3 bg-color-gray-100 rounded-md flex items-center gap-3 cursor-pointer">
            <img src={folder} alt="chat icon" width={15} height={15} />
            <span>Project Chats</span>
          </li>
        </ul>
      </div>
      <div className={`${!toggleMenu && 'bg-color-gray-50 rounded-b-[20px] p-4'}`}>
        <button className={`flex w-full gap-5 ${toggleMenu ? 'hidden lg:block p-4 justify-center' : 'py-3 px-4 justify-between'} mt-3 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg`}>
          <span className={`font-opensans text-sm font-medium text-white leading-5 ${toggleMenu ? 'hidden' : 'block'}`}>New Chat</span>
          <img src={add} alt="new chat icon" width={15} height={15} className="color-white invert" />
        </button>
      </div>
    </section >
  )
}

export default Sidebar