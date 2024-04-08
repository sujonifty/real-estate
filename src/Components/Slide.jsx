import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
import img6 from "../assets/6.jpg"
import img7 from "../assets/7.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';


const Slide = () => {
    return (
        <Swiper>
            <SwiperSlide className="">
                <img src={img1} className="w-full bg-cover" alt="" />
            </SwiperSlide>
            <SwiperSlide className="">
                <img src={img2} className="w-full bg-cover" alt="" />
            </SwiperSlide>
            <SwiperSlide className="">
                <img src={img3} className="w-full bg-cover" alt="" />
            </SwiperSlide>
            <SwiperSlide className="">
                <img src={img4} className="w-full bg-cover" alt="" />
            </SwiperSlide>
            <SwiperSlide className="">
                <img src={img5} className="w-full bg-cover" alt="" />
            </SwiperSlide>
            <SwiperSlide className="">
                <img src={img6} className="w-full bg-cover" alt="" />
            </SwiperSlide>
            <SwiperSlide className="">
                <img src={img7} className="w-full bg-cover" alt="" />
            </SwiperSlide>
         
        </Swiper>
    );
};

export default Slide;