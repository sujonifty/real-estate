import 'animate.css';


const ContactUs = () => {
    return (
        <div>

            <section>
                <div className="w-full relative ">
                    <div className="relative shadow-xl">
                        <img className="w-full h-[25rem] md:h-[30rem] rounded-lg" src="https://i.ibb.co/Q87TB3V/banner.jpg" alt="home" />
                    </div>
                    <div className="absolute top-0 w-full h-full rounded-lg flex flex-col md:flex-row justify-center md:justify-between bg-black bg-opacity-35">

                        <div className=" w-full md:w-1/3 md:mt-10 md:ml-5 p-2 md:p-5 md:text-left  ">
                            <h1 className="animate__animated animate__rotateIn text-lg rounded-xl p-3 w-auto  text-white">
                                We are more than <br />
                                just a real estate firm.
                            </h1>
                        </div>
                        <div className="w-full md:w-2/3 flex justify-center items-center flex-col md:m-20 rounded-xl  md:text-left space-y-3 md:space-y-5 p-5 md:p-16 md:pl-0  bg-base-50">
                            <h1 className="animate__animated animate__backInDown  text-2xl md:text-4xl lg:text-5xl text-white  font-bold">
                                We are here to <br />
                                help you find your <br />
                                dream home.
                            </h1>
                            <button className="animate__animated animate__backInUp animate__delay-1s btn bg-orange-500 text-white hover:text-black mx-auto w-full md:w-full lg:w-4/5 font-bold xl:w-3/5">Contact us</button>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="animate__animated animate__rotateIn  w-full md:w-3/5 mx-auto my-20 space-y-3 bg-[#f4ebe4] p-3 lg:p-10 rounded-xl ">
                    <h1 className="animate__animated animate__backInLeft text-2xl lg:text-5xl text-orange-500 font-bold">Explore Our Exceptional Services and Products</h1>
                    <p className='animate__animated hover:animate__backInRight'>
                    Welcome to Panorama, where we pride ourselves on delivering exceptional [specific service or product]. Whether you're seeking a top-notch property appraisal service, expert consultations, or something uniquely tailored to your needs, you've come to the right place. Allow us to showcase the brilliance of our offerings and how they can meet your every expectation.
                    </p>
                </div>
            </section>

            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <div className=" relative w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square">
                        <img src="https://i.ibb.co/TKt8LVB/a5.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />

                        <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60">
                            <div className="w-full lg:w-2/3 flex justify-center items-center flex-col lg:m-20 rounded-xl  lg:text-left space-y-5 lg:p-16 lg:pl-0  bg-base-50">
                                <h1 className=" text-5xl text-white  font-bold">
                                    Meet the team<br />
                                </h1>
                                <button className="btn w-2/5 bg-orange-500 text-white hover:text-black">Click Here</button>
                            </div>

                        </div>
                    </div>
                    <img alt="" className="animate__animated animate__bounceInLeft animate__delay-2s w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/D4Qt7cP/a1.png" />
                    <img alt="" className="animate__animated animate__bounceInLeft animate__delay-1s w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/QCCG2QJ/a2.png" />
                    <img alt="" className="animate__animated animate__bounceInLeft animate__delay-4s w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/XXv2jqX/a3.png" />
                    <img alt="" className="animate__animated animate__bounceInLeft animate__delay-3s w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/zhBnfB4/a4.png" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/wLXJX4R/a6.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/dLCv5ys/a7.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/jhgFvfG/a8.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/7zWV4cz/a9.jpg" />

                    <div className="relative w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square">
                        <img src="https://i.ibb.co/7zWV4cz/a9.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />

                        <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60">
                            <div className="w-full lg:w-2/3 flex justify-center items-center flex-col lg:m-20 rounded-xl  text-left space-y-5 lg:p-16 lg:pl-0  bg-base-50">
                                <h1 className=" text-3xl lg:text-4xl text-white  font-bold">
                                    Get a consultation
                                </h1>
                                <div className="text-white text-center">
                                    <p>Highlight specific services or products here. It can be a property appraisal service, a consultation, or something uniquely yours.  Give it room to shine here.</p>
                                </div>
                                <button className="btn w-full md:w-full bg-orange-500 text-white hover:text-black lg:w-4/5 font-bold ">Book Now</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className=" space-y-10 my-10 bg-[#f4ebe4] p-3 lg:p-10 rounded-xl">
                <h1 className=" text-6xl text-orange-500 font-bold">
                    What our clients <br />
                    say about us
                </h1>

                <div className=" flex justify-center  items-stretch gap-5  ">
                    <p className="w-1/4 text-center border-2 border-gray-300 p-3 shadow-xl rounded-xl ">
                        Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable. <br />
                        <span>-Kistropher</span>
                    </p>
                    <p className="w-1/4 text-center border-2 border-gray-300 p-3 shadow-xl rounded-xl ">
                    Boost your product's credibility by adding client testimonials. People trust recommendations, so feedback from others who've tried it can make a big difference. <br />
                        <span>-Jhon Casper</span>
                    </p>
                    <p className="w-1/4 text-center border-2 border-gray-300 p-3 shadow-xl rounded-xl ">
                    Enhance your product's credibility with client testimonials. Trusted recommendations from those who've experienced it firsthand can make a significant impact. <br />
                        <span>-Eric Jonson</span>
                    </p>
                </div>

            </section>

            <section>
                <div className="w-full relative my-20">
                    <div className="relative shadow-xl">
                        <img className="w-full h-[40rem] md:h-[30rem] " src="banner.jpg" alt="home" />
                    </div>
                    <div className="absolute top-0 w-full h-full flex flex-col justify-center  lg:justify-between bg-black bg-opacity-60">

                        <div className="w-full lg:w-1/3 md:mt-20 md:ml-10 text-center md:text-left  ">
                            <h1 className="text-3xl text-white  font-bold">
                                Why work with us
                            </h1>
                        </div>
                        <div className="w-full md:w-2/3 flex flex-col lg:flex-row justify-start items-center md:m-20 rounded-xl  text-left space-y-5 md:p-16 pl-0  bg-base-50">
                            <div className=" flex flex-col justify-center items-center md:gap-10">
                                <div className=" flex flex-col md:flex-row justify-center items-center md:gap-5 text-white  ">
                                    <h1 className=" text-3xl md:text-6xl text-orange-500   font-bold">20</h1>
                                    <p className=" text-lg md:text-xl font-semi-bold">
                                        Years of <br />
                                        experience.
                                    </p>
                                </div>
                                <div className=" flex flex-col md:flex-row justify-center items-center md:gap-5 text-white  ">
                                    <h1 className=" text-3xl md:text-6xl text-orange-500   font-bold">4</h1>
                                    <p className="text-lg md:text-xl font-semi-bold">
                                        Dedicated <br />
                                        agents.
                                    </p>
                                </div>
                            </div>
                            <div className=" flex flex-col justify-center items-center md:gap-10">
                                <div className=" flex flex-col md:flex-row justify-center items-center md:gap-5 text-white  ">
                                    <h1 className=" text-3xl md:text-6xl text-orange-500  font-bold">140</h1>
                                    <p className="text-lg md:text-xl font-semi-bold">
                                        Homes sold &<br />
                                        rent in 2024.
                                    </p>
                                </div>
                                <div className=" flex flex-col md:flex-row justify-center items-center md:gap-5 text-white  ">
                                    <h1 className=" text-3xl md:text-6xl text-orange-500   font-bold">$400</h1>
                                    <p className="text-lg md:text-xl font-semi-bold">
                                        Million in <br />
                                        properties sold.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;