import { Link } from "react-router-dom";


const Register = () => {
     //Handle login 
     const handleRegister = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
    }
    return (
        <div>
            <div className="flex justify-center items-center">
            <div className="card shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
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
                        
                    </div>
                    <div className="form-control mt-6">
                        <button  className="btn btn-primary">Register</button>
                    </div>
                    <p>Already have an account? Please <Link to="/login" className="text-blue-700 font-semibold">Login</Link></p>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Register;