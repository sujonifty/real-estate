import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {
    return (
        <div className="h-[cal(vh)]">
           

            {/* <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-t-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-100 bg-[#1d2d42] dark:text-gray-800">
                <div className="flex flex-col justify-between">
                    <div className="space-y-10">
                        <h2 className="text-4xl font-bold leading-tight lg:text-3xl">FIND YOUR NEXT HOME</h2>
                        <div className="dark:text-gray-600">With our expertise and dedication, we're here to guide you on your journey to discovering the ideal place to call your own. Welcome to a seamless experience of finding your perfect home.</div>
                    </div>
                    <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form noValidate="" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="Your name" className="w-full p-3 rounded dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" placeholder="Your email" className="w-full p-3 rounded dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm ">Message</label>
                        <textarea id="message" placeholder="write here" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
                    </div>
                    <button type="submit" className="w-2/4 bg-gray-500 btn p-3 text-sm font-bold tracking-wide uppercase rounded hover:text-black text-gray-50">Send Message</button>
                </form>
            </div> */}
            

            <footer className="px-4 divide-y bg-[#091d35] dark:bg-gray-100 text-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3 ">
                        <div rel="noopener noreferrer" className="flex flex-col justify-center space-x-3 lg:justify-start">

                            <a className="text-start mt-20 pl-4 text-xl font-bold"><span className="text-orange-600">P</span>anorama<br />
                                <small className="text-[10px] font-semibold -mt-1 hidden md:flex">REAL ESTATE AGENCY</small>
                            </a>

                            <a>
                                <p className=" text-start my-3 w-3/4">By the Padma's tranquil flow, we offer the essentials for your real estate journey. Welcome to our Panorama.</p>
                            </a>
                            <div className="flex justify-start items-center gap-5">
                                <div className="p-3 hover:bg-slate-400 rounded-full  bg-slate-900">
                                    <FaFacebook />
                                </div>
                                <div className="p-3 hover:bg-slate-400 bg-slate-900 rounded-full">
                                    <FaTwitter />
                                </div>
                                <div className="p-3 hover:bg-slate-400 rounded-full bg-slate-900">
                                    <FaInstagramSquare />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 py-20 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                        <div className="space-y-3">
                            <h3 className="tracking-wide text-lg font-bold uppercase text-gray-50 dark:text-gray-900">Product</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Features</a>
                                </li>
                                
                                <li>
                                    <a rel="noopener noreferrer" href="#">Pricing</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Integrations</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide text-lg font-bold uppercase text-gray-50 dark:text-gray-900">Company</h3>
                            <ul className="space-y-1">
                            <a rel="noopener noreferrer" href="#">Blogs</a>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Privacy</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="uppercase text-lg font-bold text-gray-50 dark:text-gray-900">Developers</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Public API</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Documentation</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Guides</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <div className="uppercase text-lg font-bold text-gray-50 dark:text-gray-900">Quick Links</div>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Support Center</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Press Info</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">User's Guides</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="py-6 text-sm text-center text-gray-400 dark:text-gray-600">© 1968 Company Co. All rights reserved.</div>
            </footer>

        </div>
    );
};

export default Footer;