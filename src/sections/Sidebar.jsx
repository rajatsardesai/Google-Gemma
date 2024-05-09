import { useState } from "react"
import { activity, add, chat, chevronDown, chevronLeft, chevronRight, folder, help, nightMode, settings } from "../assets/icons";
import { Button, Input, List, SideBarNav } from "../components";

const Sidebar = () => {
  const [toggleChats, setToggleChats] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(true);

  const onToggleItems = (setItem) => {
    setItem((toggle) => !toggle);
  };

  return (
    <section id="sidebar" className={`max-lg:absolute flex max-lg:left-0 max-lg:top-0 flex-col justify-between z-50 ${toggleMenu ? 'w-0 lg:w-[68px] lg:p-2 lg:bg-color-gray-50' : 'w-[250px] sm:w-[350px] p-4'} h-screen transition-all`}>
      <SideBarNav onToggle={toggleMenu} setToggleMenu={setToggleMenu} onToggleItems={onToggleItems} />

      {!toggleMenu && (
        <div className="bg-color-gray-50 mt-3 p-4 rounded-t-[20px]">
          <Input type="text" placeholder="Search" />
        </div>
      )}

      <div className={`grow h-[50vh] bg-color-gray-50 p-4 justify-between ${toggleMenu ? 'hidden' : 'block'}`}>
        <div className="flex justify-between items-center gap-2">
          <span className="font-opensans text-sm font-medium leading-5 flex-1">Chats</span>
          <Button onClick={() => onToggleItems(setToggleChats)} className="p-1 bg-color-gray-100 rounded-sm flex-none transition-all">
            {
              toggleChats ?
                (
                  <img src={chevronLeft} alt="add icon" width={7} height={7} />
                ) :
                (
                  <img src={chevronDown} alt="add icon" width={10} height={10} />
                )
            }
          </Button>
        </div>

        <ul className={`my-4 font-opensans text-sm font-medium leading-5 [&::-webkit-scrollbar]:[width:4px] [&::-webkit-scrollbar-thumb]:bg-color-gray-200 overflow-auto h-full ${toggleChats ? 'opacity-0' : 'opacity-100'}`}>
          <List listIcon={folder} iconAlt="chat icon" listName="Work Chats" />
          <List listIcon={folder} iconAlt="chat icon" listName="Life Chats" />
          <List listIcon={folder} iconAlt="chat icon" listName="Project Chats" />
        </ul>
      </div>
      <div className={`${!toggleMenu && 'bg-color-gray-50 rounded-b-[20px] p-4'}`}>
        <Button className={`flex w-full gap-5 ${toggleMenu ? 'hidden lg:block p-4 justify-center' : 'py-3 px-4 justify-between'} mt-3 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg`} >
          <span className={`font-opensans text-sm font-medium text-white leading-5 ${toggleMenu ? 'hidden' : 'block'}`}>New Chat</span>
          <img src={add} alt="new chat icon" width={15} height={15} className="color-white invert" />
        </Button>
      </div>
    </section >
  )
}

export default Sidebar;