import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';
import { updateProfile } from "firebase/auth";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

const Register = () => {
    const { createUser } = useContext(authContext);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    //Handle login 
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        setError("");

        if (password.length < 6) {
            setError('password must be 6 characters');
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            setError('password must be an Uppercase & LowerCase letter');
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user
                // update profile 
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo,

                })
                    .then(() => {
                        console.log("profile updated");
                    })
                    .catch(error => {
                        console.error(error);
                    })
                toast('Register successfully')
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="card shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body bg-[url('../assets/7.jpg')]">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input name="photo" type="text" placeholder="PhotoURL" className="input input-bordered" required />
                        </div>
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
                        {
                            error && <small className="text-red-700">{error}</small>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have an account? Please <Link to="/login" className="text-blue-700 font-semibold">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;