import { user } from "../assets/icons";
import { Input } from "../components";

const MainNav = () => {
    return (
        <div className="flex justify-end py-2 px-5">
            {/* <Input type="text" value="New Chat" className="bg-white" /> */}
            <div className="rounded-full border border-slate-500 dark:border-white p-3">
                <img src={user} alt="user icon" width={15} height={15} className="dark:invert" />
            </div>
        </div>
    )
}

export default MainNav;