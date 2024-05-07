import { useState } from "react"
import { activity, add, chat, chevronDown, chevronLeft, chevronRight, folder, help, nightMode, settings } from "../assets/icons";
import { headerLogo } from "../assets/images";

const Sidebar = () => {
  const [toggleMenu, setMenuToggle] = useState(false);

  return (
    <section id="sidebar" className={`w-full flex flex-col ${toggleMenu ? 'lg:w-[68px]' : 'lg:w-[350px]'} p-4 h-screen border transition-all`}>
      <div className="flex flex-none items-center justify-between bg-color-gray-50 py-2 px-4 rounded-[20px]">
        <div className="flex items-center gap-1 grow">
          <a href="#">
            <img src={headerLogo} alt="header logo" width={43} height={43} />
          </a>
          <span className={`font-poppins text-md font-medium leading-5 text-color-gray-300 ${toggleMenu ? 'hidden' : 'block'}`}>My Chats</span>
        </div>
        <button className="flex-none hover:bg-color-gray-200 py-3 px-4 rounded-full">
          <img src={nightMode} alt="header logo" width={15} height={15} />
        </button>
        <button onClick={() => setMenuToggle(!toggleMenu)} className="flex-none hover:bg-color-gray-200 py-3 px-4 rounded-full">
          <img src={toggleMenu ? chevronRight : chevronLeft} alt="header logo" width={11} height={11} />
        </button>
      </div>

      <div className={`grow mt-3 bg-color-gray-50 p-4 rounded-[20px] flex flex-col justify-between ${toggleMenu ? 'hidden' : 'block'}`}>
        <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-trans">
          <input type="text" placeholder="Search" className="px-2 py-3 font-opensans text-sm font-medium leading-5 w-full rounded-lg bg-color-gray-100" />
          <div className="my-4">
            <div className="flex justify-between items-center gap-2">
              <span className="font-opensans text-sm font-medium leading-5 flex-1">Folders</span>
              <button className="p-1 bg-color-gray-100 rounded-sm flex-none">
                <img src={add} alt="add icon" width={10} height={10} />
              </button>
              <button className="p-1 bg-color-gray-100 rounded-sm flex-none">
                <img src={chevronDown} alt="add icon" width={10} height={10} />
              </button>
            </div>
            <ul className="font-opensans text-sm font-medium leading-5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-trans">
              <li className="p-4 mt-3 bg-color-gray-100 rounded-md">
                <a href="#" className="flex items-center gap-3"><img src={folder} alt="chat icon" width={15} height={15} />
                  <span>Work Chats</span>
                </a>
              </li>
              <li className="p-4 mt-3 bg-color-gray-100 rounded-md">
                <a href="#" className="flex items-center gap-3"><img src={folder} alt="chat icon" width={15} height={15} />
                  <span>Life Chats</span>
                </a>
              </li>
              <li className="p-4 mt-3 bg-color-gray-100 rounded-md">
                <a href="#" className="flex items-center gap-3"><img src={folder} alt="chat icon" width={15} height={15} />
                  <span>Project Chats</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="my-5">
            <div className="flex justify-between items-center gap-2">
              <span className="font-opensans text-sm font-medium leading-5 flex-1">Chats</span>
              <button className="p-1 bg-color-gray-100 rounded-sm flex-none">
                <img src={chevronDown} alt="add icon" width={10} height={10} />
              </button>
            </div>
            <ul className="font-opensans text-sm font-medium leading-5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-trans">
              <li className="p-4 mt-3 bg-color-gray-100 rounded-md">
                <a href="#" className="flex items-center gap-3"><img src={folder} alt="chat icon" width={15} height={15} />
                  <span>Work Chats</span>
                </a>
              </li>
              <li className="p-4 mt-3 bg-color-gray-100 rounded-md">
                <a href="#" className="flex items-center gap-3"><img src={folder} alt="chat icon" width={15} height={15} />
                  <span>Life Chats</span>
                </a>
              </li>
              <li className="p-4 mt-3 bg-color-gray-100 rounded-md">
                <a href="#" className="flex items-center gap-3"><img src={folder} alt="chat icon" width={15} height={15} />
                  <span>Project Chats</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button className={`flex justify-between w-full gap-5 ${toggleMenu ? 'p-3' : 'py-3 px-4'} mt-3 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg`}>
            <span className={`font-opensans text-sm font-medium text-white leading-5 ${toggleMenu ? 'hidden' : 'block'}`}>New Chat</span>
            <img src={add} alt="new chat icon" width={15} height={15} className="color-white invert" />
          </button>
        </div>
      </div>
    </section >
  )
}

export default Sidebar