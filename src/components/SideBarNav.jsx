import { chevronLeft, chevronRight, nightMode } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { Button } from "../components";

const SideBarNav = ({ onToggle, onToggleItems, setToggleMenu }) => {
    return (
        <nav className={`relative flex flex-none items-center justify-between ${onToggle ? 'flex-col py-4' : 'bg-color-gray-50 px-4 py-2'} rounded-[20px]`}>
            <div className="flex items-center gap-1 grow">
                <a href="#">
                    <img src={headerLogo} alt="header logo" width={43} height={43} />
                </a>
                <span className={`font-poppins text-md font-medium leading-5 text-color-gray-300 ${onToggle ? 'hidden' : 'block'}`}>My Chats</span>
            </div>
            <Button className={`flex-none hover:bg-color-gray-200 py-3 px-4 rounded-full ${onToggle ? 'hidden' : 'block'}`}>
                <img src={nightMode} alt="header logo" width={15} height={15} />
            </Button>
            <Button onClick={() => onToggleItems(setToggleMenu)} className="absolute -right-16 flex-none hover:bg-color-gray-200 py-3 px-4 rounded-full">
                <img src={onToggle ? chevronRight : chevronLeft} alt="header logo" width={11} height={11} />
            </Button>
        </nav>
    )
}

export default SideBarNav