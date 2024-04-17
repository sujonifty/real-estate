import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';


const UpdateProfile = () => {
    const { user, setUser, createUpdate } = useContext(authContext);
    
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        console.log(name, photo, email);
        createUpdate(name, photo, email)
            .then(result => {
                console.log(result)
                setUser((prevUser) => {
                    return { ...prevUser, displayName: name, photoURL: photo, email: email }
                })
                toast('Update successfully');
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div>

            <div className="hero min-h-screen my-16 py-16 bg-sky-200 card ">
                <div className="hero-content flex-col justify-center items-center ">
                    <div className="text-center w-3/4 py-10 bg-sky-100 rounded-xl ">
                        <h1 className="text-5xl font-bold">
                            Update Your Profile <br />
                            <span className="text-xl font-semibold"> is an essential handbook for refining your online identity</span>
                        </h1>
                        <p className="py-6 mx-auto font-medium w-3/4">Update Your Profile, it helps you improve your online presence with practical tips for enhancing personal and professional profiles on different platforms.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                        <form onSubmit={handleUpdateProfile} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full name</span>
                                </label>
                                <input name="name" value={user.displayName} id="name" type="text" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input name="photo" value={user.photoURL} id="photo" type="photo" placeholder="Your PhotoURL" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" value={user.email} type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Updated</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;