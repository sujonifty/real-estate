import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location=useLocation();

    const {user, loading}= useContext(authContext);
    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname} to="/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;