import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Card = ({ category }) => {
    const { id, estate_title, segment_name, image, location, status, description, area } = category;
    // console.log(category)
    return (
        <div>
            <div data-aos="flip-left"
                data-aos-duration="2000"
                className="max-w-xl p-6 rounded-md shadow-md bg-gray-900 text-gray-50">

                <img data-aos="zoom-in"
                    data-aos-duration="3000"
                    src={image} alt="home"
                    className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">{segment_name}</span>
                        <h2 className="text-xl font-semibold tracking-wide">{estate_title}</h2>
                    </div>
                    <p className="text-gray-100 text-ellipsis">{description.slice(0, 250)}</p>
                    <NavLink data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-delay="1000"
                        to={`/cardDetails/${id}`}
                        className="btn font-bold">
                        View Details
                    </NavLink>
                </div>

            </div>
        </div>
    );
};
Card.propTypes ={
    category: PropTypes.object
}
export default Card;