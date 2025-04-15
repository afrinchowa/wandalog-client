import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Lottie from "lottie-react";
import registerAnimationData from "../../assets/lottie/register.json";
import SocialLogin from "../shared/SocialLogin";
const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!name || !email || !password) {
      console.log("All fields are required.");
      return;
    }

    try {
      const result = await createUser(email, password);
      console.log("User created in Firebase:", result.user);

      const createdAt = result?.user?.metadata?.creationTime;
      const newUser = { name, email, createdAt };

      // Save user info to the database
      const { data } = await axios.post("http://localhost:5000/users", newUser);
      if (data.insertedId) {
        console.log("User added to the database successfully.");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <Lottie animationData={registerAnimationData} loop={true} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Name"
                name="name"
                required
              />
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
                required
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
                required
              />
              <div>
                <p>
                  Already signed up?{" "}
                  <span>
                    <NavLink to="/login" className="text-blue-700">
                      Login
                    </NavLink>
                  </span>
                </p>
              </div>
              <button className="btn btn-neutral mt-4" type="submit">
                Sign Up
              </button>
            </fieldset>
          </form>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
