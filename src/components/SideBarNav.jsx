import { useState } from "react";
import { chevronLeft, chevronRight, dayMode, nightMode } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { Button } from "../components";

const SideBarNav = ({ onToggle, onToggleItems, setToggleMenu }) => {
    const [isDark, setIsDark] = useState(true);

    const darkModeHandler = () => {
        setIsDark((dark) => !dark);
        document.documentElement.classList.toggle("dark");
    }

    return (
        <nav className={`relative flex flex-none items-center justify-between ${onToggle ? 'flex-col' : 'bg-color-gray-50 dark:bg-color-dark-200 px-4 py-2'} rounded-[20px]`}>
            <div className="flex items-center gap-3 grow">
                <a href="#">
                    <img src={headerLogo} alt="header logo" width={43} height={43} />
                </a>
                <span className={`font-poppins text-md font-medium leading-5 text-color-gray-300 dark:text-white ${onToggle ? 'hidden' : 'block'}`}>My Chats</span>
            </div>
            <Button onClick={() => darkModeHandler()} className={`flex-none hover:bg-color-gray-200 hover:dark:bg-color-dark-300 py-3 dark:py-4 px-4 rounded-full ${onToggle ? 'hidden' : 'block'}`}>
                <img src={isDark ? nightMode : dayMode} alt="header logo" width={15} height={15} />
            </Button>
            <Button onClick={() => onToggleItems(setToggleMenu)} className="absolute top-3 -right-16 flex-none hover:bg-color-gray-200 dark:hover:bg-color-dark-300 py-3 px-4 rounded-full">
                <img src={onToggle ? chevronRight : chevronLeft} alt="header logo" width={11} height={11} className="dark:invert" />
            </Button>
        </nav>
    )
}

export default SideBarNav