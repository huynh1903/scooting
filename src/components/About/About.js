import digital from '../../assets/images/digital-era.jpg';
import better from '../../assets/images/better-living.jpg';
import tech from '../../assets/images/our-tech.jpg';
import integrity from '../../assets/images/our-integrity.jpg';
import community from '../../assets/images/our-community.jpg';

const About = () => {
    return (
        <div className='overflow-x-hidden'>
            <section className='w-full'>
                <div className="w-full bg-about-hero-mobile md:bg-about-hero-tablet lg:bg-about-hero-desktop h-40 flex justify-center md:justify-between items-center">
                    <h1 className="text-center md:text-left md:ml-20 text-5xl font-bold text-white">About</h1>
                    <div className='hidden md:flex mr-[-40px]'>
                        <div className='w-20 h-20 rounded-full border-4 border-white mr-4'></div>
                        <div className='w-20 h-20 rounded-full border-4 border-white mr-4'></div>
                        <div className='w-20 h-20 rounded-full border-4 border-white bg-white'></div>
                    </div>
                </div>
            </section>

            <section className='w-full py-20'>
                <div className='w-10/12 md:w-9/12 lg:w-7/12 mx-auto xl:w-10/12 xl:flex justify-between flex-row-reverse items-center'>
                    <img className='w-80 mx-auto xl:w-96 xl:mx-0 rounded-full' src={ digital }/>
                    <div className='xl:w-5/12 text-center xl:text-left'>
                        <h2 className='my-6 text-4xl font-bold text-slate-700'>Mobility for the digital era</h2>
                        <p className='text-slate-500'>
                            Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.
                        </p>
                    </div>
                </div>

                <div className=' mt-16 w-10/12 md:w-9/12 lg:w-7/12 mx-auto xl:w-10/12 xl:flex justify-between items-center'>
                    <img className='w-80 mx-auto xl:w-96 xl:mx-0 rounded-full' src={ better }/>
                    <div className='xl:w-5/12 text-center xl:text-left'>
                        <h2 className='my-6 text-4xl font-bold text-slate-700'>Better urban living</h2>
                        <p className='text-slate-500'>
                            We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.
                        </p>
                    </div>
                </div>
            </section>

            <section className='w-full' >
                <h2 className='text-4xl text-slate-700 font-bold text-center'>Our values</h2>
                <div className='flex flex-col xl:flex-row'>
                    <div className='mt-16'>
                        <div className='w-64 mx-auto relative'>
                            <img className='w-full rounded-full' src={ tech }/>
                            <div className='w-16 h-16 rounded-full bg-lime-500 flex items-center justify-center absolute bottom-[-30px] left-20'>
                                <span className='text-3xl font-bold text-slate-600'>01</span>
                            </div>
                        </div>
                        <div className='text-center w-10/12 md:w-8/12 lg:w-6/12 xl:w-10/12 mx-auto'>
                            <h3 className='mt-16 text-2xl text-slate-700 font-semibold'>Our tech</h3>
                            <p className='text-slate-500 mt-6'>
                                We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!
                            </p>
                        </div>
                    </div>

                    <div className='mt-16'>
                        <div className='w-64 mx-auto relative'>
                            <img className='w-full rounded-full' src={ integrity }/>
                            <div className='w-16 h-16 rounded-full bg-lime-500 flex items-center justify-center absolute bottom-[-30px] left-20'>
                                <span className='text-3xl font-bold text-slate-600'>02</span>
                            </div>
                        </div>
                        <div className='text-center w-10/12 md:w-8/12 lg:w-6/12 xl:w-10/12 mx-auto'>
                            <h3 className='mt-16 text-2xl text-slate-700 font-semibold'>Our integrity</h3>
                            <p className='text-slate-500 mt-6'>
                                We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.
                            </p>
                        </div>
                    </div>

                    <div className='mt-16 mb-16'>
                        <div className='w-64 mx-auto relative'>
                            <img className='w-full rounded-full' src={ community }/>
                            <div className='w-16 h-16 rounded-full bg-lime-500 flex items-center justify-center absolute bottom-[-30px] left-20'>
                                <span className='text-3xl font-bold text-slate-600'>03</span>
                            </div>
                        </div>
                        <div className='text-center w-10/12 md:w-8/12 lg:w-6/12 xl:w-10/12 mx-auto'>
                            <h3 className='mt-16 text-2xl text-slate-700 font-semibold'>Our community</h3>
                            <p className='text-slate-500 mt-6'>
                                We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;