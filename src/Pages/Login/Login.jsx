import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";


const Login = () => {

    const { createLogin, createGoogleUser, createGithubUser, error, setError } = useContext(authContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    //Handle login 
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError("");

        createLogin(email, password)
            .then(result => {
                console.log(result);
                // const user = result.user
                // const userName = result.displayName;
                e.target.reset();
                navigate(location?.state ? location.state : '/')
                toast('Login successfully');
            })
            .catch(error => {
                console.error(error);
            })
    }
    // login by google
    const handleGoogleLogin = () => {
        createGoogleUser()
            .then(result => {
                const user = result.user
                console.log(user);
                console.log(user.email);
                navigate(location?.state ? location.state : '/')
                toast('Login successfully by google');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    // login by github
    const handleGithubLogin = () => {
        createGithubUser()
            .then(result => {
                const user = result.user
                console.log(user);
                console.log(user.email);
                navigate(location?.state ? location.state : '/')
                toast('Login successfully by GitHub');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className="flex justify-center items-center">
            <div className="card shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body p-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="grow"
                            placeholder="password" />

                        <span onClick={() => { setShowPassword(!showPassword) }}>
                            {
                                showPassword ? <IoMdEyeOff /> : <IoMdEye />

                            }
                        </span>

                    </label>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    {
                        error && <small className="text-red-700">{error}</small>
                    }
                    <div className="form-control mt-6">
                        <button className="btn bg-orange-500 text-white hover:text-black">Login</button>
                    </div>

                    <p>Don't have an account? Please <Link to="/register" className="text-blue-700 font-semibold">Register</Link></p>
                </form>
                <div className="divider">OR</div>
                <div onClick={handleGoogleLogin} className="form-control mt-6">
                    <button className="btn bg-orange-500 w-4/5 mx-auto text-white hover:text-black">Login By Google</button>
                </div>
                <div className="form-control mt-6">
                    <button onClick={handleGithubLogin} className="btn w-4/5 mx-auto bg-orange-500 text-white hover:text-black">Login by GitHub</button>
                </div>
            </div>
        </div>
    );
};

export default Login;