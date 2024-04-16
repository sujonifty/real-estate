import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';


const UpdateProfile = () => {
    const { user, setUser, createUpdate } = useContext(authContext);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name, photo);
        createUpdate(name, photo)
            .then(result => {
                console.log(result)
                setUser((prevUser) => {
                    return { ...prevUser, displayName: name, photoURL: photo }
                })
                toast('Update successfully');
            })
            .catch(error => {
                console.error(error);
            })
    }

    console.log(user)
    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-t-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-100 bg-[#1d2d42] dark:text-gray-800">

                <form onSubmit={handleUpdateProfile} className="space-y-6">
                    <h2 className="text-xl font-semibold sm:text-2xl">Update Your Profile</h2>

                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input name="name" id="name" type="text" placeholder="Your name" className="w-full p-3 text-black rounded dark:bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">PhotoURL</label>
                        <input name="photo" id="photo" type="photo" placeholder="Your PhotoURL" className="w-full p-3 text-black rounded dark:bg-gray-100" />
                    </div>

                    <button type="submit" className="w-2/4 bg-gray-500 btn p-3 text-sm font-bold tracking-wide uppercase rounded hover:text-black text-gray-50">Updated</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;