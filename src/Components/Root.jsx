import { useEffect } from "react";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
    const location= useLocation();
    
    useEffect(()=>{
        if(location.pathname=='/'){
            document.title=`Home`
        }
        else{
            document.title= `${location.pathname.replace('/',"")}`;
        }
    },[location.pathname])
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