import Button from "../../UI/Button";
import locate from '../../assets/images/locate.svg';
import ride from '../../assets/images/ride.svg';
import scooter from '../../assets/images/scooter.svg';
import telemetry from '../../assets/images/telemetry.jpg';
import nearyou from '../../assets/images/near-you.jpg';
import payments from '../../assets/images/payments.jpg';


const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <section className="w-screen h-[calc(100vh-64px)] bg-home-hero-mobile sm:bg-home-hero-tablet md:bg-home-hero-desktop bg-no-repeat bg-cover">
                <div className="w-10/12 sm:w-8/12 md:w-6/12 xl:w-5/12 h-full mx-auto xl:mx-40 flex flex-col items-center justify-center xl:items-start">
                    <h1 className="font-bold text-white text-5xl md:text-6xl text-center xl:text-left">Scooter sharing made simple</h1>
                    <div className="mt-8 xl:ml-40">
                        <p className="text-white text-center xl:text-left">
                            Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!
                        </p>
                        <div className="mt-8 flex justify-center xl:justify-start">
                            <Button name='Get Scooting'/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 w-screen xl:px-10 flex flex-col xl:flex-row justify-around">
                <div className="m-8 md:flex xl:flex-col  ">
                    <img className="w-14 mx-auto xl:mx-0 md:w-20 md:h-20 xl:w-24 xl:h-24" src={ locate }/>
                    <div className="w-full md:w-8/12 xl:w-11/12 md:mr-8">
                        <h3 className="my-4 text-xl md:text-2xl font-semibold text-slate-700 md:text-left text-center">Locate with app</h3>
                        <p className="md:text-left text-center text-slate-500 md:mt-6">
                            Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.
                        </p>
                    </div>
                </div>
                <div className="m-8 md:flex xl:flex-col  ">
                    <img className="w-14 mx-auto xl:mx-0 md:w-20 md:h-20 xl:w-24 xl:h-24" src={ scooter }/>
                    <div className="w-full md:w-8/12 xl:w-11/12 md:mr-8">
                        <h3 className="my-4 text-xl md:text-2xl font-semibold text-slate-700 md:text-left text-center">Pick your scooter</h3>
                        <p className="md:text-left text-center text-slate-500 md:mt-6">
                            We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.
                        </p>
                    </div>
                </div>
                <div className="m-8 md:flex xl:flex-col  ">
                    <img className="w-14 mx-auto xl:mx-0 md:w-20 md:h-20 xl:w-24 xl:h-24" src={ ride }/>
                    <div className="w-full md:w-8/12 xl:w-11/12 md:mr-8">
                        <h3 className="my-4 text-xl md:text-2xl font-semibold text-slate-700 md:text-left text-center">Enjoy the ride</h3>
                        <p className="md:text-left text-center text-slate-500 md:mt-6">
                            Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-screen">
                <div className="w-10/12 md:w-9/12 lg:w-8/12 xl:w-10/12 mx-auto my-16 xl:flex xl:flex-row-reverse xl:justify-between xl:items-center">
                    <div className="w-80 xl:mx-0 mx-auto">
                        <img className="w-80 rounded-full" src={ telemetry }/>
                    </div>
                    <div className="xl:w-6/12">
                        <h2 className="mt-8 text-4xl text-slate-700 font-bold text-center xl:text-left">Easy to use riding telemetry</h2>
                        <p className="my-6 text-center xl:text-left text-slate-500">
                            The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.
                        </p>
                        <div className="flex justify-center xl:block">
                            <Button name='Learn More'/>
                        </div>
                    </div>
                </div>

                <div className="w-10/12 md:w-9/12 lg:w-8/12 xl:w-10/12 mx-auto my-16 xl:flex xl:justify-between xl:items-center">
                    <div className="w-80 xl:mx-0 mx-auto">
                        <img className="w-80 rounded-full" src={ nearyou }/>
                    </div>
                    <div className="xl:w-6/12">
                        <h2 className="mt-8 text-4xl text-slate-700 font-bold text-center xl:text-left">Coming to a city near you</h2>
                        <p className="my-6 text-center xl:text-left text-slate-500">
                            Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.
                        </p>
                        <div className="flex justify-center xl:block">
                            <Button name='Learn More'/>
                        </div>
                    </div>
                </div>

                <div className="w-10/12 md:w-9/12 lg:w-8/12 xl:w-10/12 mx-auto my-16 xl:flex xl:flex-row-reverse xl:justify-between xl:items-center">
                    <div className="w-80 xl:mx-0 mx-auto">
                        <img className="w-80 rounded-full" src={ payments }/>
                    </div>
                    <div className="xl:w-6/12">
                        <h2 className="mt-8 text-4xl text-slate-700 font-bold text-center xl:text-left">Zero hassle payments</h2>
                        <p className="my-6 text-center xl:text-left text-slate-500">
                            Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.
                        </p>
                        <div className="flex justify-center xl:block">
                            <Button name='Learn More'/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;