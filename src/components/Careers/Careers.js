import Button from '../../UI/Button';
import join from '../../assets/images/join-us.jpg';
import tech from '../../assets/images/our-tech.jpg';
import integrity from '../../assets/images/our-integrity.jpg';
import community from '../../assets/images/our-community.jpg';

const Careers = () => {
    return (
        <div className="overflow-x-hidden">
            <section className='w-full'>
                <div className="w-full bg-careers-location-hero-mobile md:bg-careers-location-hero-tablet lg:bg-careers-location-hero-desktop h-40 flex justify-center md:justify-between items-center">
                    <h1 className="text-center md:text-left md:ml-20 text-5xl font-bold text-white">Careers</h1>
                    <div className='hidden md:flex mr-[-40px]'>
                        <div className='w-20 h-20 rounded-full border-4 border-white mr-4'></div>
                        <div className='w-20 h-20 rounded-full border-4 border-white mr-4'></div>
                        <div className='w-20 h-20 rounded-full border-4 border-white bg-white'></div>
                    </div>
                </div>
            </section>
            
            <section className='py-16 xl:flex flex-row-reverse items-center justify-between'>
                <div className='w-80 xl:w-96 mx-auto'>
                    <img className='w-full rounded-full' src={ join } />
                </div>
                <div className='w-10/12 md:w-9/12 lg:w-7/12 xl:w-4/12 xl:text-left mx-auto text-center py-8'>
                    <h2 className='font-bold text-4xl text-slate-700 '>Care to join our mission?</h2>
                    <p className='text-slate-500 py-6'>
                        We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!
                    </p>
                    <div>
                        <Button name='Say Hello'/>
                    </div>
                </div>
            </section>

            <section className='w-full' >
                <h2 className='text-4xl text-slate-700 font-bold text-center'>Why join us?</h2>
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

            <section className='py-16'>
                <div className='w-10/12 mx-auto'>
                    <div className='flex flex-col md:flex-row md:justify-between px-10 py-6 bg-slate-200 justify-center items-center'>
                        <div className='text-center md:text-left'>
                            <h3 className='font-semibold text-xl text-slate-600'>General Manager</h3>
                            <p className='py-2 text-slate-500'>Jakarta, Indonesia</p>
                        </div>
                        <div>
                            <Button name='Apply'/>
                        </div>
                    </div>
                    
                    <div className='mt-4 flex flex-col md:flex-row md:justify-between px-10 py-6 bg-slate-200 justify-center items-center'>
                        <div className='text-center md:text-left'>
                            <h3 className='font-semibold text-xl text-slate-600'>UI/UX Designer</h3>
                            <p className='py-2 text-slate-500'>Yokohama, Japan</p>
                        </div>
                        <div>
                            <Button name='Apply'/>
                        </div>
                    </div>

                    <div className='mt-4 flex flex-col md:flex-row md:justify-between px-10 py-6 bg-slate-200 justify-center items-center'>
                        <div className='text-center md:text-left'>
                            <h3 className='font-semibold text-xl text-slate-600'>Blog Content Copywriter</h3>
                            <p className='py-2 text-slate-500'>New York, United States</p>
                        </div>
                        <div>
                            <Button name='Apply'/>
                        </div>
                    </div>

                    <div className='mt-4 flex flex-col md:flex-row md:justify-between px-10 py-6 bg-slate-200 justify-center items-center'>
                        <div className='text-center md:text-left'>
                            <h3 className='font-semibold text-xl text-slate-600'>Graphic Designer</h3>
                            <p className='py-2 text-slate-500'>New York, United States</p>
                        </div>
                        <div>
                            <Button name='Apply'/>
                        </div>
                    </div>

                    <div className='mt-4 flex flex-col md:flex-row md:justify-between px-10 py-6 bg-slate-200 justify-center items-center'>
                        <div className='text-center md:text-left'>
                            <h3 className='font-semibold text-xl text-slate-600'>Fleet Supervisor</h3>
                            <p className='py-2 text-slate-500'>Jakarta, Indonesia</p>
                        </div>
                        <div>
                            <Button name='Apply'/>
                        </div>
                    </div>

                    <div className='mt-4 flex flex-col md:flex-row md:justify-between px-10 py-6 bg-slate-200 justify-center items-center'>
                        <div className='text-center md:text-left'>
                            <h3 className='font-semibold text-xl text-slate-600'>dfhgdfhmfj</h3>
                            <p className='py-2 text-slate-500'>ffgjghkhk</p>
                        </div>
                        <div>
                            <Button name='Apply'/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Careers