import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Card = ({ category }) => {
    const { id, estate_title, segment_name, image, location, description, area } = category;
    // console.log(category)
    return (
        <div>
            <div data-aos="flip-left"
                data-aos-duration="2000"
                className="max-w-xl p-6 sp rounded-md  bg-gray-200 shadow-xl text-gray-900">

                <img data-aos="zoom-in"
                    data-aos-duration="3000"
                    src={image} alt="home"
                    className="object-cover object-center w-full rounded-md h-72 bg-black" />
                <div className="space-y-3" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <p><span className="text-lg font-semi-bold">Segment name:</span> {segment_name}</p>
                    <h2 className="text-xl font-semibold tracking-wide">{estate_title}</h2>
                    <p className="text-black text-balance w-11/12">{description.slice(0, 200)}</p>
                    <div className="mt-6 mb-2 text-start pl-5">
                        <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">{segment_name}</span>
                        <p><span className="text-lg font-semi-bold">Location:</span> {location}</p>
                    </div>
                    <NavLink data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-delay="1000"
                        to={`/cardDetails/${id}`}
                        className="btn w-full font-bold bg-orange-500 text-white hover:text-black">
                        View Details
                    </NavLink>
                </div>

            </div>
        </div>
    );
};
Card.propTypes = {
    category: PropTypes.object
}
export default Card;