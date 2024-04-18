import Card from "../../Components/Card";
import Slide from "../../Components/Slide";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Slide></Slide>

            <div className="bg-[#f4ebe4] rounded-lg  w-full lg:w-4/5 mx-auto text-balance space-y-4 my-20  p-2 lg:p-5">
                <h1 className="font-bold text-5xl text-orange-400">A New Perspective on Property</h1>
                <h1>Welcome to Panorama Real Estate – where every view tells a story. Our mission is to provide you with panoramic perspectives on properties, guiding you through an immersive experience as you search for your ideal home or investment opportunity. With a focus on capturing the essence of each property through stunning visuals and detailed descriptions, we aim to make your real estate journey both captivating and informative. Get ready to explore a world of possibilities with Panorama Real Estate.</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mb-20">
                {
                    categories.map(category => <Card key={category.id} category={category}> </Card>)
                }
            </div>

            <div className="my-20 bg-[#f4ebe4] p-3 lg:p-10 rounded-lg">
                <div className="w-full lg:w-4/5  mx-auto p-2 lg:p-5 text-balance space-y-4">
                    <h1 className="font-bold text-5xl text-orange-400">See How It Works</h1>
                    <p>
                        Welcome to Panorama.Step into our user-friendly interface and immerse yourself in a diverse selection of property listings. Each listing is thoughtfully curated with detailed descriptions and captivating imagery, providing you with an immersive experience as you search for your perfect home or investment opportunity.Browse listings, save favorites, and schedule tours effortlessly. From finding your dream home to closing the deal, we've got you covered. Let's get started.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    <div className="border-2 border-gray-300 p-3 shadow-xl rounded-xl text-left space-y-2 lg:space-y-4">
                        <img src="https://i.ibb.co/V2DHT1y/c3.png" alt="working process" />
                        <div className="lg:ml-10 space-y-2">
                            <p className="text-xl font-bold">Choose a Category</p>
                            <p className="w-full lg:w-4/5">Explore our curated selection of categories tailored to meet your needs and guide you towards your goals</p>
                        </div>

                    </div>
                    <hr className=" w-1/5 border-b-dotted border-8" />
                    <div className="border-2 border-gray-300 p-3 shadow-xl rounded-xl text-left space-y-2 lg:space-y-4">
                        <img src="https://i.ibb.co/DRSsPDw/c1.png" alt="working process" />
                        <div className="lg:ml-10 space-y-2">
                            <p className="text-xl font-bold">Find Real Estate</p>
                            <p className="w-full lg:w-4/5">Browse curated listings with detailed descriptions and imagery tailored to your preferences. Let's find your perfect home together."</p>
                        </div>
                    </div>
                    <hr className=" w-1/5 border-b-dotted border-8" />
                    <div className="border-2 border-gray-300 p-3 shadow-xl rounded-xl text-left space-y-2 lg:space-y-4">
                        <img src="https://i.ibb.co/J7DTfrN/c2.png" alt="working process" />
                        <div className="lg:ml-10 space-y-2">
                            <p className="text-xl font-bold">Take the Keys</p>
                            <p className="w-full lg:w-4/5">We'll guide you through the transaction process and provide valuable resources for a smooth transition. Let's make your dream home a reality."</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-full lg:w-4/5 mx-auto text-balance space-y-4 my-10  p-2 lg:p-5 ">
                <div className="text-center space-y-4">
                    <p>
                        <span className="text-2xl font-bold">WE ALWAYS HAVE TRUST</span> <br />
                        <span className="font-bold text-2xl text-orange-400">OUR CLIENTS</span>
                    </p>
                    <p>
                    where trust forms the foundation of our client relationships. At our core, we believe that trust is not just earned but nurtured through every interaction. With a steadfast commitment to integrity and transparency, we prioritize our clients' needs above all else. Join us on a journey where your trust is valued, your concerns are heard, and your satisfaction is our ultimate goal. Experience the difference trust makes with 'We Always Have Trust: Our Clients'.
                    </p>
                </div>
                <section className="py-6 dark:bg-gray-300">
                    <div className="container flex flex-col justify-center p-4 mx-auto">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                            <img className="border-2 border-gray-300 p-3 shadow-xl rounded-xl object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/JHqD4jP/partner-01.png" />
                            <img className="border-2 border-gray-300 p-3 shadow-xl rounded-xl object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/fDh1VNL/partner-02.png" />
                            <img className="border-2 border-gray-300 p-3 shadow-xl rounded-xl object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/DWp0nmF/partner-03.png" />
                            <img className="border-2 border-gray-300 p-3 shadow-xl rounded-xl object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/SJG7LXr/partner-04.png" />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Home;