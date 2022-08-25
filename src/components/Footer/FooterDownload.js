import AppstoreIcon from '../../assets/images/app-store-2.svg';
import GoogleplayIcon from '../../assets/images/google-play-2.svg';

const FooterDownload = () => {
    return (
        <div className="bg-footer-pattern bg-no-repeat bg-right-bottom mr-[-200px] bg-slate-600 h-80">
            <div className='w-screen h-full '>
                <div className='w-11/12 sm:w-10/12 h-full flex flex-col xl:flex-row justify-around xl:justify-between items-center mx-auto'>
                    <div className='xl:w-5/12'>
                        <h1 className='text-white font-bold text-4xl sm:text-5xl leading-tight text-center'>Sign up and <br/>Scoot off today</h1>
                    </div>
                    <div className='flex xl:w-5/12 justify'>
                        <img className='hover:cursor-pointer hover:scale-110 ease-in-out duration-300' src= { AppstoreIcon } />
                        <img className='ml-2 sm:ml-4 hover:cursor-pointer hover:scale-110 ease-in-out duration-300' src= { GoogleplayIcon }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterDownload;