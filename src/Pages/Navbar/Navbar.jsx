import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";


const Navbar = () => {
    const { user, createLogOut } = useContext(authContext);


    //handle log out 
    const handleLogOut = () => {
        createLogOut()
            .then(result => {
                console.log(result);
                toast('log out Successfully.');
            })
            .catch(error => {
                console.log(error);
            })
    }
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
        <li><NavLink to="/userProfile">User Profile</NavLink></li>
        {/* {
            user? <li><NavLink to="/userProfile">User Profile</NavLink></li> : ""
        } */}

    </>
    return (
        <div>
            <div className="navbar bg-base-100  shadow-xl rounded-lg ">
                <div className="navbar-start">
                    <div className="dropdown z-10">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="btn-ghost rounded-xl p-2">
                    <a className=" text-xl font-bold"><span className="text-orange-600 ">P</span>anorama</a><br />
                    <small className="text-[10px] font-semibold -mt-1 hidden md:flex">REAL ESTATE AGENCY</small>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <button onClick={handleLogOut} className="btn w-16 p-0">Log out</button>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="user photo" src={user.photoURL} title={user.displayName} />
                                    </div>
                                </div>
                            </>
                            :
                            <Link to="/login" className="btn">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;