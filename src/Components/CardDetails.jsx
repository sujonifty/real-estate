import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const [singleData, setSingleData] = useState({});
    useEffect(() => {
        if (data) {
            const datum = data.find((item) => id == item.id);
            setSingleData(datum);
        }
    }, [data, id])

    const { estate_title, segment_name, image, location, description, area, price, status, facilities } = singleData;

    return (
        <div>
            <section>
                <div className="w-full relative card">
                    <div className="relative shadow-xl">
                        <img className="w-full h-[30rem] " src={image} alt="home" />
                    </div>
                    <div className="absolute top-0 w-full h-full flex flex-col md:flex-row justify-center md:justify-between bg-black bg-opacity-35">

                        <div className=" w-full md:w-1/3 md:mt-10 md:ml-5 p-2 md:p-5 md:text-left  ">
                            <h1 className="text-lg rounded-xl p-3 w-auto  text-white">
                                We are more than <br />
                                just a real estate firm.
                            </h1>
                        </div>
                        <div className="w-full md:w-2/3 flex justify-center items-center flex-col md:m-20 rounded-xl  md:text-left space-y-3 md:space-y-5 p-5 md:p-16 md:pl-0  bg-base-50">
                            <h1 className=" text-2xl md:text-4xl lg:text-6xl  text-white text-center  font-bold">
                            Your Future Home<br />
                            Is Right Here.
                            </h1>
                            <button className="btn bg-orange-500 text-white hover:text-black mx-auto w-full md:w-full lg:w-4/5 font-bold xl:w-3/5">Contact us</button>
                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-sky-200 text-gray-900 my-20 card">
                <div className="container flex flex-col justify-center  mx-auto lg:flex-row">
                    <div className="w-full lg:w-1/3  p-5 ">
                        <img className="rounded-xl w-full h-full object-cover shadow-lg" src={image} alt="House" />
                    </div>
                    <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12 text-left">

                        <h2 className="text-3xl font-semibold leading-none">{estate_title}</h2>
                        <p className="mt-4 mb-8 text-sm">{description}</p>
                        <div className="container flex flex-col justify-evenly gap-10 lg:flex-row">
                            <div>
                                <p><span className="text-lg text-black font-semi-bold">Segment name:</span> {segment_name}</p>
                                <p><span className="text-lg text-black font-semi-bold">Location:</span> {location}</p>
                                <p><span className="text-lg text-black font-semi-bold">Area:</span> {area}</p>
                                <p><span className="text-lg text-black font-semi-bold">Status:</span> {status}</p>
                            </div>
                            <div>
                                <p><span className="text-lg text-black font-semi-bold">Facilities:</span>
                                    {
                                        facilities?.map((facility, index) => <li key={index} className=" font-medium ml-5">{facility}</li>)
                                    }
                                </p>
                                <p><span className="text-lg text-black font-semi-bold">Price:</span> {price}</p>
                            </div>
                        </div>
                        <button className="btn w-3/5 mx-auto my-3 bg-orange-500 text-white hover:text-black" > Book Now</button>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default CardDetails;