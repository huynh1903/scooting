import Navbar from "./Navbar";
import Button from "../../UI/Button";

const MenuMobile = () => {
    return (
        <div className='w-[70vw] h-[calc(100vh-64px)] fixed top-[64px] left-0 bg-slate-700 p-12 flex flex-col justify-between'>
            <Navbar />
            <div>
                <Button name='Get Scooting'/>
            </div>
        </div>
    )
}

export default MenuMobile;