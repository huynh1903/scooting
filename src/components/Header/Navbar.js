import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <ul className="flex flex-col md:flex-row">
                <li className="mt-6 md:mt-0 font-bold text-gray-400 hover:scale-110 hover:cursor-pointer ease-in-out duration-300 md:mr-10">
                    <Link to='./about'>About</Link>
                </li>
                <li className="mt-6 md:mt-0 font-bold text-gray-400 hover:scale-110 hover:cursor-pointer ease-in-out duration-300 md:mr-10">
                    <Link to='./location'>Location</Link>
                </li>
                <li className="mt-6 md:mt-0 font-bold text-gray-400 hover:scale-110 hover:cursor-pointer ease-in-out duration-300">
                    <Link to='./careers'>Careers</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;