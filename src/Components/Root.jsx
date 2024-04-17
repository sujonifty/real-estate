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
       
        if(location.state){
            document.title= location.state;
        }
    },[location.pathname])
    return (
        <div>
            <div className="max-w-[1280px] mx-auto">
            <div className="mb-16">
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;