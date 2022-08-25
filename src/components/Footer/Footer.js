import { Link } from 'react-router-dom'
import logo2 from '../../assets/images/logo-2.svg'
import FooterDownload from "./FooterDownload";
import Navbar from "../Header/Navbar";
import facebook from '../../assets/images/facebook.svg';
import twitter from '../../assets/images/twitter.svg';
import instagram from '../../assets/images/instagram.svg';

const Footer = () => {
    return (
        <div className="overflow-x-hidden">
            <FooterDownload />
            <div className=' bg-gray-800 h-56 md:h-20 '>
                <div className='w-10/12 h-full flex justify-around md:justify-between items-center mx-auto flex-col md:flex-row'>
                    <div className='flex items-center flex-col md:flex-row'>
                        <div>
                            <Link to='/'>
                                <img className='hover:scale-110 hover:cursor-pointer ease-in-out duration-300' src={ logo2 }/>
                            </Link>
                        </div>
                        <div className='md:ml-14 lg:ml-20'>
                            <Navbar />
                        </div>
                    </div>
                    <div className='flex'>
                        <img className='hover:cursor-pointer hover:scale-110 ease-in-out duration-300 w-6 h-6 mr-10' src={ facebook }/>
                        <img className='hover:cursor-pointer hover:scale-110 ease-in-out duration-300 w-6 h-6 mr-10' src={ twitter }/>
                        <img className='hover:cursor-pointer hover:scale-110 ease-in-out duration-300 w-6 h-6' src={ instagram }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;