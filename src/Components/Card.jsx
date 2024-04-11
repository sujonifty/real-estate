import { NavLink } from "react-router-dom";

const Card = ({ category }) => {
    const { id, estate_title, segment_name, image, location, status,description, area } = category;
    console.log(category)
    return (
        <div>
            <div className="max-w-xl p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">{segment_name}</span>
                    <h2 className="text-xl font-semibold tracking-wide">{estate_title}</h2>
                </div>
                <p className="text-gray-100">{description}</p>
                <NavLink to={`/cardDetails/${id}`} className="btn font-bold">View Details</NavLink>
            </div>
        </div>
    );
};

export default Card;