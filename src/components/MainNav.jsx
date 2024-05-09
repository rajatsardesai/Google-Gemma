import { add } from "../assets/icons";
import { Input } from "../components";

const MainNav = () => {
    return (
        <div className="flex justify-end py-1 px-5">
            {/* <Input type="text" value="New Chat" className="bg-white" /> */}
            <img src={add} alt="new chat icon" width={15} height={15} className="m-4" />
        </div>
    )
}

export default MainNav