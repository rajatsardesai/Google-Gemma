import { useState } from "react"
import { activity, add, chat, hamburger, help, settings } from "../assets/icons"

const Sidebar = () => {
  const [toggleMenu, setMenuToggle] = useState(true);

  return (
    <section id="sidebar" className={`w-full ${toggleMenu ? 'lg:w-[68px]' : 'lg:w-[284px]'} h-screen bg-color-blue-100 flex flex-col justify-between transition-all`}>
      <div>
        <button className={`p-3 hover:bg-gray-300 rounded-full m-3`} onClick={() => setMenuToggle(!toggleMenu)}>
          <img src={hamburger} alt="hamburger icon" width={20} height={18} />
        </button>
        <button className={`flex gap-5 mt-10 mb-2 ${toggleMenu ? 'p-3' : 'py-3 px-4'} bg-color-gray-200 hover:bg-gray-300 rounded-full mx-4`}>
          <img src={add} alt="new chat icon" width={20} height={20} />
          <span className={`font-opensans text-sm font-medium leading-5 ${toggleMenu ? 'hidden' : 'block'}`}>New Chat</span>
        </button>

        <div className={`my-8 mx-4 ${toggleMenu ? 'hidden' : 'block'}`}>
          <span className="font-opensans text-sm font-medium leading-5 p-3">Recent</span>
          <ul className="font-opensans text-sm font-medium leading-5 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-trans">
            <li className="py-2 px-4 hover:bg-color-gray-200 rounded-full">
              <a href="#" className="flex items-center gap-5"><img src={chat} alt="chat icon" width={15} height={15} />
                <span>Desi Food Memes</span>
              </a>
            </li>
            <li className="py-2 px-4 hover:bg-color-gray-200 rounded-full">
              <a href="#" className="flex items-center gap-5"><img src={chat} alt="chat icon" width={15} height={15} />
                <span>React Car</span>
              </a>
            </li>
            <li className="py-2 px-4 hover:bg-color-gray-200 rounded-full">
              <a href="#" className="flex items-center gap-5"><img src={chat} alt="chat icon" width={15} height={15} />
                <span>Car Model</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-4">
        <ul className="font-opensans text-sm font-medium leading-5 gap-5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-trans mb-8">
          <li className={`py-2 hover:bg-color-gray-200 rounded-full ${toggleMenu ? 'px-2 my-2' : 'px-4'}`}>
            <a href="#" className="flex items-center gap-5">
              <img src={help} alt="help icon" width={20} height={20} />
              <span className={`${toggleMenu ? 'hidden' : 'block'}`}>Help</span>
            </a>
          </li>
          <li className={`py-2 hover:bg-color-gray-200 rounded-full ${toggleMenu ? 'px-2 my-2' : 'px-4'}`}>
            <a href="#" className="flex items-center gap-5">
              <img src={activity} alt="activity icon" width={20} height={20} />
              <span className={`${toggleMenu ? 'hidden' : 'block'}`}>Activity</span>
            </a>
          </li>
          <li className={`py-2 hover:bg-color-gray-200 rounded-full ${toggleMenu ? 'px-2 my-2' : 'px-4'}`}>
            <a href="#" className="flex items-center gap-5">
              <img src={settings} alt="settings icon" width={20} height={20} />
              <span className={`${toggleMenu ? 'hidden' : 'block'}`}>Settings</span>
            </a>
          </li>
        </ul>
        <a href="#" className={`m-4 ${toggleMenu ? 'hidden' : 'block'}`}>
          <span className="font-opensans text-xs font-medium leading-4 before:content-[''] before:inline-block before:w-[8px] before:h-[8px] before:bg-gray-500 before:rounded-full before:mr-1"> Borda, Margao, Goa, India</span>
          <span className="block font-opensans text-xs font-medium leading-4 ms-4  text-blue-500">Based on your places (Home) • Update location</span>
        </a>
      </div>
    </section>
  )
}

export default Sidebar