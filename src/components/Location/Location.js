import Button from "../../UI/Button"

const Location = () => {
    return (
        <div className="overflow-x-hidden">
            <section className='w-full'>
                <div className="w-full bg-careers-location-hero-mobile md:bg-careers-location-hero-tablet lg:bg-careers-location-hero-desktop h-40 flex justify-center md:justify-between items-center">
                    <h1 className="text-center md:text-left md:ml-20 text-5xl font-bold text-white">Locations</h1>
                    <div className='hidden md:flex mr-[-40px]'>
                        <div className='w-20 h-20 rounded-full border-4 border-white mr-4'></div>
                        <div className='w-20 h-20 rounded-full border-4 border-white mr-4'></div>
                        <div className='w-20 h-20 rounded-full border-4 border-white bg-white'></div>
                    </div>
                </div>
            </section>
            
            <section className="py-16">
                <div className="w-10/12 mx-auto h-52 md:h-[30vh] lg:h-[75vh] bg-contain bg-world-map-mobile md:bg-world-map-tablet lg:bg-world-map-desktop bg-no-repeat"></div>
                <div className="w-10/12 h-full mx-auto md:hidden">
                    <div className="w-10/12 h-16 mx-auto flex justify-center items-center bg-slate-200">
                        <h3 className="font-bold text-2xl text-slate-500">New York</h3>
                    </div>
                    <div className="w-10/12 mt-4 h-16 mx-auto flex justify-center items-center bg-slate-200">
                        <h3 className="font-bold text-2xl text-slate-500">London</h3>
                    </div>
                    <div className="w-10/12 mt-4 h-16 mx-auto flex justify-center items-center bg-slate-200">
                        <h3 className="font-bold text-2xl text-slate-500">Jakarta</h3>
                    </div>
                    <div className="w-10/12 mt-4 h-16 mx-auto flex justify-center items-center bg-slate-200">
                        <h3 className="font-bold text-2xl text-slate-500">Yokohama</h3>
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="w-10/12 md:w-8/12 lg:w-6/12 xl:w-10/12 xl:flex justify-between items-center mx-auto text-center xl:text-left">
                    <h2 className="text-slate-700 text-4xl font-bold xl:w-2/12">
                        Your city not listed?
                    </h2>
                    <p className="py-8 text-slate-500 xl:w-6/12">
                        If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.
                    </p>
                    <div className="flex justify-center">
                        <Button name='Message Us'/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Location