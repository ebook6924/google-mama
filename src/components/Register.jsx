import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProviders";

const Register = () => {
  const {user, createUser, } = useContext(AuthContext);

  console.log(user, createUser);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log( name,email, password);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset('')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleGoogle = ()=>{
  //   googleMama()
  // }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-4xl font-semibold">Register now!</h1>
        </div>
        <div className="card  w-full max-w-sm bg-red-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="flex items-center">
              <Link className="text-indigo-500 text-center" to="/login">
                {" "}
                <small>Login now ?</small>
              </Link>
              {/* <button onClick={handleGoogle} className="btn btn-outline ml-3">Google</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
