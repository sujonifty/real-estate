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

    const { estate_title, segment_name, image, location, status, description, area } = singleData;

    return (
        <div>
            <section>
                <div className="w-full relative ">
                    <div className="relative shadow-xl">
                    <img className="w-full h-[30rem] " src={image} alt="home" />
                    </div>
                    <div className="absolute top-0 w-full h-full flex justify-between bg-black bg-opacity-35">

                        <div className="w-1/3 mt-10 ml-5 text-left  ">
                            <h1 className="text-lg rounded-xl p-3 w-auto  text-white">
                                We are more than <br />
                                just a real estate firm.
                            </h1>
                        </div>
                        <div className="w-2/3 flex justify-center items-center flex-col m-20 rounded-xl  text-left space-y-5 p-16 pl-0  bg-base-50">
                            <h1 className=" text-5xl text-white  font-bold">
                                We are here to <br />
                                help you find your <br />
                                dream home.
                            </h1>
                            <button className="btn w-2/5">Contact us</button>
                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-gray-800 text-gray-100">
                <div className="container flex flex-col mx-auto lg:flex-row">
                    <div className="w-full lg:w-1/3">
                        <img src={image} alt="" />
                    </div>
                    <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">

                        <h2 className="text-3xl font-semibold leading-none">{estate_title}</h2>
                        <p className="mt-4 mb-8 text-sm">{description}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CardDetails;