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