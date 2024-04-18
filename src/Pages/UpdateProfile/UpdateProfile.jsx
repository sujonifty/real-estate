import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';


const UpdateProfile = () => {
    const { user, setUser, createUpdate } = useContext(authContext);
    
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        createUpdate(name, photo)
            .then(result => {
                console.log(result);
                e.target.reset();
                setUser((prevUser) => {
                    return { ...prevUser, displayName: name, photoURL: photo }
                })
                toast('Update successfully');
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div>

            <div className="hero min-h-screen my-16 py-16 bg-sky-100 card ">
                <div className="hero-content flex-col justify-center items-center ">
                    <div className="text-center w-full lg:w-3/4 py-4 lg:py-10 bg-[#f4ebe4] rounded-xl ">
                        <h1 className="text-5xl font-bold">
                            Update Your Profile <br />
                            <span className="text-xl font-semibold"> is an essential handbook for refining your online identity</span>
                        </h1>
                        <p className="py-6 mx-auto font-medium w-3/4">Update Your Profile, it helps you improve your online presence with practical tips for enhancing personal and professional profiles on different platforms.</p>
                    </div>
                    <div className="my-5 card shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                        <form onSubmit={handleUpdateProfile} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full name</span>
                                </label>
                                <input name="name"  id="name" type="text" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input name="photo" id="photo" type="photo" placeholder="Your PhotoURL" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-orange-500 text-white hover:text-black">Updated</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;