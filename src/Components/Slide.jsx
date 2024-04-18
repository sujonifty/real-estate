import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
import img6 from "../assets/6.jpg"
import img7 from "../assets/7.jpg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../Css/slide.css'

// import required modules
import {Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const Slide = () => {
    return (
        <>
            <Swiper
                loop={true}
                pagination={{
                    clickable: true,
                }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                modules={[Autoplay ,EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="relative">
                    <img src={img1} />
                    <div className="absolute top-0 w-full h-full rounded-xl flex justify-center  bg-black bg-opacity-50">
                        <div className="w-full md:w-2/3 flex justify-center items-center flex-col md:m-20 rounded-xl  md:text-left space-y-3 md:space-y-5 p-5 md:p-16 md:pl-0  bg-base-50">
                            <h1 className=" text-2xl md:text-5xl lg:text-3xl  text-white text-center  font-bold">
                            Let us help you <br />
                            make the move.
                            </h1>
                            <button className="btn bg-orange-500 text-white hover:text-black mx-auto w-full md:w-full lg:w-4/5 font-bold xl:w-3/5">List your home</button>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={img2} />
                    <div className="absolute top-0 w-full h-full rounded-xl flex justify-center  bg-black bg-opacity-50">
                        <div className="w-full md:w-2/3 flex justify-center items-center flex-col md:m-20 rounded-xl  md:text-left space-y-3 md:space-y-5 p-5 md:p-16 md:pl-0  bg-base-50">
                            <h1 className=" text-2xl md:text-5xl lg:text-3xl  text-white text-center  font-bold">
                            The best deal for <br />
                            your ideal home.
                            </h1>
                            <button className="btn bg-orange-500 text-white hover:text-black mx-auto w-full md:w-full lg:w-4/5 font-bold xl:w-3/5">Get Started</button>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={img3} />
                    <div className="absolute top-0 w-full h-full rounded-xl flex justify-center  bg-black bg-opacity-50">
                        <div className="w-full md:w-2/3 flex justify-center items-center flex-col md:m-20 rounded-xl  md:text-left space-y-3 md:space-y-5 p-5 md:p-16 md:pl-0  bg-base-50">
                            <h1 className=" text-2xl md:text-5xl lg:text-3xl  text-white text-center  font-bold">
                            Ready to start <br />
                            a new chapter?
                            </h1>
                            <button className="btn bg-orange-500 text-white hover:text-black mx-auto w-full md:w-full lg:w-4/5 font-bold xl:w-3/5">Click Here</button>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={img4} />
                    <div className="absolute top-0 w-full h-full rounded-xl flex justify-center  bg-black bg-opacity-50">
                        <div className="w-full md:w-2/3 flex justify-center items-center flex-col md:m-20 rounded-xl  md:text-left space-y-3 md:space-y-5 p-5 md:p-16 md:pl-0  bg-base-50">
                            <h1 className=" text-2xl md:text-5xl lg:text-3xl  text-white text-center  font-bold">
                            Handmade for <br />
                            your dream home.
                            </h1>
                            <button className="btn bg-orange-500 text-white hover:text-black mx-auto w-full md:w-full lg:w-4/5 font-bold xl:w-3/5">List your home</button>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={img5} />
                    <div className="absolute top-0 w-full h-full rounded-xl flex justify-center  bg-black bg-opacity-50">
                        <div className="w-full md:w-2/3 flex justify-center items-center flex-col md:m-20 rounded-xl  md:text-left space-y-3 md:space-y-5 p-5 md:p-16 md:pl-0  bg-base-50">
                            <h1 className=" text-2xl md:text-5xl lg:text-2xl  text-white text-center  font-bold">
                            Tailored Solutions for   <br />
                            Your Dream Home.
                            </h1>
                            <button className="btn bg-orange-500 text-white hover:text-black mx-auto w-full md:w-full lg:w-4/5 font-bold xl:w-3/5">Get Started</button>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={img6} />
                    <div className="absolute top-0 w-full h-full rounded-xl flex justify-center  bg-black bg-opacity-50">
                        <div className="w-full md:w-2/3 flex justify-center items-center flex-col md:m-20 rounded-xl  md:text-left space-y-3 md:space-y-5 p-5 md:p-16 md:pl-0  bg-base-50">
                            <h1 className=" text-2xl md:text-5xl lg:text-3xl  text-white text-center  font-bold">
                            Let's make your  <br />
                            vision come to life.
                            </h1>
                            <button className="btn bg-orange-500 text-white hover:text-black mx-auto w-full md:w-full lg:w-4/5 font-bold xl:w-3/5">Learn more</button>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={img7} />
                    <div className="absolute top-0 w-full h-full rounded-xl flex justify-center  bg-black bg-opacity-50">
                        <div className="w-full md:w-2/3 flex justify-center items-center flex-col md:m-20 rounded-xl  md:text-left space-y-3 md:space-y-5 p-5 md:p-16 md:pl-0  bg-base-50">
                            <h1 className=" text-2xl md:text-5xl lg:text-2xl  text-white text-center  font-bold">
                            Elevating Your Home  <br />
                            Search Experience.
                            </h1>
                            <button className="btn bg-orange-500 text-white hover:text-black mx-auto w-full md:w-full lg:w-4/5 font-bold xl:w-3/5">Search Here</button>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};



export default Slide;