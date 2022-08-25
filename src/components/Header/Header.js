import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg';
import { IoMenu, IoClose } from 'react-icons/io5';
import Navbar from './Navbar';
import Button from '../../UI/Button';
import { useState } from 'react';
import MenuMobile from './MenuMobile';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <div className='w-full bg-white'>
            <div className='w-10/12 h-16 md:h-24 mx-auto my-auto flex items-center'>
                <div className='md:hidden text-orange-500 text-3xl font-bold' onClick={() => setOpenMenu(!openMenu)}>
                    {openMenu ? <IoClose /> : <IoMenu />}
                </div>
                <div className='w-28 md:w-30 mx-auto'>
                    <Link to='/'>
                        <img className='w-full hover:cursor-pointer hover:scale-110 ease-in-out duration-300' src={ logo } />
                    </Link>
                </div>
                <div className='hidden md:flex items-center justify-between w-full ml-20'>
                    <div>
                        <Navbar />
                    </div>
                    <div>
                        <Button name='Get Scooting'/>
                    </div>
                </div>
                { openMenu && <MenuMobile />}
            </div>
        </div>
    )
}

export default Header;