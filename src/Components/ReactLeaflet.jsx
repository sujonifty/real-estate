import { useContext } from "react";
import { toast } from 'react-toastify';
import { authContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form"
const ReactLeaflet = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      console.log(useForm())
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
        <div className='h-full'>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                <form onSubmit={handleUpdateProfile} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full name</span>
                        </label>
                        <input {...register('firstName')} placeholder="Your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input name="photo" id="photo" type="photo" placeholder="Your PhotoURL" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Updated</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReactLeaflet;