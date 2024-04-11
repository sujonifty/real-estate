import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';


const Login = () => {
    const { createLogin, createGoogleUser, createGithubUser } = useContext(authContext);
    //Handle login 
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        createLogin(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                console.log(user.email);
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
                toast('Login successfully by google');
            })
            .catch(error => {
                console.error(error);
            })
    }
    // login by github
    const handleGithubLogin = () => {
        createGithubUser()
            .then(result => {
                const user = result.user
                console.log(user);
                console.log(user.email);
                toast('Login successfully by GitHub');
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="flex justify-center items-center">
            <div className="card shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>

                    <p>Don't have an account? Please <Link to="/register" className="text-blue-700 font-semibold">Register</Link></p>
                </form>
                <div onClick={handleGoogleLogin} className="form-control mt-6">
                    <button className="btn btn-primary">Login By Google</button>
                </div>
                <div className="form-control mt-6">
                    <button onClick={handleGithubLogin} className="btn btn-primary">Login by GitHub</button>
                </div>
            </div>
        </div>
    );
};

export default Login;