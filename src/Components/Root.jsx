import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <div className="max-w-[1280px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;